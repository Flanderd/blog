 

#### 文章目录

*   *   *   *   [Mean shift 是什么](#Mean_shift__1)
            *   [Mean shift 算法的预备知识](#Mean_shift__4)
            *   *   [什么是特征](#_5)
                *   [什么是特征空间](#_14)
                *   [什么是核密度估计](#_21)
                *   *   [核函数的表示](#_24)
            *   [Mean shift 算法](#Mean_shift__35)
            *   *   [Mean shift算法的公式推导](#Mean_shift_39)
                *   [Mean shift算法的流程](#Mean_shift_74)
                *   [Mean shift算法图示](#Mean_shift_83)
            *   [Mean shift 算法应用](#Mean_shift__100)
            *   *   [Mean Shift 算法应用在聚类](#Mean_Shift__103)
                *   [Mean Shift 算法图像分割](#Mean_Shift__128)
            *   [Mean shift 算法的不足之处](#Mean_shift__131)
            *   [参考文献](#_137)

##### Mean shift 是什么

均值偏移（Mean shift）算法是在**特征空间**中应用核密度估计的[爬山算法](https://so.csdn.net/so/search?q=%E7%88%AC%E5%B1%B1%E7%AE%97%E6%B3%95&spm=1001.2101.3001.7020)，其算法思想是假设不同簇类的数据集符合不同的概率密度分布，找到任一样本点密度增大的最快方向（可以通过Mean shift计算得到），样本密度高的区域对应该簇类的中心所在，这样样本点最终会在局部密度最大处收敛，且收敛到相同的局部最大值的样本点被认为是同一簇类的成员\[1\]。Mean shift 算法可用于聚类、图像分割、跟踪等。

##### Mean shift 算法的预备知识

###### 什么是特征

特征就是，**于己而言，特征是某些突出性质的表现，于他而言，特征是区分事物的关键，**所以，当我们要对事物进行分类或者识别，我们实际上就是提取**特征**，通过特征的表现进行判断\[2\]。事物拥有的特征例如 ：

1 人类皮肤的颜色特征：欧洲的白人皮肤，非洲的黑人皮肤

2 汽车的颜色特征 ：白色车身，黑色车身，红色车身

事物的特征可以用于抽象成特征空间的某一维度，在特征空间算法中得以应用，使算法在区分事物时更准确。

###### 什么是特征空间

特征空间是对输入数据进行一种映射。对于输入数据，通过获得感兴趣特征的参数表示，并将结果映射到参数的多维空间中的一个点，特征空间中的特征是对原始数据更高维的抽象。

如下图左边的六个图形，1 六边形，2 ，3 长方形，4, 5 圆形，6 椭圆形，如果把这些图形根据圆度和大小这两个特征进行映射，那它们在这两个维度的特征空间的坐标大致可以表示如下图右边所示。特征空间的维度和特征的选择都是根据具体情况来决定的，同样的物体根据不同的应用，选择的特征和维度都不尽相同，对特征空间的分析根据不同的具体情况也不尽相同。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/58d2daaa53694f4bac7cd828947edcc8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)​ 图1

###### 什么是核密度估计

核密度估计Kernel Density Estimation(KDE)是在概率论中用来估计未知的密度函数，属于非参数检验方法之一\[3\]。它的工作原理是在数据集上的每个样本点都设置一个[核函数](https://so.csdn.net/so/search?q=%E6%A0%B8%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020)，然后对所有的核函数相加，得到数据集的核密度估计\[1\]。核函数是映射关系的内积，映射函数本身仅仅是一种映射关系，并没有增加维度的特性，不过可以利用核函数的特性，构造可以增加维度的核函数，\*\*核函数和映射没有关系,\*\*核函数只是用来计算映射到高维空间之后的内积的一种简便方法。在Mean shift 算法中比较通用的核函数是高斯核函数(gaussian kernel)和统一内核函数(uniform kernel)。

###### 核函数的表示

设 x 1 , x 2 , ⋯   , x n x\_1,x\_2, \\cdots,x\_n x1​,x2​,⋯,xn​, 是一组 n n n个独立同分布的 d d d维随机向量。核函数K的带宽参数为h，则其样本的多元核密度估计为：  
f ^ N ( x ) ≡ 1 n h d ∑ i = 1 n K ( x − x i h ) ( 1 ) \\hat{f}\_N(x) \\equiv \\frac{1}{nh^d}\\sum\\limits\_{i=1}^n K(\\frac{x-x\_i}{h}) \\quad \\quad \\quad\\quad \\quad \\quad\\quad \\quad \\quad\\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad\\quad (1) f^​N​(x)≡nhd1​i\=1∑n​K(hx−xi​​)(1)  
如下图2，假设数据集有样本点{8,9,10,11,12.5,14}，采用高斯核作为估计的核函数，每个样本点都有设置为以该点为中心的高斯分布（蓝色虚线），则每个样本点的高斯核函数对应虚线，累加所有样本点的核函数，便得到了所有样本点的高斯核函数密度估计（黑线实线）。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/e01261b64731422583f96083fb34c38c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

图2

**Note ：** 核函数的选择其实还有很多限制的，如选取的核函数一定要满足渐进无偏(asymptotic unbiasedness),一致性(consistency)，还有均匀一致性（uniform consistency）等要求。具体的要求其实我也不是太懂，如果需要深入了解，请自行查阅参考文献\[4\];

##### Mean shift 算法

Mean shift 算法就是采用通用核函数来估计无参数密度梯度的方法。因为在大多数模式识别问题中，关于真实概率密度函数或关于其形式的信息很少。 由于缺乏关于密度的知识，我们不得不依靠非参数技术来获得密度梯度估计。估计密度梯度的一种直接方法是：首先获得概率密度函数的可微非参数估计函数，然后取其梯度来进行计算\[4\]。

###### Mean shift算法的公式推导

在公式(1)已经得到了可表示数据集样本点的多元核密度估计函数，将其改写成如下形式：  
f ^ h , K ( x ) = c k , d n h d ∑ i = 1 n k ( ∥ x − x i h ∥ 2 ) ( 2 ) \\hat{f}\_{h,K}(x) = \\frac{c\_{k,d}}{nh^d}\\sum\\limits\_{i=1}^n k(\\parallel\\frac{x-x\_i}{h}\\parallel^2) \\quad \\quad \\quad \\quad\\quad \\quad \\quad\\quad \\quad \\quad\\quad \\quad \\quad\\quad\\quad (2) f^​h,K​(x)\=nhdck,d​​i\=1∑n​k(∥hx−xi​​∥2)(2)  
其中 k ( x ) k(x) k(x)称为核的属性函数(The profile of the kernel)，在Mean shift 算法中一般采用的都是径向对称核，其要满足 K ( x ) = c k , d k ( ∥ x ∥ 2 ) K(x) = c\_{k,d}k(\\parallel x\\parallel^2) K(x)\=ck,d​k(∥x∥2)。其中 c k , d c\_{k,d} ck,d​是归一化常数，作用是使 K ( x ) K(x) K(x)的积分为1，而且一般都是严格大于0 \[4\]。

对公式(2)求其梯度，有：  
▽ ^ f h , K ( x ) ≡ ▽ f ^ h , K ( x ) = 2 c k , d n h d + 2 ∑ i = 1 n ( x − x i ) k ′ ( ∥ x − x i h ∥ 2 ) ( 3 ) \\hat{\\bigtriangledown}f\_{h,K}(x) \\equiv \\bigtriangledown\\hat{f}\_{h,K}(x) = \\frac{2c\_{k,d}}{nh^{d+2}}\\sum\\limits\_{i=1}^n (x-x\_i)k'(\\parallel\\frac{x-x\_i}{h}\\parallel^2) \\quad\\quad \\quad \\quad \\quad (3) ▽^​fh,K​(x)≡▽f^​h,K​(x)\=nhd+22ck,d​​i\=1∑n​(x−xi​)k′(∥hx−xi​​∥2)(3)  
令 g ( x ) = − k ′ ( x ) g(x) = -k'(x) g(x)\=−k′(x) ，其中 g ( x ) g(x) g(x)为 G ( x ) G(x) G(x)核函数的属性函数(The profile of the kernel)，而 G ( x ) G(x) G(x)定义为： G ( x ) = c g , d g ( ∥ x ∥ 2 ) G(x) = c\_{g,d}g(\\parallel x \\parallel^2) G(x)\=cg,d​g(∥x∥2)，则此时公式(3)可进一步变成  
▽ ^ f h , K ( x ) = 2 c k , d n h d + 2 ∑ i = 1 n ( x i − x ) g ( ∥ x − x i h ∥ 2 ) = 2 c k , d n h d + 2 \[ ∑ i = 1 n g ( ∥ x − x i h ∥ 2 ) \] \[ ∑ i = 1 n x i g ( ∥ x − x i h ∥ 2 ) ∑ i = 1 n g ( ∥ x − x i h ∥ 2 ) − x \] ( 4 ) ˆ▽fh,K(x)\=2ck,dnhd+2n∑i\=1(xi−x)g(∥x−xih∥2)\=2ck,dnhd+2\[n∑i\=1g(∥x−xih∥2)\]\[n∑i\=1xig(∥x−xih∥2)n∑i\=1g(∥x−xih∥2)−x\](4)\\begin{aligned} \\hat{\\bigtriangledown}f\_{h,K}(x) &= \\frac{2c\_{k,d}}{nh^{d+2}}\\sum\\limits\_{i=1}^n (x\_i-x)g(\\parallel\\frac{x-x\_i}{h}\\parallel^2)\\\\ &= \\frac{2c\_{k,d}}{nh^{d+2}}\[\\sum\\limits\_{i=1}^ng(\\parallel\\frac{x-x\_i}{h}\\parallel^2)\]\[\\frac{\\sum\\limits\_{i=1}^n x\_ig(\\parallel\\frac{x-x\_i}{h}\\parallel^2)}{\\sum\\limits\_{i=1}^ng(\\parallel\\frac{x-x\_i}{h}\\parallel^2)} - x\] \\quad \\quad \\quad \\quad (4) \\end{aligned} ▽^​fh,K​(x)​\=nhd+22ck,d​​i\=1∑n​(xi​−x)g(∥hx−xi​​∥2)\=nhd+22ck,d​​\[i\=1∑n​g(∥hx−xi​​∥2)\]\[i\=1∑n​g(∥hx−xi​​∥2)i\=1∑n​xi​g(∥hx−xi​​∥2)​−x\](4)​  
又由于  
f ^ h , G ( x ) = c g , d n h d ∑ i = 1 n g ( ∥ x − x i h ∥ 2 ) ( 5 ) \\hat{f}\_{h,G}(x) = \\frac{c\_{g,d}}{nh^d}\\sum\\limits\_{i=1}^n g(\\parallel\\frac{x-x\_i}{h}\\parallel^2) \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad (5) f^​h,G​(x)\=nhdcg,d​​i\=1∑n​g(∥hx−xi​​∥2)(5)  
且公式（5）一般认为都是大于0的，则公式(4)可简化为：  
▽ ^ f h , K ( x ) = f ^ h , G ( x ) 2 c k , d h 2 c g , d \[ ∑ i = 1 n x i g ( ∥ x − x i h ∥ 2 ) ∑ i = 1 n g ( ∥ x − x i h ∥ 2 ) − x \] ( 6 ) \\hat{\\bigtriangledown}f\_{h,K}(x) = \\hat{f}\_{h,G}(x) \\frac{2c\_{k,d}}{h^2c\_{g,d}}\[\\frac{\\sum\\limits\_{i=1}^n x\_ig(\\parallel\\frac{x-x\_i}{h}\\parallel^2)}{\\sum\\limits\_{i=1}^ng(\\parallel\\frac{x-x\_i}{h}\\parallel^2)} - x\] \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad (6) ▽^​fh,K​(x)\=f^​h,G​(x)h2cg,d​2ck,d​​\[i\=1∑n​g(∥hx−xi​​∥2)i\=1∑n​xi​g(∥hx−xi​​∥2)​−x\](6)  
其中公式(6)的最后一部分就是Mean shift 向量，即  
m h , G ( x ) = ∑ i = 1 n x i g ( ∥ x − x i h ∥ 2 ) ∑ i = 1 n g ( ∥ x − x i h ∥ 2 ) − x ( 7 ) m\_{h,G}(x) =\\frac{\\sum\\limits\_{i=1}^n x\_ig(\\parallel\\frac{x-x\_i}{h}\\parallel^2)}{\\sum\\limits\_{i=1}^ng(\\parallel\\frac{x-x\_i}{h}\\parallel^2)} - x \\quad\\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad\\quad \\quad \\quad \\quad\\quad \\quad \\quad \\quad (7) mh,G​(x)\=i\=1∑n​g(∥hx−xi​​∥2)i\=1∑n​xi​g(∥hx−xi​​∥2)​−x(7)

因此Mean shift向量的方向与核密度估计函数梯度的方向是一致的，且总是指向密度增加最大的方向，这样就可以通过计算Mean shift 向量来达到计算梯度的目标。

###### Mean shift算法的流程

由于Mean shift向量与局部梯度估计对齐，因此它可以定义一条通向估计密度的静止点的路径\[4\]。Mean shift算法的流程如下\[1\]：

(1) 计算每个样本 x j x\_j xj​的Mean shift向量 m h , G ( x j ) m\_{h,G}(x\_j) mh,G​(xj​)  
(2) 对每个样本点以 m h , G ( x j ) m\_{h,G}(x\_j) mh,G​(xj​)进行移动，使样本点的新位置为$x\_j = x\_j + m\_{h,G}(x\_j) $  
(3) 重复(1),(2) 直到样本点的mean shift 向量收敛为0，即 m h , G ( x ) = 0 m\_{h,G}(x) = 0 mh,G​(x)\=0  
**Note** ：在现实情况下条件(3)一般设置为低于一个阈值，即 m h , G ( x ) < t m\_{h,G}(x) < t mh,G​(x)<t可算满足条件。

###### Mean shift算法图示

下面有一些图示来演示一下Mean shift 算法的过程，下面的图都是来自参考文献\[5\]。如图三所示，在使用Mean shift 算法时，一般涉及三个部分，一是：Center of mass，即选取的样本点中心，一般我们选取的都是某个样本点(图的中心点不是样本点，仅为图示)；二是：Region of interest，这个是计算Mean shift 向量的范围(上面公式中的 ∑ i = 1 n x i \\sum\\limits\_{i=1}^n x\_i i\=1∑n​xi​部分)，这个与选取的带宽h相关；三是：Mean Shift 向量，公式(7)即为mean shift 向量的计算方法。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/f0bbf35a03eb4ba59f76c4d908391856.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center) 图3

1.  选取中心点（图中蓝色的小圆圈），根据公式(7)计算规定范围内（图中蓝色的大圆圈）的Mean shift 向量，图中橘色的小圆圈便是Mean shift计算出的下一个中心点。  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/3d7c45f3b238415098803e84e05537d2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)  
    ​ 图4
    
2.  根据计算出的Mean shift 向量，把中心点移动到新的中心点(图中橘色的小圆圈)。  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/38b393b45488450abdc95846ae477947.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center) ​ 图5
    
3.  以移动后的位置作为新的中心点（图中蓝色的小圆圈），根据公式(7)再一次计算范围内（图中蓝色的大圆圈）的Mean shift 向量，图中橘色的小圆圈便是Mean shift计算出的下一个中心点。 ​ ![在这里插入图片描述](https://img-blog.csdnimg.cn/3d08ecd3cc914fedbf55e2d9392e2048.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)  
    图6
    
4.  根据计算出的Mean shift 向量，把中心点移动到新的位置。  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/7d697008437644be8a1f11230fd598f5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)  
    图7
    
5.  重复上述过程，直至Mean shift 向量收敛，收敛处即为密度的最大处，也是对应的簇中心。  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/6e551c46941746e5bbac5a589a197237.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)  
    图8
    

##### Mean shift 算法应用

Mean shift是一种通用的非参数模式查找/聚类程序，广泛用于图像处理和分析以及计算机视觉技术，如图像去噪、[图像分割](https://so.csdn.net/so/search?q=%E5%9B%BE%E5%83%8F%E5%88%86%E5%89%B2&spm=1001.2101.3001.7020)、运动跟踪等。

###### Mean Shift 算法应用在聚类

Mean shift 聚类流程\[6\]：

假设在一个多维空间中有很多数据点需要进行聚类，Mean Shift的过程如下：

1、在未被标记的数据点中随机选择一个点作为中心center（图三中蓝色的小圆圈）；

2、找出离center距离在bandwidth之内(图三中蓝色的大圆圈)的所有点，记做集合M（图三中蓝色的大圆圈里的点）。

3、以center为中心点，计算从center开始到集合M中每个元素的向量，将这些向量相加，得到Mean shift向量。

4、center沿着Mean shift向量的方向移动（图三中黄色箭头），移动到新的中心点(图三中橘色的小圆圈)。

5、重复步骤2、3、4，直到Mean shift向量的大小很小（就是迭代到收敛），记住此时的center。注意，这个迭代过程中遇到的点都应该归类到簇C。

6、如果收敛时当前簇C的center与其它已经存在的簇C2中心的距离小于阈值，那么把C2和C合并。否则，把C作为新的聚类，增加1类。

6、重复1、2、3、4、5直到所有的点都被标记访问。

7、分类：根据每个类，对每个点的访问频率，取访问频率最大的那个类，作为当前点集的所属类。

简单的说，Mean shift就是沿着密度上升的方向寻找同属一个簇的数据点。  
聚类的代码实现我参照了\[7\]中方法，并在\[10\]中网址留下了代码的全部实现，其算法的伪代码如下：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/25fc28b7fecb4ef892c3e01d04f9a596.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

###### Mean Shift 算法图像分割

基于Mean shift 算法做图像分割的原理参考\[8\]，里面讲得也比较清楚，我不再赘述。图像分割代码实现，我参考的是\[9\],并在\[10\]中网址留下了代码的全部实现，其算法的伪代码如下：  
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f6cace990bc45578840c0c9aa9e7d7f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQnJ5YW50TGl5dWFu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

##### Mean shift 算法的不足之处

(1) 对于整个样本数据集，设置的bandwidth 是固定的，在后续的研究中有很多涉及自适应bandwidth的文献，如\[11\] \[12\]。  
(2) 需要进行多次迭代和设置mode的收敛阈值。后续的研究中，Medoid shifts和quick shift 在一定程度上解决了这些问题。

##### 参考文献

1 深入剖析Mean Shift聚类算法原理 http://www.360doc.com/content/19/0623/22/99071\_844418459.shtml

2 机器学习入门讲解：什么是特征（Feature）和特征选择(Feature Selection)? https://zhuanlan.zhihu.com/p/30404850

3 核密度估计Kernel Density Estimation(KDE) http://www.dataivy.cn/blog/%E6%A0%B8%E5%AF%86%E5%BA%A6%E4%BC%B0%E8%AE%A1kernel-density-estimation\_kde/

4 The Estimation of the Gradient of a Density Function，with applications in Pattern Recognition.

5 非常有利于mean shift算法的理解\_图文 - 百度文库 https://wenku.baidu.com/view/016cc2fe42323968011ca300a6c30c225801f038.html

6 机器学习（十）Mean Shift 聚类算法 https://blog.csdn.net/hjimce/article/details/45718593

7 Comparison between a sequential and a multithreading version of the mean shift clustering algorithm

8 mean shift 图像分割 (一)(二) (三) https://blog.csdn.net/ttransposition/article/details/38514127

9 An Implementation of the Mean Shift Algorithm https://www.ipol.im/pub/art/2019/255/?utm\_source=doi

10 https://gitee.com/bryantdai/cv-paper-reproduction/tree/master/meanshift

11 F. Meng, H. Liu, Y. Liang, L. Wei, and J. Pei, A bidirectional adaptive bandwidth mean shift strategy for clustering, in IEEE International Conference on Image Processing (ICIP), 2017, pp. 2448–2452. http://doi.org/10.1109/icip.2017.8296722

12 D. Comaniciu, V. Ramesh, and P. Meer, The variable bandwidth mean shift and data- driven scale selection, in Eighth IEEE International Conference on Computer Vision (ICCV), vol. 1, IEEE, 2001, pp. 438–445. http://doi.org/10.1109/iccv.2001.937550.

 

文章知识点与官方知识档案匹配，可进一步学习相关知识

[算法技能树](https://edu.csdn.net/skill/algorithm/?utm_source=csdn_ai_skill_tree_blog)[首页](https://edu.csdn.net/skill/algorithm/?utm_source=csdn_ai_skill_tree_blog)[概览](https://edu.csdn.net/skill/algorithm/?utm_source=csdn_ai_skill_tree_blog)52907 人正在系统学习中

本文转自 <https://blog.csdn.net/BryantDaiJB/article/details/120892597?spm=1001.2101.3001.6650.11&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-11-120892597-blog-51030884.235%5Ev38%5Epc_relevant_sort_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-11-120892597-blog-51030884.235%5Ev38%5Epc_relevant_sort_base3>，如有侵权，请联系删除。