/*
 * Homepage 的 Service Worker
 * - 页面导航：网络优先，失败时回退到已缓存页面，再回退到离线页
 * - 静态资源（/assets、/fonts、/pagefind、图片）：缓存优先
 * 资源带 hash，缓存优先是安全的；页面用网络优先保证内容更新。
 */
const VERSION = 'v2'
const PAGES = `pages-${VERSION}`
const ASSETS = `assets-${VERSION}`
const IMAGES = `images-${VERSION}`
const KEEP = [PAGES, ASSETS, IMAGES]
const MAX_PAGES = 500

async function precache() {
  const pages = await caches.open(PAGES)
  await pages
    .addAll([
      '/',
      '/offline.html',
      '/manifest.webmanifest',
      '/pwa/icon-192.png',
      '/pwa/icon-512.png',
    ])
    .catch(() => {})

  // 首屏 HTML 里的 hash 资源也一起预缓存，保证首次安装后离线打开首页仍有样式和脚本
  try {
    const html = await (await fetch('/')).text()
    const urls = [
      ...html.matchAll(/(?:src|href)="(\/(?:assets|fonts)\/[^"]+)"/g),
    ].map((m) => m[1])
    const assets = await caches.open(ASSETS)
    await Promise.all(urls.map((u) => assets.add(u).catch(() => {})))
  } catch (e) {}
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => !KEEP.includes(k)).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  )
})

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  if (keys.length <= max) return
  await Promise.all(keys.slice(0, keys.length - max).map((k) => cache.delete(k)))
}

async function networkFirst(request) {
  const cache = await caches.open(PAGES)
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      cache.put(request, response.clone())
      trim(PAGES, MAX_PAGES)
    }
    return response
  } catch (e) {
    const cached = await cache.match(request, { ignoreSearch: true })
    if (cached) return cached
    const offline = await caches.match('/offline.html')
    return offline || Response.error()
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  if (cached) return cached
  try {
    const response = await fetch(request)
    if (response && response.ok) cache.put(request, response.clone())
    return response
  } catch (e) {
    return cached || Response.error()
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request))
    return
  }

  if (/^\/(assets|fonts|pagefind)\//.test(url.pathname)) {
    event.respondWith(cacheFirst(request, ASSETS))
    return
  }

  if (/\.(png|jpe?g|webp|svg|gif|ico)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request, IMAGES))
  }
})
