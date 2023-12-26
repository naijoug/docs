---
title: 音视频
icon: hashtag

index: false
order: 9

---

<!-- more -->

> `GPUImage` 框架介绍

> `OpenGL` 处理流程

> 直播整体流程

> 视频从`采集 -> 显示 -> 保存` 整个流程

> 视频如何两倍速播放，并二倍速导出

> 大图加载

> `PCM` 计算时间

## 编码

> 硬编码 vs 软编码

> FBO、H264

## 滤镜

> 实现原理

> 如何实现分割滤镜？

## 直播

> `rtmp`、`webrtc`

> `ffmpeg`

> `OpenCV`

## `AVFoundation`

> `AVFoundation` & `GPUImage` & `OpenGL ES` & `MetalKit`

### `samplebuffer` 与 `pixelbuffer` 区别

::: details 💡

  - `CMSampleBufferRef` : `Core Media`框架中被用来管理音频、视频、字幕等样本的集合。一个 `samplebuffer` 包含一到多个样本以及描述这些样本的元数据，例如显示时间戳、解码时间戳、持续时间、帧速率等。`samplebuffer`在更高的层级管理数据，包含了解压缩和播放媒体所需的所有信息。

  - `CVPixelBufferRef` : `Core Video` 框架中被用来管理图像数据。一个 `pixelbuffer` 表示一个视频帧，它包含了视频帧的原始像素数据。`pixelbuffer` 是在更低的层级处理数据，仅仅包含了像素信息，没有时间戳、持续时间等元数据。

  > 两者区别：`samplebuffer` 是对包含音频、视频、字幕等样本的集合的封装，包含了播放媒体所需的所有信息，`pixelbuffer` 是对视频帧的原始像素数据的封装，更关注图像层面的细节。

:::

> `CMTime` 结构

> 如何使用 `AVFoundation` 给视频添加水印？

## `AVPlayer` 

> 实现原理

> 缓存机制

> 边播边下

## 设计一个通用视频播放器
