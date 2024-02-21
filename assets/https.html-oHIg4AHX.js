import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as a,a as i,b as e,e as t,d as n,f as s}from"./app-fqDzxcod.js";const d={},h=e("blockquote",null,[e("p",null,"Hyper Text Transfer Protocol over Secure Socket Layer，安全的超文本传输协议"),e("p",null,"TCP 默认端口 : 443")],-1),p=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),t(" reference")],-1),u={href:"https://github.com/FiloSottile/mkcert",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,"A simple zero-config tool to make locally trusted development certificates with any names you'd like.")],-1),f=s('<h2 id="https-的加密过程原理" tabindex="-1"><a class="header-anchor" href="#https-的加密过程原理" aria-hidden="true">#</a> <code>HTTPS</code> 的加密过程原理</h2><p>首先需要了解两种加密模式，对称加密和非对称加密。</p><ul><li>对称加密：通信双方使用同一个密钥进行数据的加密和解密。</li><li>非对称加密：有两个秘钥(私钥和公钥)，公钥用来加密数据，私钥用来解密。对称加密比非对称加密来说，因为使用单一秘钥计算量小，没有复杂的数学计算，所以效率上高于非对称加密。</li></ul><p><code>HTTPS</code> 的连接过程也是三次握手。相对于 <code>HTTP</code> 的区别在于，第二次时服务器除了发送 <code>ACK</code> 之外，还会将加密的使用的公钥发送给客户端。第三次时客户端接受到公钥后，会校验公钥的合法性，并生产一个对称加密的秘钥。客户端回复服务端 <code>ACK</code> 的同时，也会将生成的秘钥通过公钥加密之后发送给服务端。之后双方就可以使用秘钥进行数据加密通信了。</p><p><code>HTTPS</code> 中的中间人攻击，是指中间人先伪装成服务器接受客户端发送过来的请求，发送伪装的公钥给客户端。然后伪装成客户端将拦截的请求发送服务器，得到服务器的公钥。这样客户端以后发送请求都会请过中间人，中间人可以在篡改真实的请求。</p><p>而为了解决中间人攻击这个问题，就引入了 <code>CA</code> 机构，用于给服务器签发数字证书。数字证书是包含服务器标识(如：域名)以及服务器公钥等信息。客户端可以通过这些信息来确认是否连接上正确的服务器，来避免中间人攻击。</p><h2 id="https-认证方式" tabindex="-1"><a class="header-anchor" href="#https-认证方式" aria-hidden="true">#</a> HTTPS 认证方式</h2><ul><li><p>单向认证 :</p><ul><li>root.crt : 客户端使用的 CA 根证书</li><li>server.keystore : 服务端证书存放的容器</li></ul></li><li><p>双向认证 :</p><ul><li>root.crt : 根证书</li><li>client.p12 : 客户度证书包含私钥</li><li>root.truststore : 服务器存放的受信任(CA 证书)容器</li><li>server.keystore : 服务器证书存放容器</li></ul></li></ul><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><blockquote><p>SSH (Secure Shell) :</p><p>OpenSSH : SSH 协议的开源实现，使用 SSH 协议实现设备间加密通信(如: 远程控制、文件传输...)</p></blockquote>',10);function m(S,k){const o=l("ExternalLinkIcon");return c(),a("div",null,[i(" more "),h,p,e("ul",null,[e("li",null,[e("a",u,[t("mkcert"),n(o)]),_])]),f])}const x=r(d,[["render",m],["__file","https.html.vue"]]);export{x as default};