# RaspberryPi

## Reference

- [Raspberry Pi](https://www.raspberrypi.org/)
- [树莓派实验室](http://shumeipai.nxez.com/)

## L298N
> 树莓派的供电需要由 L298N 提供，不能接外部电源

- VCC : 电源正极 
- GND : 电源负极    
- ENA : 使能输入，通过PWM控制马达速度。(默认跳线帽输出的是最高电压)
- IN : IO输入

## 安装系统

  ```shell
  $ df                            # 查看当前挂载的磁盘
  $ diskutil unmount /dev/disk2   # 卸载 SD 卡
  $ diskutil list                 # 查看当前磁盘信息
  $ sudo dd bs=4m if=raspios.img of=/dev/rdisk2    # 写入系统镜像
  ```

## 启动系统

1. 开启 SSH : SD 卡写入系统的根目录新建一个名为 `SSH` 的空文件
2. 无网线配置 Wi-Fi 连接 : SD 卡写入系统的根目录新建一个名为 `wpa_supplicant.conf` 的文件

  ```conf wpa_supplicant.conf
  country=GB
  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
  update_config=1
  network={
    ssid="Wi-Fi 名"
    psk="Wi-Fi 密码"
    priority= Wi-Fi 优先级，数字越大代表优先级越高
  }
  ```
3. 电脑 SSH 连接树莓派 : 电脑和树莓派连接同一个 Wi-Fi 或 通过网线连接

  ```shell
  $ ssh pi@raspberrypi.local  # 通过 host 连接
  $ hostname -I               # 查看 ip
  $ ssh pi@xx.xx.xx.xx        # 通过 ip 连接    
  ```

## 配置系统

 ```shell
 $ sudo raspi-config # 进入配置页面
 $ hostnamectl   # 查看当前系统版本
 # 摄像头Pi Cam
 $ raspistill -o keychain.jpg -t 2000 # 2秒后拍摄一张照片
 $ raspivid -o mykeychain.h264 -t 10000 -w 1280 -h 720 # 摄像
 ```

- Wi-Fi 配置
    > 配置文件位置: `/etc/wpa_supplicant/wpa_supplicant.conf`
  ```conf
  network={
      ssid="Wi-Fi 1 名"
      psk="Wi-Fi 1 密码"
      priority=1
  }
  network={
      ssid="Wi-Fi 2 名"
      psk="Wi-Fi 2 密码"
      priority=2
  }
  ```

- 启用 root 用户

  ```shell
  $ sudo passwd root              # 设置 root 用户密码
  $ sudo passwd --unlock root     # 启用 root 用户
  $ su root                       # 切换至 root 用户
  ```

- 调整树莓派分辨率
    > 配置文件位置: `/boot/config.txt`
  ```conf
  # 在最后面添加以下设置
  hdmi_group=2
  hdmi_mode=85
  hdmi_ignore_edid=0xa5000080
  ```

## Module

- [RPi.GPIO](https://pypi.org/project/RPi.GPIO)
- [WiringPi](https://github.com/WiringPi/WiringPi) : 树莓派 IO 控制库
- [picamera](https://github.com/waveform80/picamera) : 树莓派相机模块
    > A pure Python interface to the Raspberry Pi camera module
- [mjpg-streamer](https://github.com/jacksonliam/mjpg-streamer) : 读取相机数据转化为图片流

  ```shell
  # 1. 安装
  #   依赖
  $ sudo apt-get install cmake libjpeg8-dev
  #   下载
  $ git clone https://github.com/jacksonliam/mjpg-streamer
  #   编译
  $ cd mjpg-streamer/mjpg-streamer-experimental
  $ make
  $ sudo make install
  # 2. 使用
  #   piCam
  $ ./mjpg_streamer -o "output_http.so -w ./www" -i "input_raspicam.so" 
  #   uvc(通用摄像头) 
  $ ./mjpg_streamer -o "output_http.so -p 8080" -i "input_uvc.so -d /dev/video0"

  # 查看截图 : `http://IP:8080/?action=snapshot`
  # 查看视频 : `http://IP:8080/?action=stream`
  ```