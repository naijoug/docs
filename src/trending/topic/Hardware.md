## PLC
> PLC : Programmable Logic Controller (可编程控制器)

- [PLC 百科](http://plc.baike.com/category-135700.html)
- [PLC 详解](https://www.crifan.com/summary_plc_detail_introduction/)

## EtherCAT
> EtherCAT : Control Automation Technology (以太网控制自动化技术) 是一个开放架构，以以太网为基础的现场总线系统。EtherCAT是确定性的工业以太网，最早是由德国的Beckhoff公司所研发。

> 自动化对通信一般会要求较短的数据更新时间（或称为周期时间）、数据同步时的通信抖动量低，而且硬件的成本要低，EtherCAT开发的目的就是让以太网可以运用在自动化应用中。

## USB

- [libusb](https://github.com/libusb/libusb) : 跨平台 USB 硬件访问库
- [pyusb](https://github.com/pyusb/pyusb)
- [UsbAccessoryDemo](https://github.com/GavinAndre/UsbAccessoryDemo) : Android 使用 Usb Accessory 模式与 linux 下位机进行通信
- [USB协通讯议--深入理解](https://blog.csdn.net/myarrow/article/details/8484113)
- [USB 2.0 协议中文注解](https://blog.csdn.net/encourage2011/article/details/73265161)
- [读PyUSB源码](http://blog.sina.com.cn/s/blog_4513dde60102wxt4.html)

> Concept

- USB Host : 设备可以作为 USB 主机连接 USB 外围设备(如：U盘、键盘、鼠标...)
- USB Slave : USB 外围设备, 被动响应
- PC USB 接口 : USB Host Only
- Phone USB 接口 : OTG(On The Go) , 同时支持 Host 和 Device 模式

- VID : (Vendor ID) 供应商 ID。供应商向 USB 执行论坛申请，每个供应商的VID是唯一的。
- PID : (Product ID) 产品识别码。由供应商自行决定。
- HardwareID : 硬件唯一标识，根据 PID / VID 而生成的。
- 序列号 : 厂家固化到芯片中的信息而已。
- GUIID : 标志你按照的设备是属于哪一类。

- Device -> configurations -> interfaces -> endpoint

- Endpoint : 端点。位于 USB 设备或主机上的一个数据缓冲区，用来存放和发送 USB 的各种数据。每一个端点都有唯一的确定地址，有不同的传输特点(如：输入端点、输出端点、配置端点、批量传输端点)
- Frame : 帧。时间概念，在 USB 中，一帧就是 1MS，它是一个独立的单元，包含了一系列的总线动作，USB 将一帧分为好几份，每一份中都是一个 USB 的传输动作。
- 上行 : 设备到主机
- 下行 : 主机到设备

- USB 数据传输 : 串行总线，数据在总线上市一位一位传输，先传输低位数据，最后传输高位数据。对于多字节的数据传输，采用小端格式，先传输低字节数据，后传输高字节数据。
- Packet : 包。USB 信息传输的基本单位，所有数据都是经过打包后在总线上传输的。包只能在帧内传输。

- USB 传输类型
    * 控制传输 : Control Transfer
        + Setup : 建立阶段，主机从 USB 设备获取配置信息，并设置设备的配置值。
        + Data : 数据阶段
            * 控制读取 : 读取 USB 描述符。主机发送一个 IN 令牌信息包，设备将数据通过 DATA1/DATA0 数据信信报传给主机。
            * 控制写入 : 对 USB 设备配置信息。主机发送一个 OUT 令牌信息包，设备发送 ACK 令牌表示正确接收，NAK 令牌表示忙碌，STALL 令牌表示发生错误。
        + Status : 状态阶段，表示整个传输过程已完全结束。
    * 中断传输 : Interrupt Transfer
    * 批量传输 : Bulk Transfer
    * 同步传输 : Isochronous

- For IN Token 
    * ACK : 表示 Host 正确无误地接收到数据
    * NAK : 设备暂时不能反悔或接收数据(如：设备忙)
    * STALL : 只是设备永远停止，需要 Host 软件的干预 (如: 设备出错)
- For OUT Token 
    * ACK : Device 已经正确接收到数据包，通知 Host 可以按顺序发送下一个数据包
    * NAK : Device 已经正确接收到数据包，通知 Host 重传数据，由于 Device 临时状况 (如: buffer 满)
    * STALL : 指示 Device endpoint 已经停止，通知 Host 不再回传