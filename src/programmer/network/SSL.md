# SSL

## Reference

- [Let’s Encrypt](https://github.com/letsencrypt) : 一个免费、自动化、开源的 CA 机构
- [FreeSSL](https://freessl.cn/) : 一个提供免费HTTPS证书申请的网站
- [KeyManager](https://keymanager.org/) : 提供安全便捷的证书申请和管理
- [SSL证书格式转换工具](https://csr.chinassl.net/convert-ssl.html)
- [Certbot](https://certbot.eff.org/)
- [keytool](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/keytool.html)

## Concept

  | - | -
  | -- | --
  | SSL       | (Secure Sockets Layer) 安全套接层
  | TLS       | (Transport Layer Security) 传输层安全 (升级版 SSL)
  | OpenSSL   | SSL 的一个开源实现
  | X.509     | 一种证书标准 (定义证书文件的结构和内容)
  | PKCS      | (Public Key Cryptography Standards) 公钥加密标准
  | CA        | (Certificate Authority) 权威证书颁发机构
  | CSR       | (Certificate Signing Request) 证书签名请求，用于向 CA (权威证书颁发机构)购买 SSL 证书
  | cert      | 证书

- 证书类别

  | 证书类别 | 说明
  | -- | --
  | DV (Domain Validation)        | 个体用户 (邮件认证)
  | OV (Organization Validation)  | 企业用户 (电话认证)
  | EV (Extended Validation)      | 高级用户 (以上两种验证 & 金融机构的开发许可证)

- 编码格式

  | 编码格式 | 全称 | 常用于 | 格式
  | --- | --- | --- | ---
  | PEM | Privacy Enhanced Mail          | Linux (Apache) | 文本格式 </br>(开头: `-----BEGIN` </br>内容: BASE64编码 </br>结尾: `-----END`)
  | DER | Distinguished Encoding Rules   | Windows (Java) | 二进制格式 (不可读)

- 扩展名

  | 文件扩展名 | 编码 | 全称 | 说明
  | --- | --- | --- | ---
  | .pem | PEM        | Privacy Enhanced Mail         | X.509 证书
  | .der | DER        | Distinguished Encoding Rules  | X.509 证书
  | .crt | PEM > DER  | Certificate                   | X.509 证书
  | .cer | PEM < DER  | Certificate                   | X.509 证书
  | .key | PEM or DER | Key                           | 不是证书, 存放秘钥(公钥 or 私钥)
  | .csr | PEM or DER | Certificate Signing Request   | 不是证书, 证书签名请求(向权威证书颁发机构获得签名证书的申请), 核心内容: 公钥
  | .p12 | PEM or DER | PKCS#12                       | 包含证书(.crt) & 私钥(.key), 使用密码加密
  | .pfx | PEM or DER | Predecessor of PKCS#12        | (== .p12), 一般浏览器使用
  | .jks | PEM or DER | Java Key Storage              | (== .p12), keytool (Java 工具) 生成, Java 专利

## OpenSSL

- openssl.cnf

  | System | cnf
  | -- | --
  | Linux : `/usr/local/ssl/openssl.cnf`
  | macOS : `/System/Library/OpenSSL/openssl.cnf` or `/private/etc/ssl/openssl.cnf`

  ```bash
  $ openssl version # OpenSSL 版本信息
  $ openssl version -a # OpenSSL 版本详细信息
  $ openssl -h # 查看帮助信息
  #   Options :
  #       -in         : 输入文件
  #       -out        : 输出文件
  #       -inform     : 输入文件格式(默认: PEM)
  #       -outform    : 输出文件格式(默认: PEM)
  #       -inkey      : 输入的私钥文件
  #       -outkey     : 输出的私钥文件
  #       -passin     : 输入文件密码(用于解密已加密输入文件)
  #       -passout    : 输出文件密码(用于加密输出文件)
  #       -pubin      : 读入公钥(默认: 私钥)
  #       -pubout     : 输出公钥(默认: 私钥)
  #       -text       : 以文本形式打印内容
  #       -nodes      : don't DES encrypt, 不加密输出秘钥
  #       -noout      : don't output, 不输出任何内容，仅做验证
  #       -nokeys     : don't output private keys, 不输出私钥
  #       -nocerts    : don't output certificates, 不输出证书

  ## Standard 

  $ openssl ca 
  # openssl ca
  #   > CA 签名证书
  #       -config : 配置文件 (openssl.cnf)

  $ openssl x509 -in cert.pem -text -noout # 查看 PEM 格式证书信息
  $ openssl x509 -in cert.der -inform der -text -noout # 查看 DER 格式证书信息
  $ openssl x509 -in cert.pem -outform der -out cert.der # PEM 证书 -> DER 证书
  $ openssl x509 -in cert.der -inform der -outform pem -out cert.pem # DER 证书 -> PEM 证书
  # openssl x509
  #   > X.509 格式证书

  $ openssl req -in test.csr -text -noout # 查看 .csr 证书签名请求信息
  $ openssl req -new -key RSA.key -out CSR.csr # 使用已有私钥生成证书签名请求
  $ openssl req -new -out CSR.csr -newkey rsa:2048 -nodes -keyout CSR.key # 向权威证书颁发机构申请证书签名请求(同时生成私钥)
  $ openssl req -new -x509 -days 365 -keyout test.key -out test.crt # 生成自签名的 X.509 证书(有效期: 1年)
  # openssl req [options] <infile >outfile
  #   > 证书签名请求 | 生成证书请求
  #       -new : 新建请求
  #       -x509 : 生成 X.509 格式的证书
  #       -days : 生成证书的天数
  #       -extensions : 生成证书的扩展
  #       -newkey rsa:bits : 生成一个 RSA 的秘钥
  #       -keyout : 生成秘钥输出文件

  $ openssl pkcs12 -in input.der -out output.pem -nodes # DER 格式 ---> PEM 格式
  $ openssl pkcs12 -export -in test.crt -inkey pvt.key -certfile CA.crt -out keystore.p12 # 生成 keystore 文件
  $ openssl pkcs12 -in keystore.p12 -clcerts -out public_key.pem  # 导出公钥
  $ openssl pkcs12 -in keystore.p12 -nocerts -nodes -out private_key.pem   # 导出非加密私钥
  $ openssl pkcs12 -in myp12file.p12 -nocerts -nodes # 只显示不加密的私钥(不显示证书)
  # openssl pkcs12 [options]
  #   > PKCS#12
  #       -export : 输出 PKCS12 文件
  #       -inkey : 私钥输入文件(如果私钥输入文件不是 -in 输入文件)
  #       -certfile : 添加证书文件中的所有证书
  #       -clcerts : 只导出客户端证书
  #       -cacerts : 只导出 CA 证书

  $ openssl genrsa -out RSA.key 1024 # 生成 RSA 秘钥(包含私钥&公钥)文件 (默认 : PEM 格式)
  $ openssl genrsa -des3 -out root.key 2048 # 生成 DES 加密的的秘钥文件
  # openssl genrsa [args] [numbits]
  #   > 生成 RSA 秘钥 
  #       [args]:
  #           -des3 : 3 次 DES 加密
  #       [numbits] : 加密位数

  $ openssl rsa -in test.key -text -noout # 查看 PEM 格式 RSA 加密秘钥信息
  $ openssl rsa -in test.key -text -noout -inform der # 查看 DER 格式 RSA 加密秘钥信息
  $ openssl rsa -in RSA.key -out PUB.key -pubout  # 从 RSA 秘钥中提取公钥
  $ openssl rsa -in RSA.key -out PVT.key          # 从 RSA 秘钥中提取私钥(== RSA.key)
  $ openssl rsa -in RSA.key -text -noout          # 输出私钥信息
  $ openssl rsa -in PUB.key -text -noout -pubin   # 输出公钥信息
  $ openssl rsa -in RSA.key -des3 -out DES3.key   # 加密私钥
  # openssl rsa [-ciphername] [-check] [-engine id] [-in file] [-inform fmt] [-modulus] [-noout] [-out file] [-outform fmt] [-passin src] [-passout src] [-pubin] [-pubout] [-sgckey] [-text]
  #   > RSA 秘钥 
  #       -check : 验证 RSA 秘钥
  #       -pubin : 公钥输入
  #       -pubout : 公钥输出

  $ openssl rsautl -encrypt -inkey PUB.key -pubin -in test.txt -out encrypt.txt # 公钥加密文件
  $ openssl rsautl -decrypt -inkey PVT.key -in encrypt.txt -out decrypted.txt # 私钥解密文件
  # openssl rsautl [options]
  #   > RSA 工具
  #       -encrypt : 使用公钥加密
  #       -decrypt : 使用私钥解密

  ## Message Digest : 信息摘要

  ## Cipher : 秘钥加密

  ```

## keytool
> Key and Certificate Management Tool

- `KeyStore` : 服务器秘钥存放容器 (公钥 & 私钥 & 证书)
- `TrustStore` : 服务器信任秘钥存放容器 (CA公钥)
- keystore 位置
  | keystore | 位置
  | -- | --
  | JDK 自带 | `$JAVA_HOME/jre/lib/security/cacerts`
  | 默认生成 | `~/.keystore`

  ``` bash
  $ keytool -h # 查看帮助信息
  $ keytool [OPTION]...
  #   Options :
  #       -v          : 详细输出
  #       -alias      : 别名
  #       -sigalg     : 签名算法名称
  #       -file       : 输出文件名
  #       -keystore   : 密钥库名称 (默认: ~/.keystore)
  #       -storetype  : 密钥库类型
  #       -storepass  : 秘钥库口令(密码)
  #       -dname      : 

  $ keytool -certreq -alias test.com -keystore keystore.jks -file test.csr # 通过秘钥文件创建证书请求文件(CSR)
  # keytool -certreq [OPTION]...          
  #   > 生成证书请求
  #       -file : 输出的文件名

  $ keytool -changealias -alias one -destalias two -keystore keystore.jks # 修改别名 one 为 two
  # keytool -changealias [OPTION]...        
  #   > 更改条目的别名

  $ keytool -delete -alias test -keystore keystore.jks # 删除指定别名
  # keytool -delete [OPTION]...            
  #   > 删除条目

  $ keytool -export -alias test -keystore keystore.jks -file test.cer # 从秘钥库中导出别名为 test 的证书
  # keytool -exportcert (== -export) [OPTION]...         
  #   > 导出证书

  $ keytool -genkey -alias test -keyalg RSA -keysize 2048 -keystore keystore.jks 
  $ keytool -genkey -alias test.com -dname "CN=NG,OU=Test,O=Test,L=ChaoYang,ST=BeiJing,C=CN" -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 365
  $ keytool -genkey \
            -deststoretype pkcs12 \
            -alias CA_ROOT \
            -validity 3500 \
            -keystore CA_ROOT.keystore \
            -keyalg RSA \
            -keysize 2048 \
            -storepass 123456
  # keytool -genkeypair (== -genkey) [OPTION]...       
  #   > 生成密钥对
  #       -keyalg : 秘钥算法
  #       -keysize : 秘钥位长度

  $ keytool -genseckey 
  # keytool -genseckey [OPTION]...          
  #   > 生成密钥

  $ keytool -gencert 
  # keytool -gencert [OPTION]...            
  #   > 根据证书请求生成证书
  $ keytool -import -trustcacerts -alias test.com -file test.com.crt -keystore keystore.jks
  # keytool -importcert (== -import) [OPTION]...     
  #   > 导入证书或证书链
  #       -trustcacerts : 受信任的 CA 证书
  #       -file : 证书文件(CA 颁发的证书)

  $ keytool -importpass
  # keytool -importpass [OPTION]...         
  #   > 导入口令

  $ keytool -importkeystore
  # keytool -importkeystore [OPTION]...     
  #   > 从其他密钥库导入一个或所有条目

  $ keytoll -keypasswd 
  # keytool -keypasswd [OPTION]...          
  #   > 更改条目的密钥口令

  $ keytool -list -v -keystore keystore.jks # 查看 keystore 列表
  $ keytool -list -v -keystore keystore.jks -alias test # 查看指定别名
  # keytool -list [OPTION]...               
  #   > 列出密钥库中的条目

  $ keytool -printcert -v -file test.crt # 查看证书内容
  # keytool -printcert [OPTION]...          
  #   > 打印证书内容

  $ keytool -printcertreq -v -file test.csr # 查看证书请求内容
  # keytool -printcertreq [OPTION]...       
  #   > 打印证书请求的内容

  $ keytool -printcrl 
  # keytool -printcrl [OPTION]...           
  #   > 打印 CRL 文件的内容

  $ keytool -storepasswd -new [NEW_PW] -keystore keystore.jks # 修改 keystore 密码
  # keytool -storepasswd [OPTION]...        
  #   > 更改密钥库的存储口令
  ```

## Let’s Encrypt
> A free, automated, and open certificate authority.

- 生成证书位置 : `/etc/letsencrypt/live/$domain`
- 生成文件说明
  | 文件 | 说明
  | --- | ---
  | `privkey.pem`     | 证书的私钥
  | `cert.pem`        | 服务器证书
  | `chain.pem`       | 浏览器验证服务器证书所需的证书(根证书和中间证书)
  | `fullchain.pem`   | 所有证书(包含上面两个证书), 第一个是服务器证书

  ```bash
  $ certbot certonly # 生产证书
  $ certbot certonly --standalone -d example.com
  $ certbot certonly --webroot -w /var/www/example -d example.com
  # certbot certonly 
  #   > 生成证书
  #       --standalone    
  #       --webroot  
  $ certbot renew --dry-run     

  # 导出 Java Keytool 使用的 PKCS#12 秘钥库文件
  $ openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name tomcat -CAfile chain.pem -caname root
  ```

  