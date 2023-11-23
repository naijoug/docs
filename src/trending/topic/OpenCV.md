# OpenCV

## Reference

- [OpenCV Docs](https://docs.opencv.org/)
- [OpenCV Python Tutorial](https://github.com/makelove/OpenCV-Python-Tutorial)
- [Face Recognition](https://github.com/ageitgey/face_recognition)
    > The world's simplest facial recognition api for Python and the command line
- [DeepFaceLive](https://github.com/iperov/DeepFaceLive)
    > Real-time face swap for PC streaming or video calls
- [IGL](https://github.com/facebook/igl)
    > Intermediate Graphics Library (IGL) is a cross-platform library that commands the GPU. It provides a single low-level cross-platform interface on top of various graphics APIs (e.g. OpenGL, Metal and Vulkan).

## Usage

```bash
$ brew install opencv       # 安装 opencv
$ pip install opencv-python # 安装 opencv-python
```

## Concept

- ROI : `region of interest` (感兴趣区域)
- 直线极坐标公式 : `ρ = x * sinθ + y * cosθ`
- 卷积(Convolution) & 滤波(Filtering)

- `OpenCV` 中的颜色空间

  | 颜色空间 | 说明
  | ---   | ---
  | BGR   | 不是我们常用RGB
  | Gray  | 灰度图
  | HSV   | H(Hue, 色彩/色度) [0 179] ; S(Saturation, 饱和度) [0 255] ; V(Value, 亮度) [0 255]
    
  ```python
  # BGR -> RGB
  img = cv2.imread(path, cv2.IMREAD_COLOR) # BGR
  # 方案一: 拆分 & 合并
  b, g, r = cv2.split(img)
  img2 = cv2.merge([r, g, b])
  # 方案二: 颜色空间转换
  img3 = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  # 方案三: 
  img4 = img[:, :, ::-1]
  img5 = img[..., ::-1]
  ```

- 运动目标检测

  | 方法 | 说明
  | -- | --
  | 光流法   | 计算量大，运算比较复杂，抗噪音能力差，对硬件要求高
  | 背景减法 | 建模要求高，易受关照突变影响
  | 帧差分法 | 计算量小，硬件要求低

## API

### 图像

- `imread(filename[, flags]) -> retval` : 读取图片
    * filename : 文件名称
    * flags : 读取方式
        + `cv2.IMREAD_COLOR` : 默认，彩色图片(不包含透明度)
        + `cv2.IMREAD_GRAYSCALE` : 灰度图
        + `cv2.IMREAD_UNCHANGE` : 原始图片(包含透明度)

- `imshow(winname, mat) -> None` : 显示图片
    * winname : 窗口名称
    * mat : 图片矩阵

- `imwrite(filename, img[, params]) -> retval` : 保存图片
    * filename : 保存的文件名
    * img : 图片
    * params : 特定格式参数
        + `cv2.IMWRITE_JPEG_QUALITY` : JPEG, 图像质量(0~100, 默认:95)
        + `cv2.IMWRITE_PNG_COMPRESSION` : PNG, 压缩级别(0~9, 默认:3)

```python
img = cv2.imread('test.png')    # 读取图片
cv2.imshow('img', img)          # 显示图片
cv2.imwrite('save.png', img)    # 保存图片
cv2.imwrite("test1.jpg", img，[int(cv2.IMWRITE_JPEG_QUALITY), 10])
cv2.imwrite("test2.png", img, [int(cv2.IMWRITE_PNG_COMPRESSION), 0]) 
cv2.namedWindow('image', cv2.WINDOW_NORMAL) # 创建窗口
cv2.imshow('image', img)        # 显示在指定窗口
cv2.waitKey(0)                  # 等待键盘输入
cv2.destoryAllWindows()         # 销毁窗口
```

### 视频

- `VideoCapture()` : 读取视频文件或摄像头视频流
    * `get(propId) -> retval` : 获取属性值
        + `cv2.CAP_PROP_FPS` : 每秒帧数
        + `cv2.CAP_PROP_FRAME_HEIGHT` : 图片帧高度
        + `cv2.CAP_PROP_FRAME_WIDTH` : 图片帧宽度
        + `cv2.CAP_PROP_FRAME_COUNT` : 总共帧数
        + `cv2.CAP_PROP_POS_FRAMES` : 当前帧数
    * `set(propId, value) -> retval` : 设置属性值
    * `isOpened() -> retval` : 检测是否初始化成功
    * `read([, image]) -> retval, image` : 读取视频下一帧
    * `release() -> None` : 关闭视频文件或摄像头硬件

- `VideoWriter_fourcc(c1, c2, c3, c4) -> retval` : 定义`fourcc`代码

- `VideoWriter()` : 视频保存
    * `fourcc(c1, c2, c3, c4) -> retval` : 定义`fourcc`代码
    * `open(filename, fourcc, fps, frameSize[, isColor]) -> retval` : 初始化视频写入
        + filename : 文件名
        + fourcc : 
        + fps : 每秒帧数(frames per second)
        + frameSize : 每一帧图片尺寸
        + isColor : 
    * `write(image) -> None` : 写入视频的下一帧
    * `release() -> None` : 关闭视频写入

### 窗口

- `namedWindow(winname[, flags]) -> None` : 创建窗口
    * winname : 窗口名字
    * flags : 显示方式
        + `cv2.WINDOW_NORMAL` : 窗口可以调整大小
        + `cv2.WINDOW_AUTOSIZE` : 自动调整
        + `cv2.WINDOW_KEEPRATIO` : 保持图片比例
        + `cv2.WINDOW_GUI_EXPANDED` : 
    
- `setWindowTitle(winname, title) -> None` : 修改窗口标题
    * winname : 窗口名字
    * title : 窗口标题

- `moveWindow(winname, x, y) -> None` : 移动窗口
    * winname : 窗口名字
    * x, y : 指定位置的坐标

- `waitKey([, delay]) -> retval` : 等待键盘输入
    * delay : 等待延迟时间(毫秒)
        + 0 : 一直等待(forever)

- `destroyAllWindows() -> None` : 销毁所有窗口

- `destroyWindow(winname) -> None` : 销毁指定窗口
    * winname : 窗口名字

- `setMouseCallback(windowName, onMouse [, param]) -> None` : 设置鼠标回调
    * onMouse : 回调函数`callback(event, x, y, flags, param) -> None`
        + event : 鼠标事件
            * `cv2.EVENT_LBUTTONDOWN` : 鼠标左键按下
            * `cv2.EVENT_MOUSEMOVE` : 鼠标移动
            * `cv2.EVENT_LBUTTONUP` : 鼠标左键释放
            * `cv2.EVENT_LBUTTONDBLCLK` : 鼠标左键双击
        + x, y : 鼠标点击坐标
        + flags : 事件标记
            * `cv2.EVENT_FLAG_LBUTTON` : 鼠标左键
            * `cv2.EVENT_FLAG_RBUTTON` : 鼠标右键
            * `cv2.EVENT_FLAG_MBUTTON` : 鼠标中键
            * `cv2.EVENT_FLAG_CTRLKEY` : Ctr
            * `cv2.EVENT_FLAG_ALTKEY` : Alt
            * `cv2.EVENT_FLAG_SHIFTKEY` : Shift
        + param : 
        
- `createTrackbar(trackbarName, windowName, value, count, onChange) -> None` : 创建滑动条
    * trackbarName : 滑动条名字
    * windowName : 窗口名字
    * value : 初始值
    * count : 最大值(0~count)
    * onChange : 回调函数`callback(value) -> None`
        + value : 修改之后的值

- `getTrackbarPos(trackbarname, winname) -> retval` : 获取滑动条的当前位置值

### 性能检测

- `getTickCount() -> retval` : 参考点到这个函数执行的时钟数

- `getTickFrequency() -> retval` : 返回时钟频率(每秒的时钟数)

- `useOptimized() -> retval` : 返回优化状态

- `setUseOptimized(onoff) -> None` : 设置是否优化


## 图像基础处理

### 绘图

- `line(img, pt1, pt2, color[, thickness[, lineType[, shift]]]) -> img` : 绘制一条直线
    * img : 图像
    * pt1 : 第一个点
    * pt2 : 第二个点
    * color : 颜色
    * thickness : 粗细
        + 1 : 默认 
        + -1 : 闭合图形会被填充
    * `lineType` : 直线类型
        + `cv2.LINE_8` : 八连接(默认)
        + `cv2.LINE_4` : 四连接 
        + `cv2.LINE_AA` : 抗锯齿
    * `shift` : 点坐标系的小数点位数
    
- `polylines(img, pts, isClosed, color[, thickness[, lineType[, shift]]]) -> img` : 绘制多条直线
    * pts : 多个点数组
    * isClosed : 是否闭环

- `arrowedLine(img, pt1, pt2, color[, thickness[, line_type[, shift[, tipLength]]]]) -> img` : 绘制箭头直线

- `rectangle(img, pt1, pt2, color[, thickness[, lineType[, shift]]]) -> img` : 绘制矩形

- `circle(img, center, radius, color[, thickness[, lineType[, shift]]]) -> img` : 绘制圆
    * center : 圆心
    * radius : 半径
    
- `ellipse(img, center, axes, angle, startAngle, endAngle, color[, thickness[, lineType[, shift]]]) -> img` : 绘制椭圆
    * center : 圆心
    * axes : 长轴和短轴长度
    * angle : 
    * startAngle : 起始角度
    * endAngle : 结束角度

- `putText(img, text, org, fontFace, fontScale, color[, thickness[, lineType[, bottomLeftOrigin]]]) -> img` : 绘制文字
    * text : 文字内容
    * org : 文字的左下角坐标
    * fontFace : 文字字体
        + `cv2.FONT_HERSHEY_SIMPLEX` : 
        + `cv2.FONT_HERSHEY_TRIPLEX` :
        + `cv2.FONT_ITALIC` : 斜体
    * fontScale : 字体缩放

### 位运算

- `bitwise_not(src[, dst[, mask]]) -> dst` : 非
    * src : 图像
    * mask : 掩模图像

- `bitwise_and(src1, src2[, dst[, mask]]) -> dst` : 与
    * src1 : 图像1
    * src2 : 图像2
    * mask : 掩模图像

- `bitwise_or(src1, src2[, dst[, mask]]) -> dst` : 或

- `bitwise_xor(src1, src2[, dst[, mask]]) -> dst` : 异或

### 图像处理

- `split(m[, mv]) -> mv` : 图像通道拆分
    * m :
    * mv : 

- `merge(mv[, dst]) -> dst` : 图像通道合并
    * mv : 
    * dst : 

- `add(src1, src2[, dst[, mask[, dtype]]]) -> dst` : 图片相加
    * src1 : 图像1
    * src2 : 图像2

- `subtract(src1, src2[, dst[, mask[, dtype]]]) -> dst` : 图片相减

- `addWeighted(src1, alpha, src2, beta, gamma[, dst[, dtype]]) -> dst` : 权重相加
    > dst = α·img1 + β·img2 + γ
    
    * alpha : 图像1权重
    * beta : 图像2权重
    * gamma : 求和的标量

- `flip(src, flipCode[, dst]) -> dst` : 翻转
    * src : 图像
    * flipCode : 翻转方向
        + 1 : 水平翻转
        + 0 : 垂直翻转
        + -1 : 水平垂直翻转
        
- `copyMakeBorder(src, top, bottom, left, right, borderType[, dst[, value]]) -> dst` : 图像扩边
    * top, bottom, left, right : 对应边界像素数
    * borderType : 边缘类型
        + `cv2.BORDER_REPLICATE` : 重复最后一个元素
        + `cv2.BORDER_REFLECT` : 边界元素滤镜
        + `cv2.BORDER_REFLECT_101` : 
        + `cv2.BORDER_WRAP` : 包裹
        + `cv2.BORDER_CONSTANT` : 有颜色的常数值边界
    * value : 边界颜色(配合`BORDER_CONSTANT`使用)

- `cvtColor(src, code[, dst[, dstCn]]) -> dst` : 转换颜色空间
    * code : 转换编码
        + `cv2.COLOR_BGR2GRAY` : BGR(彩色图) -> Gray(灰度图)
        + `cv2.COLOR_BGR2HSV` : BGR -> HSV

- `inRange(src, lowerb, upperb[, dst]) -> dst` : 取范围内的图片

### 几何变换

- `resize(src, dsize[, dst[, fx[, fy[, interpolation]]]]) -> dst` : 改变图片尺寸大小
    * src : 图像
    * dsize : 改变后的尺寸
    * fx, fy : 缩放因子(dsize==None时有效)
    * interpolation : 插值算法
        + `cv2.INTER_LINEAR` : 默认, 
        + `cv2.INTER_AREA` : 缩放时推荐
        + `cv2.INTER_CUBIC` : 扩展时推荐

- `warpAffine(src, M, dsize[, dst[, flags[, borderMode[, borderValue]]]]) -> dst` : 使用变换矩阵改变图片
    * M : 变换矩阵
    * dsize : 输出图片大小

- `getRotationMatrix2D(center, angle, scale) -> retval` : 旋转矩阵
    * center : 旋转中心 
    * angle : 旋转角度
    * scale : 旋转后的缩放因子

- `getAffineTransform(src, dst) -> retval` : 仿射矩阵(2*3矩阵)
    * src : 原始图三个点坐标(2*3矩阵)
    * dst : 目标图三个点坐标(2*3矩阵)
    
- `getPerspectiveTransform(src, dst) -> retval` : 透视矩阵(3*3矩阵)
    * src : 原始图四个点坐标(2*4矩阵)
    * dst : 目标图四个点坐标(2*4矩阵)

### 阈值

- `threshold(src, thresh, maxval, type[, dst]) -> retval, dst` : 简单阈值
    * src : 图像(灰度图)
    * thresh : 对像素值进行分类的阈值
    * maxval : 像素值高于(或低于)阈值时,赋予的新值
    * type : 阈值类型
        + `cv2.THRESH_BINARY` : 二值阈值化
        + `cv2.THRESH_BINARY_INV` : 方向二值阈值化并反转
        + `cv2.THRESH_TRUNC` : 截断阈值化
        + `cv2.THRESH_TOZERO` : 超过阈值被置为0
        + `cv2.THRESH_TOZERO_INV` : 低于阈值被置为0
        + `cv2.THRESH_OTSU` : Otsu 二值化(用于处理双峰图)
    * retval : 最优阈值(Otsu类型)

- `adaptiveThreshold(src, maxValue, adaptiveMethod, thresholdType, blockSize, C[, dst]) -> dst` : 自适应阈值
    * adaptiveMethod : 计算阈值的方法
        + `cv2.ADPTIVE_THRESH_MEAN_C` : 取相邻区域平均值
        + `cv2.ADPTIVE_THRESH_GAUSSIAN_C` : 取相邻区域加权平均,权重是一个高斯窗口
    * thresholdType : 阈值类型
    * blockSize : 领域大小
    * C : 常数(阈值 = (加权)平均值 - C)


## 图像高级处理
> LPF(Low-Pass Filter, 低通滤波) : **去除噪音, 模糊图像**(实质: 去除图片中的高频成分(边界、噪音))
> HPF(High-Pass Filter, 高通滤波) : **找到图片的边缘**

### 图像平滑(模糊)

- `filter2D(src, ddepth, kernel[, dst[, anchor[, delta[, borderType]]]]) -> dst` : 2D卷积
    > 通过卷积核处理图片上的每一个像素点(卷积核求和 -> 再取平均)
    
    * src : 图像
    * ddepth : 目标图像的期望深度
    * kernel : 卷积核
    * anchor : 锚点, 过滤点的相对位置, 默认: (-1, -1) 在内核中心
    * delta : δ, 卷积处理后的添加值
    * borderType : 边界类型
    
- `blur(src, ksize[, dst[, anchor[, borderType]]]) -> dst` : 归一化卷积
    > 使用卷积核覆盖区域所有像素平均值替换中心像素点
    
    * ksize : 卷积核尺寸

- `boxFilter(src, ddepth, ksize[, dst[, anchor[, normalize[, borderType]]]]) -> dst` : 
    * normalize : 指定内核是否归一化(True : 归一化 `== blur()` ; False : 不使用归一化)

- `GaussianBlur(src, ksize, sigmaX[, dst[, sigmaY[, borderType]]]) -> dst` : 高斯模糊, **去除高斯噪音**
    > 高斯核 : 中间值最大, 其它值根据距离递减(形成高斯分布)
    > 核 >= (11, 11) : 使用 DFT-base 算法 ; 核 < (11, 11) : 直接计算
    
    * kisze : 高斯核尺寸, 宽高可以不同(必须是正奇数), 或者为0(由sigma计算)
    * sigmaX : 高斯核在X轴方向偏差
    * sigmaY : 高斯核在Y轴方向偏差
    
- `getGaussianKernel(ksize, sigma[, ktype]) -> retval` : 创建一个高斯核
    * ktype : 值的类型

- `medianBlur(src, ksize[, dst]) -> dst` : 中值模糊, **去除椒盐噪音**
    > 使用卷积核区域的中值来代替中间像素值
    
- `bilateralFilter(src, d, sigmaColor, sigmaSpace[, dst[, borderType]]) -> dst` : 双边滤波, **保持边界清晰, 去除噪音**
    > 同时使用空间高斯权重和灰度值相识性高斯权重(计算时间长, 比较慢)
    > 空间高斯函数 : 确保只有临近区域像素对中心点有影响
    > 灰度相似性函数 : 确保只有与中心像素值相近才会被进行模糊处理(边界灰度值变化较大)
    
    * d : 过滤像素邻域直径(推荐 : 5, d > 5 : 非常慢)
    * sigmaColor : 色彩空间过滤值
    * sigmaSpace : 坐标空间过滤值


### 形态学转换

- `erode(src, kernel[, dst[, anchor[, iterations[, borderType[, borderValue]]]]]) -> dst` : 腐蚀, 白色区域减少, **去除白色噪音, 断开两个连接在一起的物体**
    > 卷积核与原图像对应的像素点值所有都是1, 则保持中心像素值不变, 否则置为0
    
    * src : 图像
    * kernel : 卷积核
    * anchor : 锚点, 默认: (-1, -1) 在内核中心
    * iterations : 迭代次数
    * borderType : 边界类型
    * borderValue : 边框值 

- `dilate(src, kernel[, dst[, anchor[, iterations[, borderType[, borderValue]]]]]) -> dst` : 膨胀, **连接两个分开的物体**
    > 卷积核与原图像对应的像素点只要有一个1, 则将中心像素值改为1, 否则为0
    > **去除白色噪音** : 先腐蚀(白色前景色减少), 在膨胀(白色噪音以除去, 不会再膨胀回来)
    
- `morphologyEx(src, op, kernel[, dst[, anchor[, iterations[, borderType[, borderValue]]]]]) -> dst` : 形态学运算
    > 腐蚀和膨胀操作的变体 
    
    * op : 操作类型
        + `cv2.MORPH_OPEN` : 开运算(== 腐蚀 & 膨胀), **去除白色椒盐噪音**
        + `cv2.MORPH_CLOSE` : 闭运算(== 膨胀 & 腐蚀), **填补前景色中的小洞(小黑点)**
        + `cv2.MORPH_GRADIENT` : 形态学梯度(膨胀 - 腐蚀), **提取前景物体轮廓**
        + `cv2.MORPH_TOPHAT` : 礼帽(== 原始图像 - 开运算图像)
        + `cv2.MORPH_BLACKHAT` : 黑帽(== 闭运算图像 - 原始图像)
    
- `getStructuringElement(shape, ksize[, anchor]) -> retval` : 构建结构化元素 
    > 用于构建不同形状的卷积核(一般是正方形, 还可以是圆、椭圆)
    
    * shape : 结构形状
        + `cv2.MORPH_RECT` : 矩形
        + `cv2.MORPH_ELLIPSE` : 椭圆形 
        + `cv2.MORPH_CROSS` : 十字形
    * ksize : 结构化元素尺寸
    * anchor : 锚点

### 图像梯度

- `Sobel(src, ddepth, dx, dy[, dst[, ksize[, scale[, delta[, borderType]]]]]) -> dst` : Sobel算子
    > 一阶或二阶导数,高斯平滑与微分操作的结合, **抗噪能力好**
    
    * src : 图像
    * ddepth : 图像深度(-1 : 与原图保持一致)
    * dx, dy : x和y方向求导阶数
    * ksize : 卷积核大小(ksize == -1, 会使用 Scharr 3x3 卷积核, 优于 Sobel 3x3)
    * scale : 缩放求导值(默认 : 没有缩放)
    * delta : 求导结果增量
    * borderType : 边界类型
    
- `Scharr(src, ddepth, dx, dy[, dst[, scale[, delta[, borderType]]]]) -> dst` : Scharr算子
    > 一阶或二阶导数
    
- `Laplacian(src, ddepth[, dst[, ksize[, scale[, delta[, borderType]]]]]) -> dst` : Laplacian算子
    > 二阶导数(类似于 Sobel 的二阶导数)

### 边界检测

- `Canny(image, threshold1, threshold2[, edges[, apertureSize[, L2gradient]]]) -> edges` : *边界检测*
    > 原理 : 5x5 高斯去噪 -> Sobel 分别计算 X 和 Y 方向图像梯度, 找到边界梯度和方向 ->  非极大值抑制(去除非边界点) -> 滞后阈值(minVal, maxVal)
    
    * image : 图像
    * threshold1 : 滞后程序的第一个阈值
    * threshold2 : 滞后程序的第二个阈值
    * apertureSize : Sobel 卷积核
    * L2gradient : 求梯度大小的方程(默认 : False)

### 图像金字塔

> 高斯金字塔 : 顶部通过底部图像中的连续的去除行和列得到
> 拉普拉斯金字塔 : 通过高斯金字塔计算得到, 公式 : Li =Gi −PyrUp(Gi+1)
> 应用 : **图像融合**

- `pyrDown(src[, dst[, dstsize[, borderType]]]) -> dst` : 高分辨率尺寸向上构建金字塔(尺寸变小, 分辨率变小)
    * src :
    * dstsize : 
    * borderType : 边界类型

- `pyrUp(src[, dst[, dstsize[, borderType]]]) -> dst` : 低分辨率向下构建金字塔(尺寸变大, 分辨率不增加)
    

### 轮廓

> 轮廓 : 具有相同颜色或灰度连续的点, 连着一起的曲线(黑色背景找白色物体)

- `findContours(image, mode, method[, contours[, hierarchy[, offset]]]) -> image, contours, hierarchy` : *查找轮廓*
    * image : 图像
    * mode : 轮廓检索模式
        + `cv2.RETR_LIST` : 提取所有轮廓, 不建立父子关系
        + `cv2.RETR_TREE` : 所有轮廓, 并创建完整的组织结构层级列表
        + `cv2.RETR_CCOMP` : 所有轮廓, 分为两级组织结构(外轮廓 & 内部空洞)
        + `cv2.RETR_EXTERNAL` : 只返回最外层轮廓, 内部子轮廓会被忽略
    * method : 轮廓近似方法
        + `cv2.CHAIN_APPROX_NONE` : 所有的边界点都会被存储
        + `cv2.CHAIN_APPROX_SIMPLE` : 压缩轮廓点, 去除冗余点    
    * offset : 
    * contours : 识别的轮廓
    * hierarchy : 计算的层级关系(格式 : [Next, Previous, First_Child, Parent])
    
- `drawContours(image, contours, contourIdx, color[, thickness[, lineType[, hierarchy[, maxLevel[, offset]]]]]) -> image` : 绘制轮廓
    * image : 
    * contours : 
    * contourIdx : 
    * color : 
    * thickness : 
    * lineType : 
    * hierarchy : 
    * maxLevel : 
    * offset : 

- `moments(array[, binaryImage]) -> retval` : 图像的矩
    * array : 
    * binaryImage : 

- `contourArea(contour[, oriented]) -> retval` : 轮廓面积
    * contour : 
    * oriented : 

- `arcLength(curve, closed) -> retval` : 轮廓周长
    * curve : 
    * closed : 

- `approxPolyDP(curve, epsilon, closed[, approxCurve]) -> approxCurve` : 近似轮廓
    * curve : 
    * epsilon : 
    * closed : 

- `convexHull(points[, hull[, clockwise[, returnPoints]]]) -> hull` : 凸包检测
    * points : 
    * clockwise : 
    * returnPoints : 

- `isContourConvex(contour) -> retval` : 凸性检测
    * contour : 

- `boundingRect(points) -> retval` : 边界矩形
    * points : 
    * retval : 

- `minAreaRect(points) -> retval` : 最小外接矩形
    * points : 

- `boxPoints(box[, points]) -> points` : 转化为坐标 
    * box : 

- `minEnclosingCircle(points) -> center, radius` : 最小外接圆
    * points : 
    * center :
    * radius : 

- `fitEllipse(points) -> retval` : 椭圆拟合
    * points : 

- `fitLine(points, distType, param, reps, aeps[, line]) -> line` : 直线拟合
    * points :
    * distType : 
    * param : 
    * reps : 
    * aeps : 

- `convexityDefects(contour, convexhull[, convexityDefects]) -> convexityDefects` : 凸缺陷(凹陷)
    * contour : 轮廓
    * convexhull : 

- `pointPolygonTest(contour, pt, measureDist) -> retval` : 点到轮廓的最短距离
    > 正 : 轮廓内部 ; 0 : 轮廓上 ; 负 : 轮廓外面

    * pt : 测试的点
    * measureDist : (True : 计算距离 ; False : 仅返回位置关系, 不计算距离)

- `matchShapes(contour1, contour2, method, parameter) -> retval` : 形状匹配
    * contour1 : 
    * contour2 :
    * method : 
    * parameter : 


### 直方图

> 图像的灰度分布, X轴灰度值(0~255), y轴具有同一灰度值的点数

BINS : 直方图每个灰度值对应的点数
DIMS : 收集数据的参考数目
RANGE : 统计灰度值范围(一般 : [0, 256])

- `calcHist(images, channels, mask, histSize, ranges[, hist[, accumulate]]) -> hist` : 计算直方图
    * images : 图像数组([img])
    * channels : 统计通道数组, 灰度图(只有一个通道, [0]), 彩色图(三个通道, B:[0] G:[1] R:[2])
    * mask : 掩模图像(None : 统计整副图像; mask : 统计掩模区域)
    * histSize : BIN的数目([256])
    * ranges : 像素值的范围([0, 256])
    * accumulate : 直方图是否叠加
    
- `equalizeHist(src[, dst]) -> dst` : 直方图均衡化
    * src : 图像

- `createCLAHE([, clipLimit[, tileGridSize]]) -> retval` : 自适应直方图均衡化
    * clipLimit : 
    * tileGridSize : 

- `calcBackProject(images, channels, hist, ranges, scale[, dst]) -> dst` : 反向投影
    * images : 
    * channels : 
    * hist : 
    * ranges : 
    * scale : 

### 傅里叶变换

> DFT : Discrete Fourier Transform
> IDFT : Inverse Discrete Fourier Transform

- `dft(src[, dst[, flags[, nonzeroRows]]]) -> dst` : 傅里叶变换

- `idft(src[, dst[, flags[, nonzeroRows]]]) -> dst` : 发傅里叶变换

- `getOptimalDFTSize(vecsize) -> retval` : 得到最佳傅里叶变换尺寸

### 模板匹配

> 在一副大图中搜寻查找模板图像位置

- `matchTemplate(image, templ, method[, result[, mask]]) -> result` : 模板匹配

- `minMaxLoc(src[, mask]) -> minVal, maxVal, minLoc, maxLoc` : 获取最大值最小值位置


### 直线检测

- `HoughLines(image, rho, theta, threshold[, lines[, srn[, stn[, min_theta[, max_theta]]]]]) -> lines` : 霍夫直线

- `HoughLinesP(image, rho, theta, threshold[, lines[, minLineLength[, maxLineGap]]]) -> lines` : 概率霍夫直线
    > P : Probabilistic(概率)
    
    * minLineLength : 线的最短长度(小于该值被忽略)
    * maxLineCap : 两条线段之间的最大间隔(小于该值两条直线被看成一条直线)
    
    
- `createLineSegmentDetector([, _refine[, _scale[, _sigma_scale[, _quant[, _ang_th[, _log_eps[, _density_th[, _n_bins]]]]]]]]) -> retval` : 创建直线检测
    > `detecte()`

### 斑点检测

-  `impleBlobDetector_create([, parameters]) -> retval` : 创建斑点检测

- `drawKeypoints(image, keypoints, outImage[, color[, flags]]) -> outImage` : 绘制关键点


### 圆形检测

- `HoughCircles(image, method, dp, minDist[, circles[, param1[, param2[, minRadius[, maxRadius]]]]]) -> circles` : 霍夫圆环
    * image : 灰度图
    * method : 检测方法，目前唯一方法: HOUGH_GRADIENT
    * dp : 累加器分辨率与图像分辨率的反比。
        + dp = 1，则累加器具有与输入图像相同的分辨率。
        + dp = 2，则累加器的宽度和高度都是一半。
    * minDist : 检测到的圆的中心之间的最小距离。
    * param1 : 检测方法的参数1
    * param2 : 检测方法的参数2
    * minRadius : 最小圆半径
    * maxRadius : 最大圆半径

### 图像分割

- `distanceTransform(src, distanceType, maskSize[, dst[, dstType]]) -> dst` : 距离变换

- `connectedComponents(image[, labels[, connectivity[, ltype]]]) -> retval, labels` : 

- `watershed(image, markers) -> markers` : 分水岭算法


### 前景提取

- `grabCut(img, mask, rect, bgdModel, fgdModel, iterCount[, mode]) -> mask, bgdModel, fgdModel` : GrabCut算法提取图像的前景


## 图像特征

### 角点检测

- `cornerHarris(src, blockSize, ksize, k[, dst[, borderType]]) -> dst` : Harris 角点检测

- `cornerSubPix(image, corners, winSize, zeroZone, criteria) -> corners` : 亚像素级精确度角点检测

- `goodFeaturesToTrack(image, maxCorners, qualityLevel, minDistance[, corners[, mask[, blockSize[, useHarrisDetector[, k]]]]]) -> corners` : Shi-Tomasi 角点检测, 

- `FastFeatureDetector_create([, threshold[, nonmaxSuppression[, type]]]) -> retval` : Fast 角点检测

### SIFT


### SURF 


### BRIEF


### ORB

- `ORB_create([, nfeatures[, scaleFactor[, nlevels[, edgeThreshold[, firstLevel[, WTA_K[, scoreType[, patchSize[, fastThreshold]]]]]]]]]) -> retval` : ORB 算法

### 特征匹配

- `BFMatcher()` : 蛮力匹配器
    * `create(cls, normType=None, crossCheck=None)` : 静态, 创建方法
    * `match(queryDescriptors, trainDescriptors[, mask]) -> matches` : 匹配
    * `knnMatch(queryDescriptors, trainDescriptors, k[, mask[, compactResult]]) -> matches` : knn 匹配

- `drawMatchesKnn(img1, keypoints1, img2, keypoints2, matches1to2, outImg[, matchColor[, singlePointColor[, matchesMask[, flags]]]]) -> outImg` : 绘制 knn 匹配

- `FlannBasedMatcher()` : FLANN 匹配器
    
- `findHomography(srcPoints, dstPoints[, method[, ransacReprojThreshold[, mask[, maxIters[, confidence]]]]]) -> retval, mask` : 

- `drawMatches(img1, keypoints1, img2, keypoints2, matches1to2, outImg[, matchColor[, singlePointColor[, matchesMask[, flags]]]]) -> outImg` : 绘制匹配


## 视频分析

### Meanshift & Camshift

- `CamShift(probImage, window, criteria) -> retval, window` : 

- `meanShift(probImage, window, criteria) -> retval, window` : 

### 光流

- `calcOpticalFlowPyrLK(prevImg, nextImg, prevPts, nextPts[, status[, err[, winSize[, maxLevel[, criteria[, flags[, minEigThreshold]]]]]]]) -> nextPts, status, err` : 

- `calcOpticalFlowFarneback(prev, next, flow, pyr_scale, levels, winsize, iterations, poly_n, poly_sigma, flags) -> flow` : 

### 背景减除

- `createBackgroundSubtractorMOG2([, history[, varThreshold[, detectShadows]]]) -> retval` : 

- `createBackgroundSubtractorKNN([, history[, dist2Threshold[, detectShadows]]]) -> retval` : 

## 摄像机标定和 3D 重构

- `findChessboardCorners(image, patternSize[, corners[, flags]]) -> retval, corners` : 

- `drawChessboardCorners(image, patternSize, corners, patternWasFound) -> image` : 

- `calibrateCamera(objectPoints, imagePoints, imageSize, cameraMatrix, distCoeffs[, rvecs[, tvecs[, flags[, criteria]]]]) -> retval, cameraMatrix, distCoeffs, rvecs, tvecs` : 

- `getOptimalNewCameraMatrix(cameraMatrix, distCoeffs, imageSize, alpha[, newImgSize[, centerPrincipalPoint]]) -> retval, validPixROI` : 

- `undistort(src, cameraMatrix, distCoeffs[, dst[, newCameraMatrix]]) -> dst` : 

- `initUndistortRectifyMap(cameraMatrix, distCoeffs, R, newCameraMatrix, size, m1type[, map1[, map2]]) -> map1, map2` : 

- `remap(src, map1, map2, interpolation[, dst[, borderMode[, borderValue]]]) -> dst` : 

- `projectPoints(objectPoints, rvec, tvec, cameraMatrix, distCoeffs[, imagePoints[, jacobian[, aspectRatio]]]) -> imagePoints, jacobian` : 

- `findFundamentalMat(points1, points2[, method[, param1[, param2[, mask]]]]) -> retval, mask` : 

- `computeCorrespondEpilines(points, whichImage, F[, lines]) -> lines` : 

- `StereoBM_create([, numDisparities[, blockSize]]) -> retval` : 

- `cv2.ml.KNearest_create()` : 
    * `train(self, samples, responses)` : 
    * `findNearest(samples, k[, results[, neighborResponses[, dist]]]) -> retval, results, neighborResponses, dist` : 
    * `predict(self, samples)` : 
    
- `cv2.ml.SVM_create()` : 

- `cartToPolar(x, y[, magnitude[, angle[, angleInDegrees]]]) -> magnitude, angle` : 

- `kmeans(data, K, bestLabels, criteria, attempts, flags[, centers]) -> retval, bestLabels, centers` : 

- `fastNlMeansDenoisingColored(src[, dst[, h[, hColor[, templateWindowSize[, searchWindowSize]]]]]) -> dst` : 

- `fastNlMeansDenoisingMulti(srcImgs, imgToDenoiseIndex, temporalWindowSize[, dst[, h[, templateWindowSize[, searchWindowSize]]]]) -> dst` : 

- `createMergeDebevec() -> retval` : 

- `createMergeRobertson() -> retval` : 

- `createTonemapDurand([, gamma[, contrast[, saturation[, sigma_space[, sigma_color]]]]]) -> retval` : 

- `createMergeMertens([, contrast_weight[, saturation_weight[, exposure_weight]]]) -> retval` : 

- `createCalibrateDebevec([, samples[, lambda[, random]]]) -> retval` : 

- `createCalibrateRobertson([, max_iter[, threshold]]) -> retval` : 

- `inpaint(src, inpaintMask, inpaintRadius, flags[, dst]) -> dst` : 

- `CascadeClassifier()` : 

