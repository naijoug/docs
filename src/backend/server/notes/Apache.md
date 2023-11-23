# Apache

## Usage
    
- macOS
    * 系统级根目录 : `/Library/WebServer/Documents`
        + 配置文件 : `/etc/apache2/httpd.conf`
    * 用户级别根目录 : `/Users/${user}/Sites`
        + 配置文件 : `/etc/apache2/users/${user}.conf`
    * apache 日志目录 : `/var/log/apache2`
    
- ubuntu
    * 默认根目录 : `/var/www/html/index.html`
    * 配置文件目录 : `/etc/apache2/apache2.conf`

```shell
# macOS
$ httpd -v                      # 查看 apache 版本
$ apachectl -k start            # 可以查看启动日志
$ sudo apachectl start          # 启动 apache  
$ sudo apachectl restart        # 重启 apache
$ sudo apachectl stop           # 停止 apache 
$ sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist # 卸载 apache 开机自启动
$ sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist   # 装载 apache 开机自启动

# ubuntu
$ apt install apache2           # 安装 apache
$ /etc/init.d/apache2 start     # 启动 apache
$ service apache2 start         # 启动 apache
$ /etc/init.d/apache2 stop      # 停止 apache
$ service apache2 stop          # 停止 apache
$ /etc/init.d/apache2 restart   # 重启 apache
$ service apache2 restart       # 重启 apache
```

### Config

- 开启用户目录

```shell
# 1> /etc/apache2/httpd.conf
LoadModule userdir_module libexec/apache2/mod_userdir.so    # 启用用户目录功能
Include /private/etc/apache2/extra/httpd-userdir.conf       # 启用用户目录配置文件

# 3> /private/etc/apache2/extra/httpd-userdir.conf : 启用用户目录配置文件
UserDir Sites
Include /private/etc/apache2/users/*.conf

# 2> /etc/apache2/users/${user}.conf : 编辑用户目录配置文件
<Directory "/Users/${user}/Sites/">
    Options Indexes MultiViews FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
</Directory>
```

- 开启虚拟空间

```shell
# 1> /etc/apache2/httpd.conf
LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so    # 启用虚拟空间功能
Include /private/etc/apache2/extra/httpd-vhosts.conf                # 启用虚拟空间配置文件

# 2> /etc/apache2/extra/httpd-vhost.conf
<VirtualHost *:8080>
    ServerAdmin user@mail.com               # 主机邮箱地址
    DocumentRoot "$WEBPATH/web1"            # 站点根目录
    ServerName web1                         # 站点虚拟域名
    ErrorLog "$WEBPATH/error_log"           # 错误日志输出
    CustomLog "$WEBPATH/access_log" common  # 访问日志输出
    <Directory "$WEBPATH/web1">             # 站点根目录 文件权限相关
                Options Indexes FollowSymLinks MultiViews
                AllowOverride None
                Require all granted
    </Directory>
</VirtualHost>

# 3> /etx/hosts # 编辑 hosts 配置文件
127.0.0.1 web1
```

## Error

- AH00058 & AH00059
    > AH00058: Error retrieving pid file /private/var/run/httpd.pid
    > 
    > AH00059: Remove it before continuing if it is corrupted.
    >
    > Solution: `sudo rm /private/var/run/httpd.pid`

- AH00526
    > AH00526: Syntax error on line 92 of /private/etc/apache2/extra/httpd-ssl.conf:
     SSLSessionCache: 'shmcb' session cache not supported (known names: ). Maybe you need to load the appropriate socache module (mod_socache_shmcb?).
    >
    > Solution: `/etc/apache2/httpd.conf` 配置文件, 启用 `LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so`

- AH00557 & AH00558
    > AH00557: httpd: apr_sockaddr_info_get() failed for macbook.local
    >
    > AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
    >
    > Solution: `/etc/apaches/httpd.conf` 配置文件，设置 `ServerName` 选项，设置为 `ServerName localhost:80`

- AH06665
    > AH06665: No code signing authority for module at /usr/local/php5/libphp5.so specified in LoadModule directive.
    > 
    > - https://www.simplified.guide/macos/apache-php-homebrew-codesign
