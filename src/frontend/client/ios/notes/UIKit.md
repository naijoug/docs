# UIKit

## reference

- [2015-12-08 如何正确地写好一个界面](http://oncenote.com/2015/12/08/How-to-build-UI/)
- [2015-05-25 如何设计一个 iOS 控件?(iOS 控件完全解析)](https://www.codingtour.com/posts/%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AA-ios-%E6%8E%A7%E4%BB%B6-ios-%E6%8E%A7%E4%BB%B6%E5%AE%8C%E5%85%A8%E8%A7%A3%E6%9E%90/)
- [2015-05-17 优化`UITableViewCell`高度计算的那些事](http://blog.sunnyxx.com/2015/05/17/cell-height-calculation/)
- [2014-12-25 `UIScrollView` 实践经验](https://tech.glowing.com/cn/practice-in-uiscrollview)

## UIView

- `UIView` vs `CALayer`
  
  | 类型 | 说明
  | --- | ---
  | UIView    | 用户交互，`UIView = CALayer.delegate`
  | CALayer   | 图像和动画的渲染

- `bounds` & `frame` & `anchorPoint` & `position`

  | 类型 | 说明
  | --- | ---
  | `bounds`          | 相对于自身控件
  | `frame`           | 相对于父控件
  | `anchorPoint`     | 锚点; 范围 : 0.0 (layer 左上角) ~ 1.0 (layer 右下角); 默认为 : (0.5, 0.5)
  | `position`        | layer 中的 anchorPoint 点在 superLayer 中的位置坐标

  ```objc
  // frame、position 与 anchorPoint 的关系
  frame.origin.x = position.x - anchorPoint.x * bounds.size.width；  
  frame.origin.y = position.y - anchorPoint.y * bounds.size.height；
  ```

- `layout` vs `display`

  | 概念 | 标记函数 | 自动调用函数 | 功能说明
  | --- | --- | --- | ---
  | layout (布局)     | `setNeedsLayout`  | `layoutSubViews`  | 将元素位置进行重新排列布局
  | display (绘图)    | `setNeedsDisplay` | `drawRect:`       | 将元素绘制显示出来

- `setNeedsDisplay` vs `layoutIfNeeded`

  | 方法 | 说明
  | --- | ---
  | `setNeedsDisplay`   | 给视图添加标记，需要重新布局
  | `layoutIfNeeded`    | 检查是否有视图被标记，有标记立即刷新布局

- `xib` vs `storyboard`

  * `xib` 加载流程 
    > `initWithCoder:` -> `awakeAfterUsingCoder:` -> `awakeFromNib`
  * `Segue` : `storyboard` 用来界面跳转的线，是一个 `UIStoryboardSegue` 对象

  | 类型 | 说明
  | --- | ---
  | `xib`         | 轻量级，描述局部的 UI 界面
  | `storyboard`  | 重量级，描述整个软件的页面关系

  ```objc
  // xib 文件的加载
  //  1> 直接从 bundle 中加载 xib 并创建
  NSArray *objs = [[NSBundle mainBundle] loadNibNamed:@"CustomerView" owner: nil options: nil];
  //  2> 先加载 xib 再实例化
  UINib *nib = [UINib nibWithNibName:@"CustomerView" bundle:[NSBundle mainBundle]];
  NSArray *objs = [nib instantiateWithOwner: nil options: nil];
  ```

## UIViewController

- UIViewController lifecycle 生命周期 `viewDidLoad` 加载时机
    > 现象 - 在初始化设置控制器参数时，如果进行 UI 设置，会触发 `viewDidLoad`，此时还未进行 push 跳转

- 控制器 View 创建流程 
    1. 如果 nibName 有值，就会加载对应的 xib 文件来创建 view
    2. 如果 nibName 没有值
		* 2.1> 优先加载同名 `View.xib` 文件来创建 view
		* 2.2> 再加载同名 `ViewController.xib` 文件来创建 view
		* 2.3> 如果没有找到上面所述的 xib 文件，就会用代码创建一个透明的 view

- `initWithCoder:` vs `initWithNibName:bundle:`

  ``` objc
  // 创建一个控制器的三种方法
  // 1. 通过 storyboard 创建
  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle: nil];
  //  创建 storyboard 中的初始化控制器（箭头所指的控制器）
  ViewController *vc = [storyboard instantiateInitialViewController];
  //  通过一个标识初始化对应的控制器
  ViewController *vc = [storyboard instantiateViewControllerWithIdentifier:@"id"];
  // 2. 直接创建
  ViewController *vc = [[ViewController alloc] init];
  // 3. 指定 xib 文件来创建
  ViewController *vc = [[ViewController alloc] initWithNibName:@"ViewController" bundle: nil];

  // 改变导航控制器的默认 push 动画效果
  // 定义转场动画
  CATransition* transition = [CATransition animation];
  transition.type = kCATransitionMoveIn;
  transition.subtype = kCATransitionFromTop;
  transition.duration = 0.3;
  // 修改导航控制器转场动画
  [self.navigationController.view.layer addAnimation:transition forKey:kCATransition];
  ```