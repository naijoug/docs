# Tomcat

## Reference

- [Tomcat](https://github.com/apache/tomcat)

## server.xml

```xml server.xml
<!-- HTTPS 单向验证 设置 -->
<Connector port="8443" 
           protocol="org.apache.coyote.http11.Http11Protocol"
               maxThreads="150" 
               SSLEnabled="true" 
               scheme="https" 
               secure="true"
               clientAuth="false" 
               sslProtocol="TLS" 
               keystoreFile="conf/keystore.jks" 
               keystorePass="123456" />
```

## web.xml

- `<security-constraint>`
    * `<web-resource-collection>` : web 资源
        + `<web-resource-name>` : 资源名称
        + `<url-pattern>` : 匹配的 URL 
    * `<http-method>` 
        + 无 : 表示禁用 HTTP 
    * `<auth-constraint>`
        + `<role-name>` : 角色名
        + 无 : 任何身份用户都可以访问相应的资源
        + 有 
            - 内容为空 : 所有身份用户都禁止访问资源
            - 内容不为空 : 授权用户可以访问资源