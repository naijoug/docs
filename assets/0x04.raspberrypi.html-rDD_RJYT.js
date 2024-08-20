import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as r,b as n,e as s,d as a,f as i}from"./app-j-heE4gB.js";const c={},d=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),p={href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://shumeipai.nxez.com/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="l298n" tabindex="-1"><a class="header-anchor" href="#l298n" aria-hidden="true">#</a> L298N</h2><blockquote><p>树莓派的供电需要由 L298N 提供，不能接外部电源</p></blockquote><ul><li>VCC : 电源正极</li><li>GND : 电源负极</li><li>ENA : 使能输入，通过PWM控制马达速度。(默认跳线帽输出的是最高电压)</li><li>IN : IO输入</li></ul><h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统" aria-hidden="true">#</a> 安装系统</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">df</span>                            <span class="token comment"># 查看当前挂载的磁盘</span>
$ diskutil unmount /dev/disk2   <span class="token comment"># 卸载 SD 卡</span>
$ diskutil list                 <span class="token comment"># 查看当前磁盘信息</span>
$ <span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span>4m <span class="token assign-left variable">if</span><span class="token operator">=</span>raspios.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/rdisk2    <span class="token comment"># 写入系统镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动系统" tabindex="-1"><a class="header-anchor" href="#启动系统" aria-hidden="true">#</a> 启动系统</h2><ol><li>开启 SSH : SD 卡写入系统的根目录新建一个名为 <code>SSH</code> 的空文件</li><li>无网线配置 Wi-Fi 连接 : SD 卡写入系统的根目录新建一个名为 <code>wpa_supplicant.conf</code> 的文件</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>country=GB
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
  ssid=&quot;Wi-Fi 名&quot;
  psk=&quot;Wi-Fi 密码&quot;
  priority= Wi-Fi 优先级，数字越大代表优先级越高
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>电脑 SSH 连接树莓派 : 电脑和树莓派连接同一个 Wi-Fi 或 通过网线连接</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> pi@raspberrypi.local  <span class="token comment"># 通过 host 连接</span>
$ <span class="token function">hostname</span> <span class="token parameter variable">-I</span>               <span class="token comment"># 查看 ip</span>
$ <span class="token function">ssh</span> pi@xx.xx.xx.xx        <span class="token comment"># 通过 ip 连接    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置系统" tabindex="-1"><a class="header-anchor" href="#配置系统" aria-hidden="true">#</a> 配置系统</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> raspi-config <span class="token comment"># 进入配置页面</span>
$ hostnamectl   <span class="token comment"># 查看当前系统版本</span>
<span class="token comment"># 摄像头Pi Cam</span>
$ raspistill <span class="token parameter variable">-o</span> keychain.jpg <span class="token parameter variable">-t</span> <span class="token number">2000</span> <span class="token comment"># 2秒后拍摄一张照片</span>
$ raspivid <span class="token parameter variable">-o</span> mykeychain.h264 <span class="token parameter variable">-t</span> <span class="token number">10000</span> <span class="token parameter variable">-w</span> <span class="token number">1280</span> <span class="token parameter variable">-h</span> <span class="token number">720</span> <span class="token comment"># 摄像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Wi-Fi 配置</p><blockquote><p>配置文件位置: <code>/etc/wpa_supplicant/wpa_supplicant.conf</code></p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>network={
    ssid=&quot;Wi-Fi 1 名&quot;
    psk=&quot;Wi-Fi 1 密码&quot;
    priority=1
}
network={
    ssid=&quot;Wi-Fi 2 名&quot;
    psk=&quot;Wi-Fi 2 密码&quot;
    priority=2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启用 root 用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">passwd</span> root              <span class="token comment"># 设置 root 用户密码</span>
$ <span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token parameter variable">--unlock</span> root     <span class="token comment"># 启用 root 用户</span>
$ <span class="token function">su</span> root                       <span class="token comment"># 切换至 root 用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调整树莓派分辨率</p><blockquote><p>配置文件位置: <code>/boot/config.txt</code></p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 在最后面添加以下设置
hdmi_group=2
hdmi_mode=85
hdmi_ignore_edid=0xa5000080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h2>`,14),v={href:"https://pypi.org/project/RPi.GPIO",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/WiringPi/WiringPi",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/waveform80/picamera",target:"_blank",rel:"noopener noreferrer"},k=n("blockquote",null,[n("p",null,"A pure Python interface to the Raspberry Pi camera module")],-1),f={href:"https://github.com/jacksonliam/mjpg-streamer",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 安装</span>
<span class="token comment">#   依赖</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> cmake libjpeg8-dev
<span class="token comment">#   下载</span>
$ <span class="token function">git</span> clone https://github.com/jacksonliam/mjpg-streamer
<span class="token comment">#   编译</span>
$ <span class="token builtin class-name">cd</span> mjpg-streamer/mjpg-streamer-experimental
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 2. 使用</span>
<span class="token comment">#   piCam</span>
$ ./mjpg_streamer <span class="token parameter variable">-o</span> <span class="token string">&quot;output_http.so -w ./www&quot;</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;input_raspicam.so&quot;</span> 
<span class="token comment">#   uvc(通用摄像头) </span>
$ ./mjpg_streamer <span class="token parameter variable">-o</span> <span class="token string">&quot;output_http.so -p 8080&quot;</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;input_uvc.so -d /dev/video0&quot;</span>

<span class="token comment"># 查看截图 : \`http://IP:8080/?action=snapshot\`</span>
<span class="token comment"># 查看视频 : \`http://IP:8080/?action=stream\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(x,q){const e=t("ExternalLinkIcon");return o(),r("div",null,[d,n("ul",null,[n("li",null,[n("a",p,[s("Raspberry Pi"),a(e)])]),n("li",null,[n("a",u,[s("树莓派实验室"),a(e)])])]),m,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[s("RPi.GPIO"),a(e)])])]),n("li",null,[n("p",null,[n("a",b,[s("WiringPi"),a(e)]),s(" : 树莓派 IO 控制库")])]),n("li",null,[n("p",null,[n("a",h,[s("picamera"),a(e)]),s(" : 树莓派相机模块")]),k]),n("li",null,[n("p",null,[n("a",f,[s("mjpg-streamer"),a(e)]),s(" : 读取相机数据转化为图片流")]),g])])])}const y=l(c,[["render",_],["__file","0x04.raspberrypi.html.vue"]]);export{y as default};
