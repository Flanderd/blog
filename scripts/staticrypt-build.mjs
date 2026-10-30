#!/usr/bin/env node
/**
 * 用 Staticrypt 加密 VitePress 构建产物中的 HTML。
 *
 * 用法：
 *   npm run build:lock              # 构建 + 加密
 *   node scripts/staticrypt-build.mjs --dist /tmp/xxx   # 只加密指定目录
 *
 * 密码来源（按优先级）：
 *   1. 环境变量 STATICRYPT_PASSWORD（Vercel / CI 用这个）
 *   2. 仓库根目录的 .env.local（已被 .gitignore 忽略，本地开发用）
 *
 * 注意：salt 必须固定在 .staticrypt.json 里，否则每次构建都会变，
 * 用户的「记住我」会全部失效。
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, renameSync, rmSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const distArg = args.indexOf("--dist");
const DIST =
  distArg !== -1 && args[distArg + 1]
    ? path.resolve(args[distArg + 1])
    : path.join(ROOT, "docs/.vitepress/dist");
const TMP = path.join(ROOT, ".staticrypt-tmp");
const CONFIG = path.join(ROOT, ".staticrypt.json");
const BIN = path.join(ROOT, "node_modules/.bin/staticrypt");

/** 极简 .env.local 解析：不引入 dotenv 依赖 */
function loadEnvLocal() {
  const file = path.join(ROOT, ".env.local");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    if (!process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

function fail(msg) {
  console.error(`\n[staticrypt] ${msg}\n`);
  process.exit(1);
}

loadEnvLocal();

if (!existsSync(DIST)) fail(`找不到构建产物：${DIST}\n请先运行 npm run build`);
if (!existsSync(BIN)) fail("找不到 staticrypt，请先运行 npm i");
if (!existsSync(CONFIG)) fail(`缺少 ${CONFIG}（salt 必须固定，否则「记住我」会失效）`);
// 兜底清洗：Vercel 上粘贴时可能带首尾空格、换行或引号
const password = (process.env.STATICRYPT_PASSWORD ?? "")
  .trim()
  .replace(/^["']|["']$/g, "");

if (!password) {
  const envName = process.env.VERCEL_ENV ?? "本地";
  const near = Object.keys(process.env).filter((k) => /staticrypt/i.test(k));
  const detail = near.length
    ? near
        .map((k) => `  · ${JSON.stringify(k)}（值长度 ${(process.env[k] ?? "").length}）`)
        .join("\n")
    : "  · 构建环境里找不到任何名字含 STATICRYPT 的变量";
  fail(
    `未设置 STATICRYPT_PASSWORD（当前构建环境：${envName}）\n` +
      `实际拿到的相近变量：\n${detail}\n\n` +
      `Vercel 侧排查：\n` +
      `  1. Settings → Environment Variables 里该变量的 Environments 是否勾选了「${envName}」\n` +
      `  2. 变量名不要带首尾空格；值不要加引号\n` +
      `  3. 改完必须 Redeploy 才会生效\n` +
      `本地开发则写入 .env.local`
  );
}

rmSync(TMP, { recursive: true, force: true });

execFileSync(
  BIN,
  [
    DIST,
    "--recursive",
    "--directory", path.relative(ROOT, TMP),
    "--config", path.relative(ROOT, CONFIG),
    "--remember", "30",   // 「记住我」有效期 30 天
    "--short",            // 密码短于 14 位时不再交互确认
    "--template-title", "需要密码",
    "--template-instructions", "本站内容已加密，请输入访问密码。",
    "--template-button", "进入",
    "--template-placeholder", "访问密码",
    "--template-error", "密码错误，请重试",
    "--template-remember", "记住我（30 天）",
    "--template-toggle-show", "显示密码",
    "--template-toggle-hide", "隐藏密码",
  ],
  { stdio: "inherit", env: { ...process.env, STATICRYPT_PASSWORD: password }, cwd: ROOT }
);

// staticrypt 会把输出放在 <TMP>/<输入目录名>/ 下
const OUT = path.join(TMP, path.basename(DIST));
if (!existsSync(OUT)) fail(`加密产物缺失：${OUT}`);

rmSync(DIST, { recursive: true, force: true });
renameSync(OUT, DIST);
rmSync(TMP, { recursive: true, force: true });

console.log(`[staticrypt] 完成：${DIST}`);
