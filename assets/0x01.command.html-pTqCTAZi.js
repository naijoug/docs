import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as t,a as p,b as n,e as s,d as e,f as o}from"./app-s1r4vo8o.js";const m={},d=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),r={href:"https://man.niaoge.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://cron.qqe2.com/",target:"_blank",rel:"noopener noreferrer"},u=o(`<h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># [命令] [选项(可多个)] [参数]</span>
$ <span class="token builtin class-name">command</span> <span class="token parameter variable">-options</span> arguments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令操作" tabindex="-1"><a class="header-anchor" href="#命令操作" aria-hidden="true">#</a> 命令操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># type : 显示命令的类型</span>
$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>               <span class="token comment"># 显示ls命令</span>
$ <span class="token builtin class-name">type</span> python           <span class="token comment"># 显示python命令</span>

<span class="token comment"># clear : 清空屏幕</span>
$ <span class="token function">clear</span>

<span class="token comment"># help : 得到Shell内部命令的帮助文档(Mac下没有改命令)</span>
<span class="token comment"># --help : 显示用法信息</span>
$ <span class="token function">cp</span> <span class="token parameter variable">--help</span>             <span class="token comment"># 显示cp的帮助信息</span>

<span class="token comment"># man : 显示程序手册(man 使用 less 工具来显示参考手册)</span>
$ <span class="token function">man</span> <span class="token function">ls</span>                <span class="token comment"># 显示程序手册</span>

<span class="token comment"># info : 显示程序info条目，通过Info阅读器显示程序手册(类似man)</span>

<span class="token comment"># alias : 创建命令别名 (多条命名可以用\`;\`进行分割)</span>
$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">showUsers</span><span class="token operator">=</span><span class="token string">&#39;cd /Users; ls -l&#39;</span>    <span class="token comment"># 定义别名showUsers(进入/Users目录，并显示该目录内容)</span>

<span class="token comment"># unalias : 删除命令别名</span>
$ <span class="token builtin class-name">unalias</span> showUsers                     <span class="token comment"># 删除showUsers别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件-目录基本操作" tabindex="-1"><a class="header-anchor" href="#文件-目录基本操作" aria-hidden="true">#</a> 文件|目录基本操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ls : 列出目录内容</span>
<span class="token comment"># -a(all): 所有文件(包括隐藏文件.) ; -l: 长模式显示 ; -i: 显示文件索引结点 ; -r(reverse): 反序 ; -S: 文件大小排序 ; -t: 修改时间排序</span>
$ <span class="token function">ls</span>                    <span class="token comment"># 列出当前目录的文件和子目录</span>
$ <span class="token function">ls</span> /usr               <span class="token comment"># 列出指定目录(/usr)内容</span>
$ <span class="token function">ls</span> /usr ~             <span class="token comment"># 列出多个目录内容(~ : 家目录)</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>                 <span class="token comment"># 列出目录详细信息( -l : 长模式输出 )</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-lh</span>                <span class="token comment"># 列出目录，优化显示存储空间大小</span>

<span class="token comment"># pwd : 显示当前工作目录</span>
$ <span class="token builtin class-name">pwd</span>

<span class="token comment"># cd : 切换当前工作目录</span>
$ <span class="token builtin class-name">cd</span>                    <span class="token comment"># 切换到当前用户家目录</span>
$ <span class="token builtin class-name">cd</span> -                  <span class="token comment"># 切换到上一个工作目录</span>
$ <span class="token builtin class-name">cd</span> ~user              <span class="token comment"># 切换到指定用户家目录</span>
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>                 <span class="token comment"># 切换到父目录</span>
$ <span class="token builtin class-name">cd</span> /usr/bin           <span class="token comment"># 切换到指定</span>

<span class="token comment"># touch : 新建文件|更新文件到当前时间</span>
$ <span class="token function">touch</span> <span class="token function">file</span>

<span class="token comment"># file : 确定文件类型</span>
$ <span class="token function">file</span> apple.png        <span class="token comment"># 打印文件类型信息</span>

<span class="token comment"># mkdir : 创建目录</span>
$ <span class="token function">mkdir</span> <span class="token builtin class-name">test</span>            <span class="token comment"># 创建目录</span>
$ <span class="token function">mkdir</span> <span class="token builtin class-name">test</span> develop    <span class="token comment"># 创建多个目录</span>

<span class="token comment"># rm : 删除文件|目录</span>
<span class="token comment"># -i(interactive): 提示用户确认 ; -r(recursive): 递归删除文件 ; -f: 忽视不存在文件 ; -v(verbose)：显示详细操作信息</span>
$ <span class="token function">rm</span> <span class="token function">file</span>               <span class="token comment"># 默默删除file</span>
$ <span class="token function">rm</span> <span class="token parameter variable">-i</span> <span class="token function">file</span>            <span class="token comment"># 删除file前,提示确认</span>
$ <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token function">file</span> <span class="token builtin class-name">test</span>      <span class="token comment"># 删除file1文件和test目录</span>

<span class="token comment"># rmdir : 删除目录(前提: 目录为空)</span>
$ <span class="token function">rmdir</span> <span class="token builtin class-name">test</span>            <span class="token comment"># 删除test目录</span>

<span class="token comment"># mv : 移动|重命名 文件|目录</span>
<span class="token comment"># -i: 提示用户确认 ; -u(update): 仅移动需要更新的文件 ; -v: 显示详细操作信息</span>
$ <span class="token function">mv</span> file1 file2        <span class="token comment"># 移动file1到file2，之后file1不再存在 [ file2存在: 重写file2内容 ； file2不存在: 创建file2(重命名)]</span>
$ <span class="token function">mv</span> <span class="token parameter variable">-i</span> file1 file2     <span class="token comment"># file2存在会提示是否重写 </span>
$ <span class="token function">mv</span> file1 file2 <span class="token builtin class-name">.</span>      <span class="token comment"># 移动file1和file2 到当前目录</span>

<span class="token comment"># cp : 复制文件|目录</span>
<span class="token comment"># -a: 包括复制属性(所有权&amp;权限) ; -i:提示用户确认 ; -r: 递归复制 ; -u: 仅复制更新的 ; -v: 显示详细信息</span>
$ <span class="token function">cp</span> file1 file2        <span class="token comment"># 拷贝file1内容到file2文件 [file2存在: file2中内容会被重写；file2不存在: 创建file2]</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-i</span> file1 file2     <span class="token comment"># file2存在时，会提示是否重写</span>
$ <span class="token function">cp</span> file1 file2 <span class="token builtin class-name">.</span>      <span class="token comment"># 拷贝file1和file2到当前目录</span>
$ <span class="token function">cp</span> test1/* test2      <span class="token comment"># 拷贝test1目录下所有文件到test2目录(目录必须存在)</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-rv</span> test1 test2    <span class="token comment"># 拷贝目录test1到目录test2中，并显示拷贝细节</span>

<span class="token comment"># ln : 创建硬链接|符号链接</span>
<span class="token comment"># 硬链接 : 关联文件(不能关联目录), 不能关联文件系统之外的文件(需要在同一磁盘分区)</span>
<span class="token comment"># 符号链接(软链接) : 类似\`windows\`快捷方式</span>
$ <span class="token function">ln</span> <span class="token function">file</span> <span class="token function">link</span>          <span class="token comment"># 创建硬链接(为file创建了一个link的硬链接)</span>
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token function">file</span> slink      <span class="token comment"># 创建符号链接(为file创建了一个slink的链接)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件查看" tabindex="-1"><a class="header-anchor" href="#文件查看" aria-hidden="true">#</a> 文件查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat : 读取文件(1|多个)</span>
$ <span class="token function">cat</span> <span class="token function">file</span>                      <span class="token comment"># 读取文件</span>
$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> <span class="token function">file</span>                   <span class="token comment"># 读取文件，并显示行号(空格也添加行号)</span>

<span class="token comment"># less : 浏览文件(前后浏览, more的改进版)</span>
<span class="token comment"># more : 浏览文件(只能向前)</span>
$ <span class="token function">less</span><span class="token operator">|</span><span class="token function">more</span> <span class="token function">file</span>                <span class="token comment"># 操作类似\`vi\`命令</span>

<span class="token comment"># head : 输出文件头部</span>
<span class="token comment"># tail : 输出文件尾部 [-f: 实时查看文件输出, 一般用于查看log日志输出]</span>
<span class="token comment"># 默认: 10行 ; -n: 指定输出行数  </span>
$ <span class="token function">head</span> server.log               <span class="token comment"># 显示log文件前10行</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> server.log        <span class="token comment"># 显示文件后100行</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-100</span> server.log          <span class="token comment"># 显示文件后100行</span>
$ <span class="token function">tail</span> <span class="token parameter variable">-f</span> server.log            <span class="token comment"># 实时查看log文件</span>

<span class="token comment"># sort : 排序文件内容</span>
$ <span class="token function">sort</span> sort.txt                 <span class="token comment"># 直接输出排序内容 </span>
$ <span class="token function">sort</span> sort.txt <span class="token parameter variable">-o</span> sort.out     <span class="token comment"># 将排序内容输出到sort.out文件</span>

<span class="token comment"># uniq : 去掉重复行(不过滤空格)</span>
$ <span class="token function">uniq</span> uniq.txt                 <span class="token comment"># 直接输出重内容</span>
$ <span class="token function">uniq</span> uniq.txt uniq.out        <span class="token comment"># 将去重内容输出到uniq.out文件</span>

<span class="token comment"># nl : 指定方式显示行号</span>
$ <span class="token function">nl</span> <span class="token function">file</span>                       <span class="token comment"># 空格不添加行号</span>
$ <span class="token function">nl</span> <span class="token parameter variable">-b</span> a <span class="token function">file</span>                  <span class="token comment"># == \`cat -n file\`</span>

<span class="token comment"># wc : 打印文件中的换行符、字和字节个数</span>
<span class="token comment"># -l : 限制命令输出只显示行数</span>
$ <span class="token function">wc</span> <span class="token function">file</span>
$ <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token function">file</span>                    <span class="token comment"># 查看文件的行数</span>

<span class="token comment"># diff : 比较两个文件不同的地方</span>
$ <span class="token function">diff</span> file1 file2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件权限" tabindex="-1"><a class="header-anchor" href="#文件权限" aria-hidden="true">#</a> 文件权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># chmod : 改变文件|目录访问权限</span>
<span class="token comment">#   -c: 当发生改变时，报告处理信息 </span>
<span class="token comment">#   -f: 错误信息不输出 </span>
<span class="token comment">#   -R: 递归处理目录所有文件 </span>
<span class="token comment">#   -v: 显示详细信息</span>
<span class="token comment"># 权限范围 =&gt; 文件所有者(u) | 同组用户(g) | 其他用户(o)  == 所有用户(a)</span>
<span class="token comment"># 权限代号 =&gt; r: 读(4) ; w: 写(2) ; x: 执行(1) ; -: 删除权限(0) ; s: 特殊权限</span>
<span class="token comment">#   1. 文字设定法</span>
$ <span class="token function">chmod</span> +r <span class="token function">file</span>             <span class="token comment"># 为所有用户增加 file 文件的读权限</span>
$ <span class="token function">chmod</span> a+x <span class="token function">file</span>            <span class="token comment"># 为所有用户增加 file 文件的可执行权限</span>
$ <span class="token function">chmod</span> ug+w,o-x <span class="token function">file</span>       <span class="token comment"># 同时修改不同用户权限</span>
$ <span class="token function">chmod</span> a-x <span class="token function">file</span>            <span class="token comment"># 删除可执行权限</span>
$ <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>x <span class="token function">file</span>            <span class="token comment"># 设置权限</span>
$ <span class="token function">chmod</span> <span class="token parameter variable">-R</span> u+x <span class="token function">dir</span>          <span class="token comment"># 设置dir目录及子目录下所有文件全新</span>
<span class="token comment">#   2. 数字设定法</span>
$ <span class="token function">chmod</span> <span class="token number">751</span> <span class="token function">file</span>            <span class="token comment"># 设置文件所有者(读、写、执行 = 7)，同组(读、执行 = 5)，其他(执行 = 1)</span>
<span class="token comment"># == \`chmod u=rwx,g=rx,o=x file\`</span>
$ <span class="token function">chmod</span> 000 <span class="token function">file</span>            <span class="token comment"># 删除权限</span>

<span class="token comment"># chgrp : 改变文件|目录的用户组</span>
<span class="token comment"># -R: 递归目录 ; -v: 显示详细信息</span>
$ <span class="token function">chgrp</span> group <span class="token function">file</span> <span class="token comment"># 改变为 file 文件的用户组</span>
$ <span class="token function">chgrp</span> <span class="token parameter variable">-R</span> group folders/ <span class="token comment"># 将 folders 目录及目录下所有文件改为 group 用户组</span>

<span class="token comment"># chown : 改变文件|目录的所有者(和用户组)</span>
<span class="token comment"># -R: 递归目录</span>
$ <span class="token function">chown</span> <span class="token builtin class-name">test</span> <span class="token function">file</span> <span class="token comment"># 改变 file 文件拥有者为 test 用户</span>
$ <span class="token function">chown</span> <span class="token parameter variable">-R</span> test:test folders/ <span class="token comment"># 改变 folders 文件夹内所有的拥有者和用户组为 test 用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># | : 管道线(从标准输入读取内容，再把数据输送到标准输出)</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr/bin <span class="token operator">|</span> <span class="token function">less</span>         <span class="token comment"># 使用less查看输出的内容 </span>

<span class="token comment"># grep : 用来查找文件中的匹配文本(配合使用)</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> python           <span class="token comment"># 列出当前目录匹配python的文件</span>
$ <span class="token function">grep</span> <span class="token string">&#39;[keyword]&#39;</span> <span class="token parameter variable">-A</span> <span class="token number">100</span> path/to/file <span class="token comment"># 查询文件指定关键字下文(After) 100 行</span>
$ <span class="token function">grep</span> <span class="token string">&#39;[keyword]&#39;</span> <span class="token parameter variable">-B</span> <span class="token number">100</span> path/to/file <span class="token comment"># 查询文件指定关键字上文(Before) 100 行</span>
$ <span class="token function">grep</span> <span class="token string">&#39;[keyword]&#39;</span> <span class="token parameter variable">-C</span> <span class="token number">100</span> path/to/file <span class="token comment"># 查询文件指定关键字上下文(Context) 100 行</span>

<span class="token comment"># tee : 从\`Stdin\`读取数据, 同时输出到\`Stdout\`和文件 (联合其它命令使用)</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr <span class="token operator">|</span> <span class="token function">tee</span> tee.txt      <span class="token comment"># 将Users内容同时输出到屏幕和文件</span>

<span class="token comment"># &gt; : 重定向标准输出</span>
<span class="token comment">#   &gt; : 重定向内容覆盖到目标文件</span>
<span class="token comment">#   &gt;&gt; : 重定向内容追加到目标文件</span>
<span class="token comment">#   2&gt; : 重定向错误信息到目标文件</span>
<span class="token comment">#   &amp;&gt; : 重定向标准输出&amp;错误信息到统一目标文件</span>
$ <span class="token function">ls</span> /usr <span class="token operator">&gt;</span> ls.txt              <span class="token comment"># 将目录下的内容，重定向到文件ls.txt</span>
$ <span class="token operator">&gt;</span> ls.txt                      <span class="token comment"># 技巧：清空文件ls.txt</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /Users <span class="token operator">&gt;&gt;</span> ls.txt        <span class="token comment"># 将重定向内容追加到ls.txt文件</span>
$ <span class="token function">ls</span> /xxx <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> error.txt          <span class="token comment"># 重定向标准错误 (No such file or directory)</span>
$ <span class="token function">ls</span> /Users /xx <span class="token operator">&amp;&gt;</span> all.txt      <span class="token comment"># 联合重定向</span>
$ ./start.sh <span class="token operator">&gt;&gt;</span> test.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>   <span class="token comment"># </span>

<span class="token comment"># &lt; : 重定向标准输入</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;</span> error.txt               <span class="token comment"># 将error.txt文件内容输出到屏幕</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># which : 显示一个可执行程序的位置 </span>
$ <span class="token function">which</span> /usr/bin <span class="token operator">|</span> <span class="token function">grep</span> python

<span class="token comment"># find : 在指定目录查找文件</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span>                        <span class="token comment"># 查找当前目录所有文件</span>
$ <span class="token function">find</span> /usr <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span>       <span class="token comment"># 查找后缀为.txt的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包-解包-压缩-解压" tabindex="-1"><a class="header-anchor" href="#打包-解包-压缩-解压" aria-hidden="true">#</a> 打包(解包) &amp; 压缩(解压)</h3><ul><li><strong>打包</strong> : 将多个文件打包成一个大文件</li><li><strong>压缩</strong> : 将一个大文件通过压缩算法变成一个小文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tar : 打包工具</span>
<span class="token comment"># -c(create): 打包文件 ; x(extract): 解包 ; f: 指定打包文件 ; v: 显示执行过程</span>
$ <span class="token function">tar</span> cvf file.tar <span class="token function">dir</span>  <span class="token comment"># 打包</span>
$ <span class="token function">tar</span> xvf file.tar      <span class="token comment"># 解包</span>

<span class="token comment"># rar : 压缩工具</span>
$ <span class="token function">rar</span> a file.rar        <span class="token comment"># 压缩</span>
$ <span class="token function">rar</span> x file.rar        <span class="token comment"># 解压</span>

<span class="token comment"># gzip : 压缩工具(后缀: .gz)</span>
<span class="token comment"># -r: 递归 ; -d: 解压 ; -v: 显示详细信息</span>
$ <span class="token function">gzip</span> <span class="token function">file</span>             <span class="token comment"># 压缩指定文件</span>
$ <span class="token function">gzip</span> <span class="token parameter variable">-d</span> <span class="token function">file</span>          <span class="token comment"># 解压文件</span>
$ <span class="token function">gzip</span> *                <span class="token comment"># 压缩当前目录每一个文件</span>
$ <span class="token function">gzip</span> <span class="token parameter variable">-r</span> *             <span class="token comment"># 递归压缩当前目录及子目录每一个文件</span>
$ <span class="token function">gzip</span> <span class="token parameter variable">-d</span> *             <span class="token comment"># 解压当前目录每一个文件</span>

<span class="token comment"># zip</span>
$ <span class="token function">zip</span> <span class="token parameter variable">-er</span> file.zip folder/  <span class="token comment"># 递归压缩文件夹，并加密</span>
$ <span class="token function">unzip</span> file.zip            <span class="token comment"># 解压文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="磁盘存储" tabindex="-1"><a class="header-anchor" href="#磁盘存储" aria-hidden="true">#</a> 磁盘存储</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂载硬盘</span>
$ <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>              <span class="token comment"># 查看硬盘名称</span>
$ mkfs.ext4 /dev/sdb    <span class="token comment"># 首次挂载需要格式化硬盘【高危操作：仅首次需要】</span>
$ <span class="token function">mount</span> /dev/sdb /opt   <span class="token comment"># 将 \`/dev/sdb\` 硬盘挂载到 \`/opt\` 下</span>
$ <span class="token function">vim</span> /etc/fstab        <span class="token comment"># 修改 fstab 启动自动挂载 \`/dev/sdb  /opt  ext4  defaults  0  0\`</span>
$ <span class="token function">mount</span> <span class="token parameter variable">-a</span>              <span class="token comment"># 执行 fstab 中挂载 (用于检查 fstab 是否修改正确)</span>
$ ll /dev/disk/by-uuid/ <span class="token comment"># 查看所有分区 UUID</span>
$ blkid                 <span class="token comment"># 显示所有分区 UUID</span>
$ blkid /dev/sda1       <span class="token comment"># 查看特定分区 UUID (UUID 挂载 \`/dev/sdb  /opt  ext4  defaults  0  0\`)</span>

<span class="token comment"># df : 统计文件系统可以空间和使用情况</span>
$ <span class="token function">df</span> <span class="token parameter variable">-h</span>         <span class="token comment"># 查看磁盘各分区大小、已用空间</span>

<span class="token comment"># du(disk usage) : 查看文件或文件夹的磁盘占用空间</span>
$ <span class="token function">du</span>                <span class="token comment"># 显示当前目录占用空间</span>
$ <span class="token function">du</span> folder         <span class="token comment"># 显示指定文件夹(包括子文件夹)占用空间</span>
$ <span class="token function">du</span> <span class="token parameter variable">-h</span> folder      <span class="token comment"># 使用友好方式显示占用空间</span>
$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> folder     <span class="token comment"># 只显示输入文件夹(不显示子文件夹)占用空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内存监控" tabindex="-1"><a class="header-anchor" href="#内存监控" aria-hidden="true">#</a> 内存监控</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># top : 实时动态地查看系统的整体运行情况</span>
$ <span class="token function">top</span>

<span class="token comment"># free : 显示空闲的内存数量</span>
$ <span class="token function">free</span>

<span class="token comment"># vmstat : 显示虚拟内存状态</span>
$ <span class="token function">vmstat</span>

<span class="token comment"># iostat : 监视系统输入输出设备 &amp; CPU的使用情况</span>
$ iostat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ps : 查看进程号</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-A</span>                     <span class="token comment"># 显示所有进程信息</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-u</span> root                <span class="token comment"># 显示指定用户信息</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span>                    <span class="token comment"># 显示所有进程信息，连同命令行</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>         <span class="token comment"># 查找特定进程</span>

<span class="token comment"># lsof : 查看进程打开的文件(或端口)</span>
$ <span class="token function">lsof</span> <span class="token parameter variable">-i:8080</span>              <span class="token comment"># 查看端口为 8080 的进程</span>

<span class="token comment"># kill : 杀死进程</span>
$ <span class="token function">kill</span> <span class="token number">180201</span>               <span class="token comment"># 杀死指定端口进程</span>
$ <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">19468</span>             <span class="token comment"># 彻底杀死进程</span>

<span class="token comment"># nohup : 不挂断地(no hangup)运行命令并输出日志到 nohup.out，忽略 SIGHUG [挂起信号 : 关闭终端]</span>
<span class="token comment"># &amp; : 后台运行，忽略 SIGINT [中断信号 :Ctrl + C]</span>
$ <span class="token function">nohup</span> ./service.sh         <span class="token comment"># Ctrl + C 停止运行，关闭终端不停止运行</span>
$ ./service.sh <span class="token operator">&amp;</span>             <span class="token comment"># Ctrl + C 不停止运行，关闭终端停止运行</span>
$ <span class="token function">nohup</span> ./service.sh <span class="token operator">&amp;</span>       <span class="token comment"># Ctrl + C 不停止运行，关闭终端不停止运行</span>
$ <span class="token function">nohup</span> ./service.sh <span class="token operator">&gt;</span> service.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span> <span class="token comment"># 后台启动服务，将标准错误 2 重定向到标准输出 &amp;1 ，标准输出 &amp;1 再被重定向输入到 service.log 文件中</span>

<span class="token comment"># jobs [ctrl+z 挂起运行的进程 (ctrl+c : 结束当前任务)]</span>
$ <span class="token function">jobs</span>          <span class="token comment"># 查看任务(任务编号 &amp; 进程号)</span>
$ <span class="token function">bg</span> %n         <span class="token comment"># 将编号为 n 的任务转到后台运行</span>
$ <span class="token function">fg</span> %n         <span class="token comment"># 将编号为 n 的任务转到前台运行</span>

<span class="token comment"># crontab : 定时任务 </span>
$ <span class="token function">crontab</span> <span class="token parameter variable">-l</span>                <span class="token comment"># 显示定时任务列表</span>
$ <span class="token function">crontab</span> <span class="token function">file</span>              <span class="token comment"># 启动定时任务</span>

<span class="token comment"># at : 在指定的时间执行任务</span>
$ at 

<span class="token comment"># watch : 周期性的执行执行</span>
<span class="token comment"># -n: 周期性间隔时间 ; -d: 高亮显示输出信息变化的地方 ; -t: 不显示标题</span>
$ <span class="token function">watch</span> <span class="token function">uptime</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ip </span>
$ <span class="token function">ip</span> addr <span class="token comment"># 查看网卡 IP 信息</span>

<span class="token comment"># ifconfig : 配置|显示网卡的网络参数</span>
$ <span class="token function">ifconfig</span>                      <span class="token comment"># 显示网络配置信息</span>
$ <span class="token function">ifconfig</span> eth0 up              <span class="token comment"># 启动eth0网卡</span>
$ <span class="token function">ifconfig</span> eth0 down            <span class="token comment"># 关闭eth0网卡</span>
$ <span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.1.100   <span class="token comment"># 配置ip</span>
$ <span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.2.10 netmask <span class="token number">255.255</span>.255.0 broadcast <span class="token number">192.168</span>.2.255

<span class="token comment"># ping : 测试主机网络连通性</span>
$ <span class="token function">ping</span> www.baidu.com

<span class="token comment"># curl(command line URL viewer) : 命令行工具，发送网络请求，得到数据</span>
$ <span class="token function">curl</span> www.baidu.com                            <span class="token comment"># 获取网页源码</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-o</span> baidu.html www.baidu.com              <span class="token comment"># 下载网页源码到文件</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-i</span> www.baidu.com                         <span class="token comment"># 显示 http response</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> www.baidu.com                         <span class="token comment"># 显示整个通信过程</span>
$ <span class="token function">curl</span> www.baidu.com?q<span class="token operator">=</span>curl                     <span class="token comment"># 发送表单请求(GET)</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;q=curl&#39;</span> www.baidu.com    <span class="token comment"># 发送POST请求</span>

<span class="token comment"># route : 显示网络路由表</span>

<span class="token comment"># traceroute : 追踪数据包在网络上的传输时的全部路径</span>
$ <span class="token function">traceroute</span> www.baidu.com

<span class="token comment"># netstat : 显示网络连接信息</span>
$ <span class="token function">netstat</span>       
$ <span class="token function">netstat</span> <span class="token parameter variable">-a</span>                <span class="token comment"># 列出所有端口</span>
$ <span class="token function">netstat</span> <span class="token parameter variable">-l</span>                <span class="token comment"># 只显示监听端口</span>
$ <span class="token function">netstat</span> <span class="token parameter variable">-anp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token punctuation">[</span>pid<span class="token punctuation">]</span> <span class="token comment"># 显示特定进程的监听端口</span>

<span class="token comment"># ss : 显示处于活动状态的套接字信息</span>
<span class="token comment"># -t: 只显示tcp ; -u: 只显示udp ; -a: 显示所有; -l: 处于监听状态的套接字</span>
$ ss <span class="token parameter variable">-al</span>       

<span class="token comment"># ssh : 登录远程主机(安全)</span>
$ <span class="token function">ssh</span> root@ip
$ <span class="token function">vi</span> /etc/ssh/sshd_config       <span class="token comment"># ssh 配置</span>

<span class="token comment"># telent : </span>
$ telent <span class="token function">ip</span> port    <span class="token comment"># 测试主机特定端口是否可通讯</span>

<span class="token comment"># scp(secure copy) : 远程拷贝</span>
<span class="token comment"># -r : 递归复制整个目录 ; </span>
$ <span class="token function">scp</span> /path/file user@remote_ip:/path/          <span class="token comment"># 拷贝本地到远程服务器</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> /path/folder user@remote_ip:/path/     <span class="token comment"># 拷贝本地目录到远程服务</span>
$ <span class="token function">scp</span> user@remote_ip:/path/file /path/          <span class="token comment"># 拷贝远程文件到本地</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-r</span> user@remote_ip:/path/folder /path/     <span class="token comment"># 拷贝远程目录到本地</span>

<span class="token comment"># rcp : 通过配置可以在两台主机上无密码拷贝文件</span>

<span class="token comment"># nslookup : </span>
$ <span class="token function">nslookup</span> <span class="token parameter variable">-type</span><span class="token operator">=</span>NS <span class="token punctuation">[</span>domain.com<span class="token punctuation">]</span> <span class="token comment"># 查询域名的域名服务器</span>
$ <span class="token function">nslookup</span> <span class="token parameter variable">-type</span><span class="token operator">=</span>TXT xxx.com <span class="token punctuation">[</span>name.server.com<span class="token punctuation">]</span>      <span class="token comment"># 查询 TXT 记录是否正确</span>
$ <span class="token function">nslookup</span> <span class="token parameter variable">-type</span><span class="token operator">=</span>MX <span class="token punctuation">[</span>domain.com<span class="token punctuation">]</span> <span class="token punctuation">[</span>name.server.com<span class="token punctuation">]</span>  <span class="token comment"># 查询 MX 记录是否正确</span>

<span class="token comment"># iptables</span>
$ iptables status   <span class="token comment"># 查看状态</span>
<span class="token comment"># 防火墙打开关闭</span>
<span class="token variable">$sudo</span> <span class="token function">service</span> iptables stop     <span class="token comment"># 暂时关闭</span>
<span class="token variable">$sudo</span> <span class="token function">service</span> iptables start    <span class="token comment"># 暂时打开</span>
<span class="token variable">$sudo</span> <span class="token function">chkconfig</span> iptables on     <span class="token comment"># 永久打开</span>
<span class="token variable">$sudo</span> <span class="token function">chkconfig</span> iptables off    <span class="token comment"># 永久关闭</span>

<span class="token comment"># ufw : Firewalls 防火墙</span>
$ <span class="token function">apt</span> <span class="token function">install</span> ufw <span class="token comment"># 安装 ufw</span>
$ ufw status    <span class="token comment"># 防火墙状态</span>
$ ufw version   <span class="token comment"># 版本</span>
$ ufw <span class="token builtin class-name">enable</span>    <span class="token comment"># 开启</span>
$ ufw disable   <span class="token comment"># 关闭</span>
<span class="token comment"># 默认规则 : ufw default [allow | deny]</span>
$ ufw default allow <span class="token comment"># 默认允许所有访问</span>
$ ufw default deny  <span class="token comment"># 默认禁止所有访问</span>
<span class="token comment"># 允许 : ufw allow [service]</span>
$ ufw allow smtp    <span class="token comment"># 允许 smtp 服务 (25/tcp 端口) [== ufw allow 25/tcp]</span>
$ ufw allow <span class="token number">22</span>/tcp  <span class="token comment"># 允许 22/tcp 端口 (ssh 服务) [== ufw allow ssh]</span>
$ ufw allow <span class="token number">8080</span>    <span class="token comment"># 允许 8080 tcp/udp 端口</span>
$ ufw allow from <span class="token number">192.168</span>.1.110 <span class="token comment"># 允许特定 ip 访问</span>
<span class="token comment"># 否认</span>
<span class="token comment"># 拒绝 : 否认访问，通知对方机器已被拒绝</span>
<span class="token comment"># 限制 : </span>
<span class="token comment"># 禁用 : ufw deny [service]</span>
$ ufw deny smtp     <span class="token comment"># 禁用 smtp 服务 </span>
<span class="token comment"># 删除 : ufw delete xxx</span>
$ ufw delete allow <span class="token number">8080</span> <span class="token comment"># 删除允许规则 </span>
$ ufw delete deny smtp  <span class="token comment"># 删除禁用规则</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统相关" tabindex="-1"><a class="header-anchor" href="#系统相关" aria-hidden="true">#</a> 系统相关</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/issue        <span class="token comment"># 查看版本号</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>              <span class="token comment"># 查看内核版本号</span>
$ <span class="token function">sudo</span> <span class="token function">passwd</span> root      <span class="token comment"># 修改密码</span>

<span class="token comment"># 修改 hostname</span>
<span class="token comment">#  方案一 : 临时修改，重启失效</span>
$ <span class="token function">hostname</span>          <span class="token comment"># 查看 hostname</span>
$ <span class="token function">hostname</span> XX       <span class="token comment"># 修改 hostname</span>
<span class="token comment">#  方案二 : 临时生效，重启失效</span>
$ <span class="token function">sysctl</span> kernel.hostname        <span class="token comment"># 查看内核 hostname</span>
$ <span class="token function">sysctl</span> <span class="token assign-left variable">kernel.hostname</span><span class="token operator">=</span>XX     <span class="token comment"># 修改内核 hostname</span>
<span class="token comment">#  方案二 : 永久有效，重启生效</span>
$ <span class="token function">vi</span> /etc/hostname              <span class="token comment"># 修改 hostname (deb/ubuntu)</span>
$ <span class="token function">vim</span> /etc/sysconifg/network    <span class="token comment"># 修改 \`HOSTNAME=xxx\` (redhat/centos)</span>

<span class="token comment"># locale : 查看系统编码</span>
$ locale
$ <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>            <span class="token comment"># 临时修改系统变量\`LANG\`</span>

<span class="token comment"># export : 将shell变量输出为环境变量</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>     <span class="token comment"># 修改系统变量\`LANG\`</span>
<span class="token comment">#  设置代理</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks://proxy-url:port       <span class="token comment"># 设置代理地址</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">SOCKS5_PROXY</span><span class="token operator">=</span>socks://proxy-url:port    <span class="token comment"># 设置 socks5 代理</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://proxy-url:port       <span class="token comment"># 设置 http 代理</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>https://proxy-url:port     <span class="token comment"># 设置 https 代理</span>

<span class="token comment"># echo : 显示一行文本</span>
<span class="token comment"># \`$((expression))\` : 算术表达式 (+、-、*、/、%、**(取幂))</span>
<span class="token comment"># $NAME : 系统变量</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello world&#39;</span>            <span class="token comment"># 输出hello world</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token variable">$((</span><span class="token number">5</span><span class="token operator">**</span><span class="token number">2</span><span class="token variable">))</span></span> + <span class="token number">3</span><span class="token punctuation">))</span>       <span class="token comment"># 算术表达式 : 5*5 + 3 = 28</span>
$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$LANG</span>                    <span class="token comment"># 查看系统变量\`LANG\`</span>

<span class="token comment"># date : 显示系统当前时间和日期</span>
$ <span class="token function">date</span>

<span class="token comment"># cal : 显示系统当前月份的日历</span>
$ <span class="token function">cal</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function k(b,f){const a=i("ExternalLinkIcon");return c(),t("div",null,[p(" more "),d,n("ul",null,[n("li",null,[n("a",r,[s("鸟哥 Linux 命令大全"),e(a)])]),n("li",null,[n("a",v,[s("cron 表达式"),e(a)])])]),u])}const g=l(m,[["render",k],["__file","0x01.command.html.vue"]]);export{g as default};
