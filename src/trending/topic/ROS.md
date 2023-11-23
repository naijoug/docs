## Wiki

- [ROS.org](http://wiki.ros.org/cn)
- [actionlib](http://wiki.ros.org/actionlib)
- [pluginlib](http://wiki.ros.org/pluginlib)

## Tutorials

- [ros_tutorials](http://wiki.ros.org/ros_tutorials)
- [common_tutorials](http://wiki.ros.org/common_tutorials)
- [ROS-Industrial Tutorials](http://wiki.ros.org/Industrial/Tutorials)
- [ROS-Industrial Training](http://ros-industrial.github.io/industrial_training/)

## Reference

- [ROS 发行版本](http://wiki.ros.org/Distributions)
- [ros docset](https://github.com/famalgosner/ros.org.docset)
- [古月居](http://www.guyuehome.com/)
- [创客智造](http://www.ncnynl.com/)
- [ROS Summer School 2017](http://www.robotics.sei.ecnu.edu.cn/ros2017/prog.html)
- [ROS 学习入门](https://zhuanlan.zhihu.com/p/26007106)
- [ROS 学习](http://blog.csdn.net/wengge987/article/category/6083682)
- [zhangrelay](http://blog.csdn.net/zhangrelay)
- [ROS 探索](http://stevenshi.me/2017/07/01/directory-for-ros/)
- [ServoDatabase](https://servodatabase.com)

## ROS pkg

- [RWS](https://github.com/hcrlab/rws)
- [camera_calibration](http://wiki.ros.org/camera_calibration) : 照相机矫正

## catkin
- [catkin_tools](https://github.com/catkin/catkin_tools)
- [catkin_sample](https://github.com/catkin/catkin_simple)

## ROS Basic

### ROS Commands

- `Node` : 节点，一个可执行文件，它可以通过ROS与其它节点进行通信 (可以发布或接收一个话题, 也可以提供或使用某种服务)

``` shell
$ rosnode -h                # 命令帮助信息
$ rosnode list              # 列出活跃的节点
$ rosnode info xxx          # 指定节点的信息
$ rosnode kill xxx          # 杀死某个活跃的节点
$ rosrun [package] [node]   # 启动摸个节点
```

- `Topic` : 话题，节点可以发布消息到话题, 也可以订阅话题以接收消息 (节点之间通过话题通信)

``` shell
$ rostopic list -v          # 显示所有发布和订阅的话题极其类型的详细信息
$ rostopic type xxx         # 查询话题的消息类型
$ rostopic pub -1 [topic] [msg_type] [args]     # 发布一次消息到某个广播的话题上
$ rostopic pub -r 2 [topic] [msg_type] [args]   # 固定频率发送消息到话题
$ rostopic echo [topic]     # 显示话题发布的消息
$ rostopic hz [topic]       # 话题发布的频率
```

- `Message` : 消息，一种ROS数据类型，用于订阅或发布到一个话题 (话题之间通信是通过节点之间发送消息实现的)

``` shell
$ rosmsg list               # 显示消息信息
$ rosmsg list | wc -l       # 统计共有多少个消息格式
$ rosmsg show xxx           # 查看消息的详情信息
```

- `Service` : 服务，节点之间通讯的另一种方式 (服务允许节点发送请求 request 并获得一个响应 response)

``` shell
# rosservice
$ rosservice list           # 显示活跃的服务信息
$ rosservice type xxx       # 查看指定服务的类型
# rossrv 
$ rossrv list | wc -l       # 统计共有多少服务格式
$ rossrv list               # 显示服务信息
```

- 包

``` shell
$ rospack list              # 查看
$ rospack find [package]    # 查找指定软件包
$ rosls [package]           # 列出包内内容
$ roscd [package]           # 进入包目录    
```

- 录制 & 回放

``` shell
$ rosbag record [topic]     # 录制包
$ rosbag record -a          # 录制所有
$ rosbag play [bag]         # 回放包
$ rosbag play -r 2 [bag]    # 回放2次
$ rosbag info [bag]         # 检查包
```

- 问题检查

> `wtf` : `Why The Failure`

``` shell
$ roswtf
```

### [TF](http://wiki.ros.org/tf)

- [Quaternions](http://quaternions.online/) : Quaternions <-> rpy

> 使用`view_frames`查看tf树

``` shell
$ rosrun tf view_frames     # 生成TF树的pdf文件
$ evince frames.pdf         # 产看pdf文件
```

### [URDF](http://wiki.ros.org/urdf)

- [<ROS> 机器人描述--URDF和XACRO](http://blog.csdn.net/sunbibei/article/details/52297524)

- `joint` 类型
    * `continuous`  : 连续(360°无限转动，轮子、底座等)
    * `revolute`    : 旋转(可以转动一定的角度)
    * `prismatic`   : 棱柱(一维，可以沿一个方向伸缩)
    * `planar`      : 平面(二维，可以在一个平面移动)


### [catkin](http://wiki.ros.org/catkin)

- [catkin_tools](https://catkin-tools.readthedocs.io/en/latest/index.html)


## ROS Usage

- [ROS 单行安装](http://wiki.ros.org/ROS/Installation/TwoLineInstall)
- [ROS: 安装数据包](http://blog.csdn.net/philthinker/article/details/72801430)

- [ROS launch file: <arg> vs <param> vs <rosparam>](http://durant35.github.io/2017/07/14/ROS_%3Carg%3E$%3Cparam%3E$%3Crosparam%3E/)

### 多机器连接

http://blog.csdn.net/weewqrer/article/details/48436731

> 配置 `ROS_MASTER_URI` 

``` shell
$ export ROS_MASTER_URI=http://ip:11311
$ export ROS_MASTER_URI=http://192.168.1.176:11311
```

### [Moveit](http://moveit.ros.org/)

- [运动规划 (Motion Planning): MoveIt! 与 OMPL](http://www.cnblogs.com/zxouxuewei/p/6092759.html)
- [Implement MoveIt! on Real Robot](https://answers.ros.org/question/192739/implement-moveit-on-real-robot/)

- [How to solve 'Parameter '~moveit_controller_manager' not specified'?](https://answers.ros.org/question/167501/how-to-solve-parameter-moveit_controller_manager-not-specified/)

### [Gazebo]((http://gazebosim.org/))

- [在虚拟机下运行gazebo，关于vmw_ioctl_command error Invalid argument错误](http://blog.csdn.net/coolwaterld/article/details/72467942)

### 抓取

- [一种基于ros系统的视觉定位及机械臂抓取实现方法](https://www.google.com/patents/CN106826822A?cl=zh)
- [ROS 教程之 vision: 摄像头标定camera calibration](http://blog.csdn.net/heyijia0327/article/details/43538695)

## ROS Robot

### Scara

- [senso-ros-src](https://github.com/senso-viktor/senso-ros-src)
- [sr_scara_hx_ros](https://github.com/sastrarobotics/sr_scara_hx_ros)
- [two_scara_collaboration](https://github.com/yangliu28/two_scara_collaboration)
- ZMotion
    * 初始 ip : 192.168.0.11
    * 连接 Scara : 红蓝黑绿 ( 红蓝相连： 测试电机)

### [Braccio](https://shrtm.nu/ZCrs)

- [Braccio - URDF](https://github.com/jonabalzer/braccio_description)
- [Action Server to move robotic arm](https://answers.ros.org/question/266831/action-server-to-move-robotic-arm/)

### [ABB](http://wiki.ros.org/abb)

- [open_abb](https://github.com/robotics/open_abb)
- [Seting up multitasking in RPID programs](https://forums.robotstudio.com/discussion/3992/seting-up-multitasking-in-rpid-programs)
- [ROS连接ABB机械臂调试详细教程-ROS(indigo)和ABB RobotStudio 6.03.02-](http://blog.csdn.net/zhangrelay/article/details/52687545)

### [UR](http://wiki.ros.org/universal_robot)

- [优傲学院](http://ur.chocolatelms.com.cn/)
- [issues](https://github.com/ros-industrial/universal_robot/issues)
- [Develop Universal Robot (UR) in ROS: From Install to Demo](http://blog.csdn.net/philthinker/article/details/74160847)

- [Hitbot](http://hitbot.cc/index.html)

- 运行时错误，该程序使用了太多时间而没有指导机器人..wait或sync()来拆分并未移动机器人的长程序序列。 (Runtime error: The program used too much time without instructing the robot what to do. Consider using a Wait or sync to split long program sequences that do not move the robot.)

    > 需要使用网线连接进行通信

- UR 启动命令

    ``` shell
    # 启动demo
    $ roslaunch ur5_moveit_config demo.launch
    
    # 启动Gazebo模拟
    $ roslaunch ur_gazebo ur3.launch limited:=true  # 启动 Gazebo 仿真
    $ roslaunch ur3_moveit_config ur3_moveit_planning_execution.launch sim:=true limited:=true # 启动 move_group
    $ roslaunch ur3_moveit_config moveit_rviz.launch config:=true # 启动 moveit rviz
    
    # 连接真机
    $ roslaunch ur_modern_driver ur3_bringup.launch robot_ip:=IP_OF_THE_ROBOT [reverse_port:=REVERSE_PORT] # for UR v3.x
    $ roslaunch ur_bringup ur3_bringup.launch robot_ip:=IP_OF_THE_ROBOT [reverse_port:=REVERSE_PORT] # for v < 3.x
    $ roslaunch ur3_moveit_config ur3_moveit_planning_execution.launch limited:=true # 启动 move_group
    $ roslaunch ur3_moveit_config moveit_rviz.launch config:=true # 启动 moveit rviz
    
    ```

## ros 线程

- [ROS的单线程Spinning和多线程Spinning](http://www.cnblogs.com/feixiao5566/p/5288206.html)

- 单线程

    * `ros::spin()` : (阻塞) 单线程自旋
    
    ```c++
    ros::spin();
    // 等价于
    #include <ros/callback_queue.h>
    while (ros::ok())
    {
      ros::getGlobalCallbackQueue()->callAvailable(ros::WallDuration(0.1));
    }
    ```
    
    * `ros::spinOnce()` : (阻塞) 定期调用等待在那个点上的所有回调

    ```c++
    ros::spinOnce();
    // 等价于
    #include <ros/callback_queue.h>
    ros::getGlobalCallbackQueue()->callAvailable(ros::WallDuration(0));
    ```
    
- 多线程

    * `ros::MultiThreadedSpinner()` : (阻塞)

    ```c++
    ros::MultiThreadedSpinner spinner(4); // Use 4 threads
    spinner.spin(); // spin() will not return until the node has been shutdown
    ```

    * `ros::AsyncSpinner()` : (非阻塞)
    
    ```c++
    ros::AsyncSpinner spinner(4); // Use 4 threads
    spinner.start();
    ros::waitForShutdown();
    ```

- ros::spin() 中开启 ros::AsyncSpinner() 报错

    ```
    Attempt to spin a callback queue from two spinners, one of them being single-threaded.
    This will probably result in callbacks being executed out-of-order.
    In future this will throw an exception!
    ```

## ros param

http://durant35.github.io/2017/07/14/ROS_%3Carg%3E$%3Cparam%3E$%3Crosparam%3E/
http://www.rosclub.cn/post-172.html
http://blog.csdn.net/yiranhaiziqi/article/details/52949121

## Moveit!

- [Cartesian Path Execution](https://groups.google.com/forum/#!topic/moveit-users/MOoFxy2exT4)
- [How do I execute the trajectory created by "computeCartesianPath" ?](https://groups.google.com/forum/#!topic/moveit-users/x5FwalM5ruk)
- [ros之真实驱动diy6自由度机械臂](http://blog.csdn.net/qq_38288618/article/details/78078514)

## Error

- [ROS Kinetic编译旧版本程序出现 error: ‘shared_ptr’ in namespace ‘std’ does not name a type](http://blog.csdn.net/gyzgyz1989/article/details/53207192)
- [`rosrun moveit_commander moveit_commander_cmdline.py` 启动失败](https://github.com/ros-planning/moveit/issues/86) : `pip install --user pyassimp`

- client 同时请求一个 server

```
Shutdown request received.
Reason given for shutdown: [new node registered with same name]
```

- publisher 同时发送topic一个 subscriber

```
Shutdown request received.
Reason given for shutdown: [new node registered with same name]
```

- `RRTConnect: Motion planning start tree could not be initialized!`


```
Joint 'wrist_3_joint' from the starting state is outside bounds by a significant margin: [ 6.41305 ] should be in the range [ -6.28319 ], [ 6.28319 ] but the error above the ~start_state_max_bounds_error parameter (currently set to 0.1)
[ WARN] [1513681940.744874967]: Joint wrist_3_joint is constrained to be above the maximum bounds. Assuming maximum bounds instead.
[ WARN] [1513681940.745355491]: Joint wrist_3_joint is constrained to be above the maximum bounds. Assuming maximum bounds instead.
[ INFO] [1513681940.747118552]: Planner configuration 'manipulator' will use planner 'geometric::RRTConnect'. Additional configuration parameters will be set when the planner is constructed.
[ WARN] [1513681940.749182949]: RRTConnect: Skipping invalid start state (invalid bounds)
[ERROR] [1513681940.749456699]: RRTConnect: Motion planning start tree could not be initialized!
[ WARN] [1513681940.751287915]: ParallelPlan::solve(): Unable to find solution by any of the threads in 0.003546 seconds

```

```
[ERROR] [1513772723.316020409]: Goal start doesn't match current pose
[ WARN] [1513772723.316842716]: Controller  failed with error code INVALID_GOAL
[ WARN] [1513772723.317141392]: Controller handle  reports status FAILED
```


