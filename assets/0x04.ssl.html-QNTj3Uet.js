import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c as p,a as i,b as a,e,d as n,f as o}from"./app-JL8Wirg4.js";const c={},d=a("h2",{id:"reference",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),e(" reference")],-1),m={href:"https://github.com/letsencrypt",target:"_blank",rel:"noopener noreferrer"},v={href:"https://freessl.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://keymanager.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://csr.chinassl.net/convert-ssl.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.oracle.com/javase/7/docs/technotes/tools/windows/keytool.html",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><table><thead><tr><th>-</th><th>-</th></tr></thead><tbody><tr><td>SSL</td><td>(Secure Sockets Layer) 安全套接层</td></tr><tr><td>TLS</td><td>(Transport Layer Security) 传输层安全 (升级版 SSL)</td></tr><tr><td>OpenSSL</td><td>SSL 的一个开源实现</td></tr><tr><td>X.509</td><td>一种证书标准 (定义证书文件的结构和内容)</td></tr><tr><td>PKCS</td><td>(Public Key Cryptography Standards) 公钥加密标准</td></tr><tr><td>CA</td><td>(Certificate Authority) 权威证书颁发机构</td></tr><tr><td>CSR</td><td>(Certificate Signing Request) 证书签名请求，用于向 CA (权威证书颁发机构)购买 SSL 证书</td></tr><tr><td>cert</td><td>证书</td></tr></tbody></table><ul><li><p>证书类别</p><table><thead><tr><th>证书类别</th><th>说明</th></tr></thead><tbody><tr><td>DV (Domain Validation)</td><td>个体用户 (邮件认证)</td></tr><tr><td>OV (Organization Validation)</td><td>企业用户 (电话认证)</td></tr><tr><td>EV (Extended Validation)</td><td>高级用户 (以上两种验证 &amp; 金融机构的开发许可证)</td></tr></tbody></table></li><li><p>编码格式</p><table><thead><tr><th>编码格式</th><th>全称</th><th>常用于</th><th>格式</th></tr></thead><tbody><tr><td>PEM</td><td>Privacy Enhanced Mail</td><td>Linux (Apache)</td><td>文本格式 : (开头: <code>-----BEGIN</code> 内容: BASE64编码 结尾: <code>-----END</code>)</td></tr><tr><td>DER</td><td>Distinguished Encoding Rules</td><td>Windows (Java)</td><td>二进制格式 (不可读)</td></tr></tbody></table></li><li><p>扩展名</p><table><thead><tr><th>文件扩展名</th><th>编码</th><th>全称</th><th>说明</th></tr></thead><tbody><tr><td>.pem</td><td>PEM</td><td>Privacy Enhanced Mail</td><td>X.509 证书</td></tr><tr><td>.der</td><td>DER</td><td>Distinguished Encoding Rules</td><td>X.509 证书</td></tr><tr><td>.crt</td><td>PEM &gt; DER</td><td>Certificate</td><td>X.509 证书</td></tr><tr><td>.cer</td><td>PEM &lt; DER</td><td>Certificate</td><td>X.509 证书</td></tr><tr><td>.key</td><td>PEM or DER</td><td>Key</td><td>不是证书, 存放秘钥(公钥 or 私钥)</td></tr><tr><td>.csr</td><td>PEM or DER</td><td>Certificate Signing Request</td><td>不是证书, 证书签名请求(向权威证书颁发机构获得签名证书的申请), 核心内容: 公钥</td></tr><tr><td>.p12</td><td>PEM or DER</td><td>PKCS#12</td><td>包含证书(.crt) &amp; 私钥(.key), 使用密码加密</td></tr><tr><td>.pfx</td><td>PEM or DER</td><td>Predecessor of PKCS#12</td><td>(== .p12), 一般浏览器使用</td></tr><tr><td>.jks</td><td>PEM or DER</td><td>Java Key Storage</td><td>(== .p12), keytool (Java 工具) 生成, Java 专利</td></tr></tbody></table></li></ul><h2 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl" aria-hidden="true">#</a> OpenSSL</h2><ul><li><p>openssl.cnf</p><table><thead><tr><th>System</th><th>cnf</th></tr></thead><tbody><tr><td>Linux : <code>/usr/local/ssl/openssl.cnf</code></td><td></td></tr><tr><td>macOS : <code>/System/Library/OpenSSL/openssl.cnf</code> or <code>/private/etc/ssl/openssl.cnf</code></td><td></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ openssl version <span class="token comment"># OpenSSL 版本信息</span>
$ openssl version <span class="token parameter variable">-a</span> <span class="token comment"># OpenSSL 版本详细信息</span>
$ openssl <span class="token parameter variable">-h</span> <span class="token comment"># 查看帮助信息</span>
<span class="token comment">#   Options :</span>
<span class="token comment">#       -in         : 输入文件</span>
<span class="token comment">#       -out        : 输出文件</span>
<span class="token comment">#       -inform     : 输入文件格式(默认: PEM)</span>
<span class="token comment">#       -outform    : 输出文件格式(默认: PEM)</span>
<span class="token comment">#       -inkey      : 输入的私钥文件</span>
<span class="token comment">#       -outkey     : 输出的私钥文件</span>
<span class="token comment">#       -passin     : 输入文件密码(用于解密已加密输入文件)</span>
<span class="token comment">#       -passout    : 输出文件密码(用于加密输出文件)</span>
<span class="token comment">#       -pubin      : 读入公钥(默认: 私钥)</span>
<span class="token comment">#       -pubout     : 输出公钥(默认: 私钥)</span>
<span class="token comment">#       -text       : 以文本形式打印内容</span>
<span class="token comment">#       -nodes      : don&#39;t DES encrypt, 不加密输出秘钥</span>
<span class="token comment">#       -noout      : don&#39;t output, 不输出任何内容，仅做验证</span>
<span class="token comment">#       -nokeys     : don&#39;t output private keys, 不输出私钥</span>
<span class="token comment">#       -nocerts    : don&#39;t output certificates, 不输出证书</span>

<span class="token comment">## Standard </span>

$ openssl ca 
<span class="token comment"># openssl ca</span>
<span class="token comment">#   &gt; CA 签名证书</span>
<span class="token comment">#       -config : 配置文件 (openssl.cnf)</span>

$ openssl x509 <span class="token parameter variable">-in</span> cert.pem <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token comment"># 查看 PEM 格式证书信息</span>
$ openssl x509 <span class="token parameter variable">-in</span> cert.der <span class="token parameter variable">-inform</span> der <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token comment"># 查看 DER 格式证书信息</span>
$ openssl x509 <span class="token parameter variable">-in</span> cert.pem <span class="token parameter variable">-outform</span> der <span class="token parameter variable">-out</span> cert.der <span class="token comment"># PEM 证书 -&gt; DER 证书</span>
$ openssl x509 <span class="token parameter variable">-in</span> cert.der <span class="token parameter variable">-inform</span> der <span class="token parameter variable">-outform</span> pem <span class="token parameter variable">-out</span> cert.pem <span class="token comment"># DER 证书 -&gt; PEM 证书</span>
<span class="token comment"># openssl x509</span>
<span class="token comment">#   &gt; X.509 格式证书</span>

$ openssl req <span class="token parameter variable">-in</span> test.csr <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token comment"># 查看 .csr 证书签名请求信息</span>
$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> RSA.key <span class="token parameter variable">-out</span> CSR.csr <span class="token comment"># 使用已有私钥生成证书签名请求</span>
$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-out</span> CSR.csr <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-keyout</span> CSR.key <span class="token comment"># 向权威证书颁发机构申请证书签名请求(同时生成私钥)</span>
$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-x509</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-keyout</span> test.key <span class="token parameter variable">-out</span> test.crt <span class="token comment"># 生成自签名的 X.509 证书(有效期: 1年)</span>
<span class="token comment"># openssl req [options] &lt;infile &gt;outfile</span>
<span class="token comment">#   &gt; 证书签名请求 | 生成证书请求</span>
<span class="token comment">#       -new : 新建请求</span>
<span class="token comment">#       -x509 : 生成 X.509 格式的证书</span>
<span class="token comment">#       -days : 生成证书的天数</span>
<span class="token comment">#       -extensions : 生成证书的扩展</span>
<span class="token comment">#       -newkey rsa:bits : 生成一个 RSA 的秘钥</span>
<span class="token comment">#       -keyout : 生成秘钥输出文件</span>

$ openssl pkcs12 <span class="token parameter variable">-in</span> input.der <span class="token parameter variable">-out</span> output.pem <span class="token parameter variable">-nodes</span> <span class="token comment"># DER 格式 ---&gt; PEM 格式</span>
$ openssl pkcs12 <span class="token parameter variable">-export</span> <span class="token parameter variable">-in</span> test.crt <span class="token parameter variable">-inkey</span> pvt.key <span class="token parameter variable">-certfile</span> CA.crt <span class="token parameter variable">-out</span> keystore.p12 <span class="token comment"># 生成 keystore 文件</span>
$ openssl pkcs12 <span class="token parameter variable">-in</span> keystore.p12 <span class="token parameter variable">-clcerts</span> <span class="token parameter variable">-out</span> public_key.pem  <span class="token comment"># 导出公钥</span>
$ openssl pkcs12 <span class="token parameter variable">-in</span> keystore.p12 <span class="token parameter variable">-nocerts</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-out</span> private_key.pem   <span class="token comment"># 导出非加密私钥</span>
$ openssl pkcs12 <span class="token parameter variable">-in</span> myp12file.p12 <span class="token parameter variable">-nocerts</span> <span class="token parameter variable">-nodes</span> <span class="token comment"># 只显示不加密的私钥(不显示证书)</span>
<span class="token comment"># openssl pkcs12 [options]</span>
<span class="token comment">#   &gt; PKCS#12</span>
<span class="token comment">#       -export : 输出 PKCS12 文件</span>
<span class="token comment">#       -inkey : 私钥输入文件(如果私钥输入文件不是 -in 输入文件)</span>
<span class="token comment">#       -certfile : 添加证书文件中的所有证书</span>
<span class="token comment">#       -clcerts : 只导出客户端证书</span>
<span class="token comment">#       -cacerts : 只导出 CA 证书</span>

$ openssl genrsa <span class="token parameter variable">-out</span> RSA.key <span class="token number">1024</span> <span class="token comment"># 生成 RSA 秘钥(包含私钥&amp;公钥)文件 (默认 : PEM 格式)</span>
$ openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> root.key <span class="token number">2048</span> <span class="token comment"># 生成 DES 加密的的秘钥文件</span>
<span class="token comment"># openssl genrsa [args] [numbits]</span>
<span class="token comment">#   &gt; 生成 RSA 秘钥 </span>
<span class="token comment">#       [args]:</span>
<span class="token comment">#           -des3 : 3 次 DES 加密</span>
<span class="token comment">#       [numbits] : 加密位数</span>

$ openssl rsa <span class="token parameter variable">-in</span> test.key <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token comment"># 查看 PEM 格式 RSA 加密秘钥信息</span>
$ openssl rsa <span class="token parameter variable">-in</span> test.key <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token parameter variable">-inform</span> der <span class="token comment"># 查看 DER 格式 RSA 加密秘钥信息</span>
$ openssl rsa <span class="token parameter variable">-in</span> RSA.key <span class="token parameter variable">-out</span> PUB.key <span class="token parameter variable">-pubout</span>  <span class="token comment"># 从 RSA 秘钥中提取公钥</span>
$ openssl rsa <span class="token parameter variable">-in</span> RSA.key <span class="token parameter variable">-out</span> PVT.key          <span class="token comment"># 从 RSA 秘钥中提取私钥(== RSA.key)</span>
$ openssl rsa <span class="token parameter variable">-in</span> RSA.key <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span>          <span class="token comment"># 输出私钥信息</span>
$ openssl rsa <span class="token parameter variable">-in</span> PUB.key <span class="token parameter variable">-text</span> <span class="token parameter variable">-noout</span> <span class="token parameter variable">-pubin</span>   <span class="token comment"># 输出公钥信息</span>
$ openssl rsa <span class="token parameter variable">-in</span> RSA.key <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> DES3.key   <span class="token comment"># 加密私钥</span>
<span class="token comment"># openssl rsa [-ciphername] [-check] [-engine id] [-in file] [-inform fmt] [-modulus] [-noout] [-out file] [-outform fmt] [-passin src] [-passout src] [-pubin] [-pubout] [-sgckey] [-text]</span>
<span class="token comment">#   &gt; RSA 秘钥 </span>
<span class="token comment">#       -check : 验证 RSA 秘钥</span>
<span class="token comment">#       -pubin : 公钥输入</span>
<span class="token comment">#       -pubout : 公钥输出</span>

$ openssl rsautl <span class="token parameter variable">-encrypt</span> <span class="token parameter variable">-inkey</span> PUB.key <span class="token parameter variable">-pubin</span> <span class="token parameter variable">-in</span> test.txt <span class="token parameter variable">-out</span> encrypt.txt <span class="token comment"># 公钥加密文件</span>
$ openssl rsautl <span class="token parameter variable">-decrypt</span> <span class="token parameter variable">-inkey</span> PVT.key <span class="token parameter variable">-in</span> encrypt.txt <span class="token parameter variable">-out</span> decrypted.txt <span class="token comment"># 私钥解密文件</span>
<span class="token comment"># openssl rsautl [options]</span>
<span class="token comment">#   &gt; RSA 工具</span>
<span class="token comment">#       -encrypt : 使用公钥加密</span>
<span class="token comment">#       -decrypt : 使用私钥解密</span>

<span class="token comment">## Message Digest : 信息摘要</span>

<span class="token comment">## Cipher : 秘钥加密</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="keytool" tabindex="-1"><a class="header-anchor" href="#keytool" aria-hidden="true">#</a> keytool</h2><blockquote><p>Key and Certificate Management Tool</p></blockquote><ul><li><p><code>KeyStore</code> : 服务器秘钥存放容器 (公钥 &amp; 私钥 &amp; 证书)</p></li><li><p><code>TrustStore</code> : 服务器信任秘钥存放容器 (CA公钥)</p></li><li><p>keystore 位置</p><table><thead><tr><th>keystore</th><th>位置</th></tr></thead><tbody><tr><td>JDK 自带</td><td><code>$JAVA_HOME/jre/lib/security/cacerts</code></td></tr><tr><td>默认生成</td><td><code>~/.keystore</code></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ keytool <span class="token parameter variable">-h</span> <span class="token comment"># 查看帮助信息</span>
$ keytool <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token comment">#   Options :</span>
<span class="token comment">#       -v          : 详细输出</span>
<span class="token comment">#       -alias      : 别名</span>
<span class="token comment">#       -sigalg     : 签名算法名称</span>
<span class="token comment">#       -file       : 输出文件名</span>
<span class="token comment">#       -keystore   : 密钥库名称 (默认: ~/.keystore)</span>
<span class="token comment">#       -storetype  : 密钥库类型</span>
<span class="token comment">#       -storepass  : 秘钥库口令(密码)</span>
<span class="token comment">#       -dname      : </span>

$ keytool <span class="token parameter variable">-certreq</span> <span class="token parameter variable">-alias</span> test.com <span class="token parameter variable">-keystore</span> keystore.jks <span class="token parameter variable">-file</span> test.csr <span class="token comment"># 通过秘钥文件创建证书请求文件(CSR)</span>
<span class="token comment"># keytool -certreq [OPTION]...          </span>
<span class="token comment">#   &gt; 生成证书请求</span>
<span class="token comment">#       -file : 输出的文件名</span>

$ keytool <span class="token parameter variable">-changealias</span> <span class="token parameter variable">-alias</span> one <span class="token parameter variable">-destalias</span> two <span class="token parameter variable">-keystore</span> keystore.jks <span class="token comment"># 修改别名 one 为 two</span>
<span class="token comment"># keytool -changealias [OPTION]...        </span>
<span class="token comment">#   &gt; 更改条目的别名</span>

$ keytool <span class="token parameter variable">-delete</span> <span class="token parameter variable">-alias</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-keystore</span> keystore.jks <span class="token comment"># 删除指定别名</span>
<span class="token comment"># keytool -delete [OPTION]...            </span>
<span class="token comment">#   &gt; 删除条目</span>

$ keytool <span class="token parameter variable">-export</span> <span class="token parameter variable">-alias</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-keystore</span> keystore.jks <span class="token parameter variable">-file</span> test.cer <span class="token comment"># 从秘钥库中导出别名为 test 的证书</span>
<span class="token comment"># keytool -exportcert (== -export) [OPTION]...         </span>
<span class="token comment">#   &gt; 导出证书</span>

$ keytool <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-alias</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-keyalg</span> RSA <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> <span class="token parameter variable">-keystore</span> keystore.jks 
$ keytool <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-alias</span> test.com <span class="token parameter variable">-dname</span> <span class="token string">&quot;CN=NG,OU=Test,O=Test,L=ChaoYang,ST=BeiJing,C=CN&quot;</span> <span class="token parameter variable">-storetype</span> PKCS12 <span class="token parameter variable">-keyalg</span> RSA <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> <span class="token parameter variable">-keystore</span> keystore.p12 <span class="token parameter variable">-validity</span> <span class="token number">365</span>
$ keytool <span class="token parameter variable">-genkey</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-deststoretype</span> pkcs12 <span class="token punctuation">\\</span>
          <span class="token parameter variable">-alias</span> CA_ROOT <span class="token punctuation">\\</span>
          <span class="token parameter variable">-validity</span> <span class="token number">3500</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-keystore</span> CA_ROOT.keystore <span class="token punctuation">\\</span>
          <span class="token parameter variable">-keyalg</span> RSA <span class="token punctuation">\\</span>
          <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-storepass</span> <span class="token number">123456</span>
<span class="token comment"># keytool -genkeypair (== -genkey) [OPTION]...       </span>
<span class="token comment">#   &gt; 生成密钥对</span>
<span class="token comment">#       -keyalg : 秘钥算法</span>
<span class="token comment">#       -keysize : 秘钥位长度</span>

$ keytool <span class="token parameter variable">-genseckey</span> 
<span class="token comment"># keytool -genseckey [OPTION]...          </span>
<span class="token comment">#   &gt; 生成密钥</span>

$ keytool <span class="token parameter variable">-gencert</span> 
<span class="token comment"># keytool -gencert [OPTION]...            </span>
<span class="token comment">#   &gt; 根据证书请求生成证书</span>
$ keytool <span class="token parameter variable">-import</span> <span class="token parameter variable">-trustcacerts</span> <span class="token parameter variable">-alias</span> test.com <span class="token parameter variable">-file</span> test.com.crt <span class="token parameter variable">-keystore</span> keystore.jks
<span class="token comment"># keytool -importcert (== -import) [OPTION]...     </span>
<span class="token comment">#   &gt; 导入证书或证书链</span>
<span class="token comment">#       -trustcacerts : 受信任的 CA 证书</span>
<span class="token comment">#       -file : 证书文件(CA 颁发的证书)</span>

$ keytool <span class="token parameter variable">-importpass</span>
<span class="token comment"># keytool -importpass [OPTION]...         </span>
<span class="token comment">#   &gt; 导入口令</span>

$ keytool <span class="token parameter variable">-importkeystore</span>
<span class="token comment"># keytool -importkeystore [OPTION]...     </span>
<span class="token comment">#   &gt; 从其他密钥库导入一个或所有条目</span>

$ keytoll <span class="token parameter variable">-keypasswd</span> 
<span class="token comment"># keytool -keypasswd [OPTION]...          </span>
<span class="token comment">#   &gt; 更改条目的密钥口令</span>

$ keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-keystore</span> keystore.jks <span class="token comment"># 查看 keystore 列表</span>
$ keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-keystore</span> keystore.jks <span class="token parameter variable">-alias</span> <span class="token builtin class-name">test</span> <span class="token comment"># 查看指定别名</span>
<span class="token comment"># keytool -list [OPTION]...               </span>
<span class="token comment">#   &gt; 列出密钥库中的条目</span>

$ keytool <span class="token parameter variable">-printcert</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-file</span> test.crt <span class="token comment"># 查看证书内容</span>
<span class="token comment"># keytool -printcert [OPTION]...          </span>
<span class="token comment">#   &gt; 打印证书内容</span>

$ keytool <span class="token parameter variable">-printcertreq</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-file</span> test.csr <span class="token comment"># 查看证书请求内容</span>
<span class="token comment"># keytool -printcertreq [OPTION]...       </span>
<span class="token comment">#   &gt; 打印证书请求的内容</span>

$ keytool <span class="token parameter variable">-printcrl</span> 
<span class="token comment"># keytool -printcrl [OPTION]...           </span>
<span class="token comment">#   &gt; 打印 CRL 文件的内容</span>

$ keytool <span class="token parameter variable">-storepasswd</span> <span class="token parameter variable">-new</span> <span class="token punctuation">[</span>NEW_PW<span class="token punctuation">]</span> <span class="token parameter variable">-keystore</span> keystore.jks <span class="token comment"># 修改 keystore 密码</span>
<span class="token comment"># keytool -storepasswd [OPTION]...        </span>
<span class="token comment">#   &gt; 更改密钥库的存储口令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="let-s-encrypt" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt" aria-hidden="true">#</a> Let’s Encrypt</h2><blockquote><p>A free, automated, and open certificate authority.</p></blockquote><ul><li><p>生成证书位置 : <code>/etc/letsencrypt/live/$domain</code></p></li><li><p>生成文件说明</p><table><thead><tr><th>文件</th><th>说明</th></tr></thead><tbody><tr><td><code>privkey.pem</code></td><td>证书的私钥</td></tr><tr><td><code>cert.pem</code></td><td>服务器证书</td></tr><tr><td><code>chain.pem</code></td><td>浏览器验证服务器证书所需的证书(根证书和中间证书)</td></tr><tr><td><code>fullchain.pem</code></td><td>所有证书(包含上面两个证书), 第一个是服务器证书</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ certbot certonly <span class="token comment"># 生产证书</span>
$ certbot certonly <span class="token parameter variable">--standalone</span> <span class="token parameter variable">-d</span> example.com
$ certbot certonly <span class="token parameter variable">--webroot</span> <span class="token parameter variable">-w</span> /var/www/example <span class="token parameter variable">-d</span> example.com
<span class="token comment"># certbot certonly </span>
<span class="token comment">#   &gt; 生成证书</span>
<span class="token comment">#       --standalone    </span>
<span class="token comment">#       --webroot  </span>
$ certbot renew --dry-run     

<span class="token comment"># 导出 Java Keytool 使用的 PKCS#12 秘钥库文件</span>
$ openssl pkcs12 <span class="token parameter variable">-export</span> <span class="token parameter variable">-in</span> fullchain.pem <span class="token parameter variable">-inkey</span> privkey.pem <span class="token parameter variable">-out</span> keystore.p12 <span class="token parameter variable">-name</span> tomcat <span class="token parameter variable">-CAfile</span> chain.pem <span class="token parameter variable">-caname</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,11);function g(f,S){const s=l("ExternalLinkIcon");return r(),p("div",null,[i(" more "),d,a("ul",null,[a("li",null,[a("a",m,[e("Let’s Encrypt"),n(s)]),e(" : 一个免费、自动化、开源的 CA 机构")]),a("li",null,[a("a",v,[e("FreeSSL"),n(s)]),e(" : 一个提供免费HTTPS证书申请的网站")]),a("li",null,[a("a",k,[e("KeyManager"),n(s)]),e(" : 提供安全便捷的证书申请和管理")]),a("li",null,[a("a",b,[e("SSL证书格式转换工具"),n(s)])]),a("li",null,[a("a",u,[e("Certbot"),n(s)])]),a("li",null,[a("a",y,[e("keytool"),n(s)])])]),h])}const E=t(c,[["render",g],["__file","0x04.ssl.html.vue"]]);export{E as default};
