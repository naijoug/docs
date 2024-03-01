import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as l,a as i,b as n,e as s,d as t,f as e}from"./app-4qjgWOI3.js";const u={},r=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),d={href:"https://docs.mongodb.com",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.mongoing.com/docs",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://wiki.jikexueyuan.com/list/mongodb/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mlab.com",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="sql-vs-mongodb" tabindex="-1"><a class="header-anchor" href="#sql-vs-mongodb" aria-hidden="true">#</a> SQL VS MongoDB</h2><table><thead><tr><th style="text-align:center;"><code>SQL</code>术语/概念</th><th style="text-align:center;"><code>MongoDB</code>术语/概念</th></tr></thead><tbody><tr><td style="text-align:center;"><code>database</code>(数据库)</td><td style="text-align:center;"><code>database</code>(数据库)</td></tr><tr><td style="text-align:center;"><code>table</code>(表)</td><td style="text-align:center;"><code>collection</code>(集合)</td></tr><tr><td style="text-align:center;"><code>row</code>(行)</td><td style="text-align:center;"><code>document</code>(文档)</td></tr><tr><td style="text-align:center;"><code>column</code>(字段)</td><td style="text-align:center;"><code>field</code>(域)</td></tr><tr><td style="text-align:center;"><code>index</code> (索引)</td><td style="text-align:center;"><code>index</code>(索引)</td></tr><tr><td style="text-align:center;"><code>table joins</code>(表连接)</td><td style="text-align:center;">不支持</td></tr><tr><td style="text-align:center;"><code>primary key</code>(主键)</td><td style="text-align:center;"><code>primary key</code>(<code>MongoDB</code>自动将<code>_id</code>字段设置为主键)</td></tr></tbody></table><h2 id="startup-shutdown" tabindex="-1"><a class="header-anchor" href="#startup-shutdown" aria-hidden="true">#</a> Startup &amp; Shutdown</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 服务端启动</span>
$ mongod    <span class="token comment"># 启动 mongo 服务，默认数据库目录&quot;/data/db&quot;</span>
$ mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/path     <span class="token comment"># 指定数据库目录</span>
$ mongod <span class="token parameter variable">--port</span> <span class="token number">20111</span>       <span class="token comment"># 指定端口号(默认服务端口号 : 27017)</span>
$ mongod <span class="token parameter variable">--rest</span>             <span class="token comment"># 启用 HTTP 的用户页面(页面端口号 : 28017)</span>
$ mongod <span class="token parameter variable">--fork</span> <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/logpath <span class="token parameter variable">--logappend</span><span class="token operator">=</span>true
<span class="token comment">#   --fork      用于将 mongo 服务挂到 init 进程(pid=1)下启动</span>
<span class="token comment">#               防止非 exit 退出命令行，出现错误 \`got signal 1 (Hangup), will terminate after current cmd ends\`</span>
<span class="token comment">#   --logpath       指定 mongo 日志文件，注意是指定文件不是目录</span>
<span class="token comment">#   --logappend     使用追加的方式写日志</span>
$ mongod <span class="token parameter variable">-f</span> /path/file.conf <span class="token comment"># 通过配置文件启动，conf 中设置启动参数</span>

<span class="token comment"># 客户端启动</span>
$ ./mongo     <span class="token comment"># 进入 mongo 后台管理</span>

<span class="token comment"># 关闭 MongoDB</span>
<span class="token comment">#  方案一 : mongo 命令</span>
<span class="token operator">&gt;</span> use admin
<span class="token operator">&gt;</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#  方案二 : kill mongo 进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ubuntu</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认 path</span>
<span class="token comment">#   config : /etc/mongod.conf</span>
<span class="token comment">#   dbpath : /var/lib/mongodb</span>
<span class="token comment">#   logpath : /var/log/mongodb</span>
$ <span class="token function">sudo</span> <span class="token function">service</span> mongod start
$ <span class="token function">sudo</span> <span class="token function">service</span> mongod stop
$ <span class="token function">sudo</span> <span class="token function">service</span> mongod restart

$ systemctl start mongod
$ systemctl stop mongod
$ systemctl status mongod
$ systemctl restart mongod
$ systemctl <span class="token builtin class-name">enable</span> mongod   <span class="token comment"># 重启自动启动 mongo</span>

$ <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> /var/log/mongodb/mongod.log <span class="token comment"># 查看 mongo 日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>brew</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># config: /usr/local/etc/mongod.conf</span>
<span class="token comment"># logpath: /usr/local/var/log/mongodb</span>
<span class="token comment"># dbpath: /usr/local/var/mongodb</span>

$ brew services restart mongodb
$ brew services stop mongodb
$ brew services start mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><ul><li>常用命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> show <span class="token function">users</span>                <span class="token comment"># 显示所有用户</span>
<span class="token operator">&gt;</span> show dbs                  <span class="token comment"># 显示所有数据库</span>
<span class="token operator">&gt;</span> db                        <span class="token comment"># 显示当前所在数据库</span>
<span class="token operator">&gt;</span> use Users                 <span class="token comment"># 切换到 Users 数据库</span>
<span class="token operator">&gt;</span> show collections<span class="token punctuation">;</span>         <span class="token comment"># 显示当前数据库中的表列表</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">help</span>                      <span class="token comment"># 显示帮助信息</span>
<span class="token operator">&gt;</span> db.help<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment"># 显示 db 帮助信息</span>
<span class="token operator">&gt;</span> db.Users.help<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment"># 显示 Users 表帮助信息 </span>
<span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span>, <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># 用户授权  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用户授权</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户授权</span>
<span class="token operator">&gt;</span> use reporting
<span class="token operator">&gt;</span> db.grantRolesToUser<span class="token punctuation">(</span>
   <span class="token string">&quot;reportsUser&quot;</span>,
   <span class="token punctuation">[</span>
     <span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;products&quot;</span> <span class="token punctuation">}</span> ,
     <span class="token punctuation">{</span> role: <span class="token string">&quot;readAnyDatabase&quot;</span>, db:<span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">)</span>
<span class="token comment"># 撤销用户授权</span>
<span class="token operator">&gt;</span> use reporting
<span class="token operator">&gt;</span> db.revokeRolesFromUser<span class="token punctuation">(</span>
    <span class="token string">&quot;reportsUser&quot;</span>,
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;accounts&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
 <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据库(创建 &amp; 删除)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建数据库</span>
<span class="token operator">&gt;</span> use User  <span class="token comment"># 存在，切换到User数据库；不存在，创建(刚创建的数据库，需要插入一条数据后，才能显示)</span>
<span class="token comment"># 删除数据库</span>
<span class="token operator">&gt;</span> db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 需要先切换到对应数据库</span>
<span class="token comment"># 创建Info数据库，并创建数据访问用户，有读写权限</span>
<span class="token operator">&gt;</span> use Info
<span class="token comment"># 3.0添加用户</span>
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;admin&quot;</span>, pwd:<span class="token string">&quot;admin&quot;</span>, roles:<span class="token punctuation">[</span><span class="token string">&quot;readWrite&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 2.0添加用户</span>
<span class="token operator">&gt;</span> db.addUser<span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span>,<span class="token string">&quot;123456&quot;</span>,false<span class="token punctuation">)</span> <span class="token comment"># 最后参数：是否只读</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>集合数据(增 &amp; 删 &amp; 改 &amp; 查)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 插入数据</span>
<span class="token operator">&gt;</span> db.User.insert<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span>,<span class="token string">&quot;0001&quot;</span>, <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kobe&quot;</span>, <span class="token string">&quot;age&quot;</span>:24<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># User是插入的集合名</span>
<span class="token operator">&gt;</span> db.User.save<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0002&quot;</span>, <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;James&quot;</span>, <span class="token string">&quot;age&quot;</span>:23<span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># 不传_id，等价于insert</span>
<span class="token comment"># 删除数据</span>
<span class="token operator">&gt;</span> db.User.remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span>:24<span class="token punctuation">}</span><span class="token punctuation">)</span>        <span class="token comment"># 删除所有age=24的文档</span>
<span class="token operator">&gt;</span> db.User.remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span>:24<span class="token punctuation">}</span>, <span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment"># 删除一条age=24的文档</span>
<span class="token operator">&gt;</span> db.User.remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>                <span class="token comment"># 清空User文档</span>
<span class="token comment"># 修改数据</span>
<span class="token operator">&gt;</span> db.User.update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0001&quot;</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;James&quot;</span>, <span class="token string">&quot;age&quot;</span>:23<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># 前面查询条件，后面更新数据，仅更新第一条</span>
<span class="token operator">&gt;</span> db.User.update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kobe&quot;</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>multi:true<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 更新所有符合条件数据</span>
<span class="token operator">&gt;</span> db.User.save<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span>:ObjectId<span class="token punctuation">(</span><span class="token string">&quot;584e56b8889783db5c067282&quot;</span><span class="token punctuation">)</span>, <span class="token string">&quot;age&quot;</span>:24<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 修改_id的数据</span>
<span class="token comment"># 查询数据</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 查询User集合数据</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.pretty<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 易读形式查询User集合数据</span>
<span class="token operator">&gt;</span> db.User.findOne<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 返回一个文档</span>
<span class="token comment"># 条件查询</span>
<span class="token comment"># AND 条件查询 (name=kobe &amp;&amp; 12&lt; age &amp;&amp; age &lt; 24 )</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kobe&quot;</span>, <span class="token string">&quot;age&quot;</span>:<span class="token punctuation">{</span><span class="token variable">$gt</span>:12, <span class="token variable">$lt</span>:24<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>     
<span class="token comment"># OR 条件查询 (id=0001 or age &gt; 24)</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token variable">$or</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0001&quot;</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span>:<span class="token punctuation">{</span><span class="token variable">$gt</span>:24<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  
<span class="token comment"># AND 和 OR 联合使用 (age=kobe or age &lt; 24)</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kobe&quot;</span>, <span class="token variable">$or</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span>:<span class="token punctuation">{</span><span class="token variable">$lt</span>:24<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   
<span class="token comment"># $lt : &lt; | $lte : &lt;= | $gt : &gt; | $gte : &gt;= | $ne : !=</span>
<span class="token comment"># 模糊查询</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span>:<span class="token punctuation">{</span><span class="token variable">$regex</span><span class="token builtin class-name">:</span><span class="token string">&quot;110&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 查询名字中包含 110 的</span>
<span class="token comment"># 指定返回字段， 1 -&gt; 返回 ; 0 -&gt; 不返回</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kobe&quot;</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span>:0,<span class="token string">&quot;age&quot;</span>:1<span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 结果集总数</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># 跳过前两条数据</span>
<span class="token operator">&gt;</span> db.User.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>   <span class="token comment"># 限制条数 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据库迁移</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mongodump</span>

<span class="token comment"># mongorestore</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> Error</h2>`,20),h={href:"https://stackoverflow.com/questions/51184838/mongodb-can-not-start-by-the-command-service-mongod-start",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"service mongod start",-1),f=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> <span class="token function">chown</span> mongodb.mongodb <span class="token parameter variable">-R</span> /var/lib/mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function _(x,U){const a=p("ExternalLinkIcon");return c(),l("div",null,[i(" more "),r,n("ul",null,[n("li",null,[n("a",d,[s("MongoDB Docs"),t(a)]),s(" : "),n("a",m,[s("MongoDB 中文手册"),t(a)])]),n("li",null,[n("a",k,[s("菜鸟教程 - MongoDB"),t(a)])]),n("li",null,[n("a",v,[s("MongoDB 入门教程"),t(a)])]),n("li",null,[n("a",b,[s("mLab - 免费的 Mongo 云"),t(a)])])]),g,n("ul",null,[n("li",null,[n("a",h,[s("MongoDB can not start by the command "),q,t(a)])])]),f])}const w=o(u,[["render",_],["__file","mongodb.html.vue"]]);export{w as default};