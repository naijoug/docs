import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as n,f as c}from"./app-932Ytx5b.js";const l={},i=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li><p>macOS</p><ul><li>系统级根目录 : <code>/Library/WebServer/Documents</code><ul><li>配置文件 : <code>/etc/apache2/httpd.conf</code></li></ul></li><li>用户级别根目录 : <code>/Users/\${user}/Sites</code><ul><li>配置文件 : <code>/etc/apache2/users/\${user}.conf</code></li></ul></li><li>apache 日志目录 : <code>/var/log/apache2</code></li></ul></li><li><p>ubuntu</p><ul><li>默认根目录 : <code>/var/www/html/index.html</code></li><li>配置文件目录 : <code>/etc/apache2/apache2.conf</code></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># macOS</span>
$ httpd <span class="token parameter variable">-v</span>                      <span class="token comment"># 查看 apache 版本</span>
$ apachectl <span class="token parameter variable">-k</span> start            <span class="token comment"># 可以查看启动日志</span>
$ <span class="token function">sudo</span> apachectl start          <span class="token comment"># 启动 apache  </span>
$ <span class="token function">sudo</span> apachectl restart        <span class="token comment"># 重启 apache</span>
$ <span class="token function">sudo</span> apachectl stop           <span class="token comment"># 停止 apache </span>
$ <span class="token function">sudo</span> launchctl unload <span class="token parameter variable">-w</span> /System/Library/LaunchDaemons/org.apache.httpd.plist <span class="token comment"># 卸载 apache 开机自启动</span>
$ <span class="token function">sudo</span> launchctl load <span class="token parameter variable">-w</span> /System/Library/LaunchDaemons/org.apache.httpd.plist   <span class="token comment"># 装载 apache 开机自启动</span>

<span class="token comment"># ubuntu</span>
$ <span class="token function">apt</span> <span class="token function">install</span> apache2           <span class="token comment"># 安装 apache</span>
$ /etc/init.d/apache2 start     <span class="token comment"># 启动 apache</span>
$ <span class="token function">service</span> apache2 start         <span class="token comment"># 启动 apache</span>
$ /etc/init.d/apache2 stop      <span class="token comment"># 停止 apache</span>
$ <span class="token function">service</span> apache2 stop          <span class="token comment"># 停止 apache</span>
$ /etc/init.d/apache2 restart   <span class="token comment"># 重启 apache</span>
$ <span class="token function">service</span> apache2 restart       <span class="token comment"># 重启 apache</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3><ul><li>开启用户目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; /etc/apache2/httpd.conf</span>
LoadModule userdir_module libexec/apache2/mod_userdir.so    <span class="token comment"># 启用用户目录功能</span>
Include /private/etc/apache2/extra/httpd-userdir.conf       <span class="token comment"># 启用用户目录配置文件</span>

<span class="token comment"># 3&gt; /private/etc/apache2/extra/httpd-userdir.conf : 启用用户目录配置文件</span>
UserDir Sites
Include /private/etc/apache2/users/*.conf

<span class="token comment"># 2&gt; /etc/apache2/users/\${user}.conf : 编辑用户目录配置文件</span>
<span class="token operator">&lt;</span>Directory <span class="token string">&quot;/Users/<span class="token variable">\${user}</span>/Sites/&quot;</span><span class="token operator">&gt;</span>
    Options Indexes MultiViews FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
<span class="token operator">&lt;</span>/Directory<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启虚拟空间</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1&gt; /etc/apache2/httpd.conf</span>
LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so    <span class="token comment"># 启用虚拟空间功能</span>
Include /private/etc/apache2/extra/httpd-vhosts.conf                <span class="token comment"># 启用虚拟空间配置文件</span>

<span class="token comment"># 2&gt; /etc/apache2/extra/httpd-vhost.conf</span>
<span class="token operator">&lt;</span>VirtualHost *:808<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
    ServerAdmin user@mail.com               <span class="token comment"># 主机邮箱地址</span>
    DocumentRoot <span class="token string">&quot;<span class="token variable">$WEBPATH</span>/web1&quot;</span>            <span class="token comment"># 站点根目录</span>
    ServerName web1                         <span class="token comment"># 站点虚拟域名</span>
    ErrorLog <span class="token string">&quot;<span class="token variable">$WEBPATH</span>/error_log&quot;</span>           <span class="token comment"># 错误日志输出</span>
    CustomLog <span class="token string">&quot;<span class="token variable">$WEBPATH</span>/access_log&quot;</span> common  <span class="token comment"># 访问日志输出</span>
    <span class="token operator">&lt;</span>Directory <span class="token string">&quot;<span class="token variable">$WEBPATH</span>/web1&quot;</span><span class="token operator">&gt;</span>             <span class="token comment"># 站点根目录 文件权限相关</span>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride None
                Require all granted
    <span class="token operator">&lt;</span>/Directory<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/VirtualHost<span class="token operator">&gt;</span>

<span class="token comment"># 3&gt; /etx/hosts # 编辑 hosts 配置文件</span>
<span class="token number">127.0</span>.0.1 web1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> Error</h2><ul><li><p>AH00058 &amp; AH00059</p><blockquote><p>AH00058: Error retrieving pid file /private/var/run/httpd.pid</p><p>AH00059: Remove it before continuing if it is corrupted.</p><p>Solution: <code>sudo rm /private/var/run/httpd.pid</code></p></blockquote></li><li><p>AH00526</p><blockquote><p>AH00526: Syntax error on line 92 of /private/etc/apache2/extra/httpd-ssl.conf: SSLSessionCache: &#39;shmcb&#39; session cache not supported (known names: ). Maybe you need to load the appropriate socache module (mod_socache_shmcb?).</p><p>Solution: <code>/etc/apache2/httpd.conf</code> 配置文件, 启用 <code>LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so</code></p></blockquote></li><li><p>AH00557 &amp; AH00558</p><blockquote><p>AH00557: httpd: apr_sockaddr_info_get() failed for macbook.local</p><p>AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using 127.0.0.1. Set the &#39;ServerName&#39; directive globally to suppress this message</p><p>Solution: <code>/etc/apaches/httpd.conf</code> 配置文件，设置 <code>ServerName</code> 选项，设置为 <code>ServerName localhost:80</code></p></blockquote></li><li><p>AH06665</p><blockquote><p>AH06665: No code signing authority for module at /usr/local/php5/libphp5.so specified in LoadModule directive.</p><ul><li>https://www.simplified.guide/macos/apache-php-homebrew-codesign</li></ul></blockquote></li></ul>`,10);function t(o,p){return a(),s("div",null,[n(" more "),i])}const m=e(l,[["render",t],["__file","apache.html.vue"]]);export{m as default};
