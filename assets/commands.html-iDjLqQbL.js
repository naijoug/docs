import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as o,a as t,b as n,e as s,d as l,f as p}from"./app-fqDzxcod.js";const d={},m=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),r={href:"http://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},u=p(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token parameter variable">-h</span>
<span class="token comment">#   &gt; 查看 docker 帮助信息</span>
$ <span class="token function">docker</span> COMMAND <span class="token parameter variable">--help</span> 
<span class="token comment">#   &gt; 查看指定命令帮助信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> deploy
<span class="token comment"># docker deploy [OPTIONS] STACK      </span>
<span class="token comment">#   &gt; Deploy a new stack or update an existing stack</span>
$ <span class="token function">docker</span> images 
<span class="token comment"># docker images [OPTIONS] [REPOSITORY[:TAG]]     </span>
<span class="token comment">#   &gt; 显示镜像列表 (== docker image ls)</span>
$ <span class="token function">docker</span> inspect ubuntu     <span class="token comment"># 查看 ubuntu 镜像详细信息</span>
$ <span class="token function">docker</span> inspect myubuntu   <span class="token comment"># 查看 myubuntu 容器详细信息</span>
<span class="token comment"># docker inspect [OPTIONS] NAME|ID [NAME|ID...] [flags]   </span>
<span class="token comment">#   &gt; 显示 Docker 对象(镜像、容器...)详细信息</span>
$ <span class="token function">docker</span> login <span class="token parameter variable">-u</span> xxx <span class="token parameter variable">-p</span> xxx
<span class="token comment"># docker login [OPTIONS] [SERVER]       </span>
<span class="token comment">#   &gt; 登录 Docker 镜像仓库</span>
<span class="token comment">#       -u          : 登陆的用户名</span>
<span class="token comment">#       -p          : 登陆的密码</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">logout</span> 
<span class="token comment"># docker logout [SERVER]      </span>
<span class="token comment">#   &gt; 注销 Docker 镜像仓库</span>
$ <span class="token function">docker</span> <span class="token function">ps</span>     <span class="token comment"># 显示运行的容器列表</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-l</span>  <span class="token comment"># 显示最后一次运行的容器信息(无论是否运行)</span>
<span class="token comment"># docker ps [OPTIONS]          </span>
<span class="token comment">#   &gt; 显示容器列表 (== docker container ls)</span>
<span class="token comment">#       -l : 显示最后一次运行的容器信息</span>
$ <span class="token function">docker</span> rmi
<span class="token comment"># docker rmi [OPTIONS] IMAGE [IMAGE...]         </span>
<span class="token comment">#   &gt; 删除(多个)镜像 (== docker image rm)</span>
$ <span class="token function">docker</span> search <span class="token parameter variable">-s</span> <span class="token number">10</span> <span class="token function">java</span> <span class="token comment"># 搜索镜像名包含java，并且收藏数大于10的镜像</span>
<span class="token comment"># docker search [OPTIONS] TERM      </span>
<span class="token comment">#   &gt; 从 Docker Hub 搜索镜像</span>
<span class="token comment">#       --automated : 只列出 automated build类型的镜像</span>
<span class="token comment">#       --no-trunc  : 显示完整的镜像描述</span>
<span class="token comment">#       -s          : 列出收藏数不小于指定值的镜像</span>
$ <span class="token function">docker</span> version     
<span class="token comment"># docker version [OPTIONS]</span>
<span class="token comment">#   &gt; 显示 Docker 版本信息</span>
<span class="token comment">#       -f : </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="management" tabindex="-1"><a class="header-anchor" href="#management" aria-hidden="true">#</a> Management</h2><h3 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint" aria-hidden="true">#</a> checkpoint</h3><blockquote><p><code>docker checkpoint COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> checkpoint create 
<span class="token comment"># docker checkpoint create [OPTIONS] CONTAINER CHECKPOINT      </span>
<span class="token comment">#   &gt; Create a checkpoint from a running container</span>
$ <span class="token function">docker</span> checkpoint <span class="token function">ls</span> 
<span class="token comment"># docker checkpoint ls [OPTIONS] CONTAINER         </span>
<span class="token comment">#   &gt; List checkpoints for a container</span>
$ <span class="token function">docker</span> checkpoint <span class="token function">rm</span> 
<span class="token comment"># docker checkpoint rm [OPTIONS] CONTAINER CHECKPOINT          </span>
<span class="token comment">#   &gt; Remove a checkpoint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><blockquote><p><code>docker config COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> config create 
<span class="token comment"># docker config create [OPTIONS] CONFIG file|-      </span>
<span class="token comment">#   &gt; Create a config from a file or STDIN</span>
$ <span class="token function">docker</span> config inspect 
<span class="token comment"># docker config inspect [OPTIONS] CONFIG [CONFIG...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more configs</span>
$ <span class="token function">docker</span> config <span class="token function">ls</span> 
<span class="token comment"># docker config ls [OPTIONS]          </span>
<span class="token comment">#   &gt; List configs</span>
$ <span class="token function">docker</span> config <span class="token function">rm</span> 
<span class="token comment"># docker config rm CONFIG [CONFIG...]          </span>
<span class="token comment">#   &gt; Remove one or more configs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h3><blockquote><p><code>docker [container] COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> attach --sig-proxy<span class="token operator">=</span>false mynginx
<span class="token comment"># docker [container] attach [OPTIONS] CONTAINER      </span>
<span class="token comment">#   &gt; 将本地标准输入，输出和错误流附加到正在运行的容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&#39;ng&#39;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;add test.txt&#39;</span> myubuntu ng/ubuntu:v1 <span class="token comment"># 根据 myubuntu 容器创建新的镜像</span>
<span class="token comment"># docker [container] commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]      </span>
<span class="token comment">#   &gt; 根据容器更改，创建一个新镜像</span>
<span class="token comment">#       -a          : 提交的镜像作者</span>
<span class="token comment">#       -c          : 使用 Dockerfile 指令来创建镜像</span>
<span class="token comment">#       -m          : 提交时的说明文字</span>
<span class="token comment">#       -p          : 在commit时，将容器暂停</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">cp</span> ~/web/index.html mynginx:/web/  <span class="token comment"># 拷贝本机文件 index.html 到 mynginx 容器</span>
<span class="token comment"># docker [container] cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-</span>
<span class="token comment"># docker [container] cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH          </span>
<span class="token comment">#   &gt; 在本地文件系统和容器之间拷贝文件或文件夹</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> create <span class="token parameter variable">--name</span> mynginx  nginx:latest <span class="token comment"># 创建一个名为 mynginx 的容器</span>
<span class="token comment"># docker [container] create [OPTIONS] IMAGE [COMMAND] [ARG...]      </span>
<span class="token comment">#   &gt; 创建一个新容器，但不启动</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">diff</span> mynginx   <span class="token comment"># 查看容器 mynginx 文件系统更改</span>
<span class="token comment"># docker [container] diff CONTAINER        </span>
<span class="token comment">#   &gt; 检测容器文件系统中文件或目录的更改</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mynginx /bin/bash                 <span class="token comment"># 以交互模式运行容器终端</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mynginx /bin/sh /root/server.sh   <span class="token comment"># 以交互模式运行容器中的脚本</span>
<span class="token comment"># docker [container] exec [OPTIONS] CONTAINER COMMAND [ARG...]        </span>
<span class="token comment">#   &gt; 在一个已经运行的容器，执行一个命令</span>
<span class="token comment">#       -d          : 分离模式: 在后台运行</span>
<span class="token comment">#       -i          : 即使没有附加也保持 STDIN 打开</span>
<span class="token comment">#       -t          : 分配一个伪终端</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">-o</span> mynginx-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>.tar mynginx <span class="token comment"># 将容器打成按日期命名的 tar 压缩包</span>
<span class="token comment"># docker [container] export [OPTIONS] CONTAINER      </span>
<span class="token comment">#   &gt; 将容器系统文件导出为一个 tar 压缩包</span>
<span class="token comment">#       -o          : 将输入内容写到文件</span>
$ <span class="token function">docker</span> container inspect
<span class="token comment"># docker container inspect [OPTIONS] CONTAINER [CONTAINER...]     </span>
<span class="token comment">#   &gt; 显示(多个)容器的详细信息</span>
<span class="token comment">#       -f          : 指定返回值的模板文件。</span>
<span class="token comment">#       -s          : 显示总的文件大小。</span>
<span class="token comment">#       --type      : 为指定类型返回JSON</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">kill</span> <span class="token parameter variable">-s</span> KILL mynginx <span class="token comment"># 杀掉运行中的容器 mynginx</span>
<span class="token comment"># docker [container] kill [OPTIONS] CONTAINER [CONTAINER...]       </span>
<span class="token comment">#   &gt; 终止(多个)容器</span>
<span class="token comment">#       -s          : 向容器发送一个信号</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> logs <span class="token parameter variable">-tail</span> <span class="token number">100</span> <span class="token builtin class-name">test</span>    <span class="token comment"># 显示 test 容器，最新的100条日志</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> logs <span class="token parameter variable">-f</span> <span class="token builtin class-name">test</span>           <span class="token comment"># 跟踪显示 test 容器日志</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> logs <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2018-01-01&quot;</span> <span class="token parameter variable">--tail</span><span class="token operator">=</span><span class="token number">10</span> <span class="token builtin class-name">test</span> <span class="token comment"># 显示从 2018-01-01 后的最新10条日志</span>
<span class="token comment"># docker [container] logs [OPTIONS] CONTAINER</span>
<span class="token comment">#   &gt; 获取容器的日志</span>
<span class="token comment">#       --since     : 显示日志的时间起点 (eg : 2013-01-02T13:23:37)</span>
<span class="token comment">#       --tail      : 显示最新的 n 条日志</span>
<span class="token comment">#       -t          : 显示时间戳</span>
<span class="token comment">#       -f          : 跟踪日志输出</span>
$ <span class="token function">docker</span> container <span class="token function">ls</span>       <span class="token comment"># 显示所有正在运行的容器</span>
$ <span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-a</span>    <span class="token comment"># 显示所有容器(包括未运行的)</span>
$ <span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-aq</span>   <span class="token comment"># 显示所有容器(包括未运行的)的ID</span>
$ <span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-n</span> <span class="token number">5</span>  <span class="token comment"># 显示最近创建的 5 个容器</span>
<span class="token comment"># docker container ls [OPTIONS]          </span>
<span class="token comment">#   &gt; 显示容器列表</span>
<span class="token comment">#       -a          : 显示所有容器(默认: 只显示运行的容器)</span>
<span class="token comment">#       -f          : 根据条件过滤显示的内容</span>
<span class="token comment">#       --format    : 指定返回值的模板文件</span>
<span class="token comment">#       -l          : 显示最近创建的容器</span>
<span class="token comment">#       -n          : 列出最近创建的n个容器</span>
<span class="token comment">#       --no-trunc  : 不截断输出</span>
<span class="token comment">#       -q          : 静默模式，只显示容器编号</span>
<span class="token comment">#       -s          : 显示总的文件大小</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> pause db01 <span class="token comment"># 暂停数据库容器db01提供服务</span>
<span class="token comment"># docker [container] pause CONTAINER [CONTAINER...]      </span>
<span class="token comment">#   &gt; 暂停(多个)容器中的所有进程</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> port mynginx <span class="token comment"># 查看容器 mynginx 端口映射信息</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> port mynginx <span class="token number">80</span> <span class="token comment"># 查看容器 mynginx 80 端口映射主机的信息</span>
<span class="token comment"># docker [container] port CONTAINER [PRIVATE_PORT[/PROTO]]       </span>
<span class="token comment">#   &gt; 显示一个容器的端口映射列表</span>
$ <span class="token function">docker</span> container prune
<span class="token comment"># docker container prune [OPTIONS]       </span>
<span class="token comment">#   &gt; 删除所有已经停止的容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">rename</span> 73a09ca1bfef myubuntu <span class="token comment"># 重命名容器名字为 myubuntu </span>
<span class="token comment"># docker [container] rename CONTAINER NEW_NAME     </span>
<span class="token comment">#   &gt; 重命名一个容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> restart 
<span class="token comment"># docker [container] restart [OPTIONS] CONTAINER [CONTAINER...]    </span>
<span class="token comment">#   &gt; 重启(多个)容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> db01 db02    <span class="token comment"># 强制删除容器 db1、db2</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">rm</span> <span class="token parameter variable">-l</span> db           <span class="token comment"># 移除容器 nginx01 对容器 db01 的连接，连接名 db</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">rm</span> <span class="token parameter variable">-v</span> nginx01      <span class="token comment"># 删除容器 nginx01, 并删除容器挂载的数据卷</span>
<span class="token comment"># docker [container] rm [OPTIONS] CONTAINER [CONTAINER...]       </span>
<span class="token comment">#   &gt; 删除(多个)容器，容器必须停止</span>
<span class="token comment">#       -f          : 通过SIGKILL信号强制删除一个运行中的容器</span>
<span class="token comment">#       -l          : 移除容器间的网络连接，而非容器本身</span>
<span class="token comment">#       -v          : 删除与容器关联的卷</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> run ubuntu /bin/echo <span class="token string">&quot;hello world&quot;</span>         <span class="token comment"># 启动 ubuntu 镜像的容器，并运行 echo 命令输出 &quot;hello world&quot;</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> run <span class="token parameter variable">--name</span> mynginx <span class="token parameter variable">-d</span> nginx:latest         <span class="token comment"># 后台启动 docker 镜像 nginx:latest 的容器，并命名为 mynginx</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> ubuntu:16.04 /bin/bash        <span class="token comment"># 启动 ubuntu:16.04 镜像的容器，并执行容器 bash 命令</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> run <span class="token parameter variable">-p</span> <span class="token number">127.0</span>.0.1:80:8080/tcp ubuntu <span class="token function">bash</span>   <span class="token comment"># 容器 8080 端口映射本机 80 端口</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">-v</span> /docker/data:/data <span class="token parameter variable">-d</span> nginx:latest <span class="token comment"># 后台启动容器，容器 80 端口映射本机 8080 端口，容器 /data 映射本机 /docker/data</span>
<span class="token comment"># docker [container] run [OPTIONS] IMAGE [COMMAND] [ARG...]</span>
<span class="token comment">#   &gt; 创建一个新的容器，并运行一个命令</span>
<span class="token comment">#       -a stdin        : 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项</span>
<span class="token comment">#       -d              : 后台模式启动，返回容器ID</span>
<span class="token comment">#       -i              : 交互式操作运行容器，通常与 -t 同时使用</span>
<span class="token comment">#       -p              : 端口映射，格式为：主机(宿主)端口:容器端口</span>
<span class="token comment">#       -P              : 端口映射，将容器网络端口映射到主机主机随机端口</span>
<span class="token comment">#       -t              : 为容器重新分配一个伪输入终端，通常与 -i 同时使用</span>
<span class="token comment">#       --name=&quot;cname&quot;  : 为容器指定一个名称</span>
<span class="token comment">#       --dns 8.8.8.8   : 指定容器使用的DNS服务器，默认和宿主一致</span>
<span class="token comment">#       -h &quot;hostname&quot;   : 指定容器的hostname</span>
<span class="token comment">#       --env-file=[]   : 从指定文件读入环境变量</span>
<span class="token comment">#       -m              : 设置容器使用内存最大值</span>
<span class="token comment">#       --net=&quot;bridge&quot;  : 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型</span>
<span class="token comment">#       --link=[]       : 添加链接到另一个容器</span>
<span class="token comment">#       --expose=[]     : 开放一个端口或一组端口</span>
<span class="token comment">#       --rm            : 退出容器后将其删除</span>
<span class="token comment">#       -v              : 容器磁盘映射，格式为：主机目录路径:容器目录路径</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> start 
<span class="token comment"># docker [container] start [OPTIONS] CONTAINER [CONTAINER...]    </span>
<span class="token comment">#   &gt; 启动已停止的(多个)容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> stats 
<span class="token comment"># docker [container] stats [OPTIONS] [CONTAINER...]       </span>
<span class="token comment">#   &gt; 显示(多个)容器资源使用统计信息</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> stop 
<span class="token comment"># docker [container] stop [OPTIONS] CONTAINER [CONTAINER...]        </span>
<span class="token comment">#   &gt; 停止正在运行的(多个)容器</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">top</span> mynginx <span class="token comment"># 显示容器 mynginx 正在运行的进程</span>
<span class="token comment"># docker [container] top CONTAINER [ps OPTIONS]         </span>
<span class="token comment">#   &gt; 显示一个容器的运行进程</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> unpause db01 <span class="token comment"># 恢复数据库容器db01提供服务</span>
<span class="token comment"># docker [container] unpause CONTAINER [CONTAINER...]     </span>
<span class="token comment">#   &gt; 暂停(多个)容器的所有进程</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> update 
<span class="token comment"># docker [container] update [OPTIONS] CONTAINER [CONTAINER...]      </span>
<span class="token comment">#   &gt; 更新(多个)容器的配置</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token function">wait</span> myngix
<span class="token comment"># docker [container] wait CONTAINER [CONTAINER...]        </span>
<span class="token comment">#   &gt; 阻塞直到(多个)容器停止，打印退出代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><blockquote><p><code>docker [image] COMMAND</code> : 管理 Docker 镜像</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> build 
<span class="token comment"># docker [image] build [OPTIONS] PATH | URL | -       </span>
<span class="token comment">#   &gt; 根据 Dockerfile 创建一个镜像</span>
<span class="token comment">#       -t          : 创建的镜像名称，格式: name:tag</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> <span class="token function">history</span> 
<span class="token comment"># docker [image] history [OPTIONS] IMAGE     </span>
<span class="token comment">#   &gt; 查看一个镜像的历史信息</span>
<span class="token comment">#       -H          : 以可读的格式打印镜像大小和日期，默认为true；</span>
<span class="token comment">#       --no-trunc  : 显示完整的提交记录；</span>
<span class="token comment">#       -q          : 仅列出提交记录ID</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> <span class="token function">import</span> 
<span class="token comment"># docker [image] import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]      </span>
<span class="token comment">#   &gt; 从 tar 打包文件中创建镜像</span>
<span class="token comment">#       -c          : 应用docker 指令创建镜像；</span>
<span class="token comment">#       -m          : 提交时的说明文字</span>
$ <span class="token function">docker</span> image inspect ubuntu <span class="token comment"># 查看 ubuntu 镜像详细信息</span>
<span class="token comment"># docker image inspect [OPTIONS] IMAGE [IMAGE...]     </span>
<span class="token comment">#   &gt; 显示(多个)镜像详细信息</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> load 
<span class="token comment"># docker [image] load [OPTIONS]        </span>
<span class="token comment">#   &gt; Load an image from a tar archive or STDIN</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span>                       <span class="token comment"># 列出本地镜像(只有顶层镜像)</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span> <span class="token parameter variable">-a</span>                    <span class="token comment"># 列出所有本地镜像(包含中间层镜像)</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span> ubuntu                <span class="token comment"># 列出指定仓库镜像</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span> ubuntu:16.04          <span class="token comment"># 列出特定的某个镜像</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">dangling</span><span class="token operator">=</span>true      <span class="token comment"># 列出 dangling image (虚悬镜像)</span>
$ <span class="token function">docker</span> image <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">since</span><span class="token operator">=</span>mongo:3.2    <span class="token comment"># 列出 mongo:3.2 之后的建立的镜像</span>
<span class="token comment"># docker image ls [OPTIONS] [REPOSITORY[:TAG]]</span>
<span class="token comment">#   &gt; 列出镜像</span>
<span class="token comment">#       -a              : 列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）</span>
<span class="token comment">#       --digests       : 显示镜像的摘要信息</span>
<span class="token comment">#       -f,--filter     : 过滤器</span>
<span class="token comment">#       --format        : 指定返回值的模板文件</span>
<span class="token comment">#       --no-trunc      : 显示完整的镜像信息</span>
<span class="token comment">#       -q,--quiet      : 仅显示镜像 ID</span>
$ <span class="token function">docker</span> image prune 
<span class="token comment"># docker image prune [OPTIONS]       </span>
<span class="token comment">#   &gt; 删除所有未使用的镜像</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> pull ubuntu:16.04 <span class="token comment"># 下载 ubuntu 16.04 镜像</span>
<span class="token comment"># docker [image] pull [OPTIONS] NAME[:TAG|@DIGEST]</span>
<span class="token comment">#   &gt; 从镜像仓库下载一个指定镜像</span>
<span class="token comment">#       -a              : 拉取所有 tagged 镜像</span>
<span class="token comment">#       --disable-content-trust : 忽略镜像的校验,默认开启</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> push mynginx:v1 <span class="token comment"># 上传本地镜像 mynginx:v1</span>
<span class="token comment"># docker [image] push [OPTIONS] NAME[:TAG]        </span>
<span class="token comment">#   &gt; 将本地的镜像上传到镜像仓库 (前提 : 登陆到镜像仓库)</span>
$ <span class="token function">docker</span> image <span class="token function">rm</span> ubuntu:16.04 <span class="token comment"># 删除本地镜像 ubuntu:16.04</span>
<span class="token comment"># docker image rm [OPTIONS] IMAGE [IMAGE...]</span>
<span class="token comment">#   &gt; 删除(多个)镜像</span>
<span class="token comment">#       -f          : 强制删除；</span>
<span class="token comment">#       --no-prune  : 不移除该镜像的过程镜像，默认移除</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> save 
<span class="token comment"># docker [image] save [OPTIONS] IMAGE [IMAGE...]        </span>
<span class="token comment">#   &gt; 将(多个)镜像打包成 tar 文件</span>
<span class="token comment">#       -o          : 输出到的文件</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span> tag httpd ng/httpd:test 
<span class="token comment"># docker [image] tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]         </span>
<span class="token comment">#   &gt; 为本地镜像添加新的标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h3><blockquote><p><code>docker network COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> network connect 
<span class="token comment"># docker network connect [OPTIONS] NETWORK CONTAINER    </span>
<span class="token comment">#   &gt; Connect a container to a network</span>
$ <span class="token function">docker</span> network create 
<span class="token comment"># docker network create [OPTIONS] NETWORK     </span>
<span class="token comment">#   &gt; Create a network</span>
$ <span class="token function">docker</span> network disconnect 
<span class="token comment"># docker network disconnect [OPTIONS] NETWORK CONTAINER </span>
<span class="token comment">#   &gt; Disconnect a container from a network</span>
$ <span class="token function">docker</span> network inspect 
<span class="token comment"># docker network inspect [OPTIONS] NETWORK [NETWORK...]    </span>
<span class="token comment">#   &gt; Display detailed information on one or more networks</span>
$ <span class="token function">docker</span> network <span class="token function">ls</span> 
<span class="token comment"># docker network ls [OPTIONS]         </span>
<span class="token comment">#   &gt; List networks</span>
$ <span class="token function">docker</span> network prune 
<span class="token comment"># docker network prune [OPTIONS]      </span>
<span class="token comment">#   &gt; Remove all unused networks</span>
$ <span class="token function">docker</span> network <span class="token function">rm</span> 
<span class="token comment"># docker network rm NETWORK [NETWORK...]         </span>
<span class="token comment">#   &gt; Remove one or more networks</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h3><blockquote><p><code>docker node COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">node</span> demote 
<span class="token comment"># docker node demote NODE [NODE...]      </span>
<span class="token comment">#   &gt; Demote one or more nodes from manager in the swarm</span>
$ <span class="token function">docker</span> <span class="token function">node</span> inspect 
<span class="token comment"># docker node inspect [OPTIONS] self|NODE [NODE...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more nodes</span>
$ <span class="token function">docker</span> <span class="token function">node</span> <span class="token function">ls</span> 
<span class="token comment"># docker node ls [OPTIONS]         </span>
<span class="token comment">#   &gt; List nodes in the swarm</span>
$ <span class="token function">docker</span> <span class="token function">node</span> promote 
<span class="token comment"># docker node promote NODE [NODE...]     </span>
<span class="token comment">#   &gt; Promote one or more nodes to manager in the swarm</span>
$ <span class="token function">docker</span> <span class="token function">node</span> <span class="token function">ps</span> 
<span class="token comment"># docker node ps [OPTIONS] [NODE...]          </span>
<span class="token comment">#   &gt; List tasks running on one or more nodes, defaults to current node</span>
$ <span class="token function">docker</span> <span class="token function">node</span> <span class="token function">rm</span> 
<span class="token comment"># docker node rm [OPTIONS] NODE [NODE...]          </span>
<span class="token comment">#   &gt; Remove one or more nodes from the swarm</span>
$ <span class="token function">docker</span> <span class="token function">node</span> update 
<span class="token comment"># docker node update [OPTIONS] NODE     </span>
<span class="token comment">#   &gt; Update a node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h3><blockquote><p><code>docker plugin COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> plugin create 
<span class="token comment"># docker plugin create [OPTIONS] PLUGIN PLUGIN-DATA-DIR      </span>
<span class="token comment">#   &gt; Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory.</span>
$ <span class="token function">docker</span> plugin disable 
<span class="token comment"># docker plugin disable [OPTIONS] PLUGIN     </span>
<span class="token comment">#   &gt; Disable a plugin</span>
$ <span class="token function">docker</span> plugin <span class="token builtin class-name">enable</span> 
<span class="token comment"># docker plugin enable [OPTIONS] PLUGIN      </span>
<span class="token comment">#   &gt; Enable a plugin</span>
$ <span class="token function">docker</span> plugin inspect 
<span class="token comment"># docker plugin inspect [OPTIONS] PLUGIN [PLUGIN...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more plugins</span>
$ <span class="token function">docker</span> plugin <span class="token function">install</span> 
<span class="token comment"># docker plugin install [OPTIONS] PLUGIN [KEY=VALUE...]     </span>
<span class="token comment">#   &gt; Install a plugin</span>
$ <span class="token function">docker</span> plugin <span class="token function">ls</span> 
<span class="token comment"># docker plugin ls [OPTIONS]     </span>
<span class="token comment">#   &gt; List plugins</span>
$ <span class="token function">docker</span> plugin push 
<span class="token comment"># docker plugin push [OPTIONS] PLUGIN[:TAG]        </span>
<span class="token comment">#   &gt; Push a plugin to a registry</span>
$ <span class="token function">docker</span> plugin <span class="token function">rm</span> 
<span class="token comment"># docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]          </span>
<span class="token comment">#   &gt; 删除(多个)插件</span>
$ <span class="token function">docker</span> plugin <span class="token builtin class-name">set</span> 
<span class="token comment"># docker plugin set PLUGIN KEY=VALUE [KEY=VALUE...]         </span>
<span class="token comment">#   &gt; Change settings for a plugin</span>
$ <span class="token function">docker</span> plugin upgrade 
<span class="token comment"># docker plugin upgrade [OPTIONS] PLUGIN [REMOTE] [flags]     </span>
<span class="token comment">#   &gt; Upgrade an existing plugin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> secret</h3><blockquote><p><code>docker secret COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> secret create 
<span class="token comment"># docker secret create [OPTIONS] SECRET file|-      </span>
<span class="token comment">#   &gt; Create a secret from a file or STDIN as content</span>
$ <span class="token function">docker</span> secret inspect 
<span class="token comment"># docker secret inspect [OPTIONS] SECRET [SECRET...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more secrets</span>
$ <span class="token function">docker</span> secret <span class="token function">ls</span> 
<span class="token comment"># docker secret ls [OPTIONS]         </span>
<span class="token comment">#   &gt; List secrets</span>
$ <span class="token function">docker</span> secret <span class="token function">rm</span> 
<span class="token comment"># docker secret rm SECRET [SECRET...]          </span>
<span class="token comment">#   &gt; Remove one or more secrets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h3><blockquote><p><code>docker service COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> create 
<span class="token comment"># docker service create [OPTIONS] IMAGE [COMMAND] [ARG...]      </span>
<span class="token comment">#   &gt; Create a new service</span>
$ <span class="token function">docker</span> <span class="token function">service</span> inspect 
<span class="token comment"># docker service inspect [OPTIONS] SERVICE [SERVICE...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more services</span>
$ <span class="token function">docker</span> <span class="token function">service</span> logs 
<span class="token comment"># docker service logs [OPTIONS] SERVICE|TASK        </span>
<span class="token comment">#   &gt; Fetch the logs of a service or task</span>
$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>
<span class="token comment"># docker service ls [OPTIONS]          </span>
<span class="token comment">#   &gt; List services</span>
$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ps</span> 
<span class="token comment"># docker service ps [OPTIONS] SERVICE [SERVICE...]          </span>
<span class="token comment">#   &gt; List the tasks of one or more services</span>
$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">rm</span> 
<span class="token comment"># docker service rm SERVICE [SERVICE...]          </span>
<span class="token comment">#   &gt; Remove one or more services</span>
$ <span class="token function">docker</span> <span class="token function">service</span> rollback 
<span class="token comment"># docker service rollback [OPTIONS] SERVICE    </span>
<span class="token comment">#   &gt; Revert changes to a service&#39;s configuration</span>
$ <span class="token function">docker</span> <span class="token function">service</span> scale 
<span class="token comment"># docker service scale SERVICE=REPLICAS [SERVICE=REPLICAS...]       </span>
<span class="token comment">#   &gt; Scale one or multiple replicated services</span>
$ <span class="token function">docker</span> <span class="token function">service</span> update 
<span class="token comment"># docker service update [OPTIONS] SERVICE      </span>
<span class="token comment">#   &gt; Update a service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swarm" tabindex="-1"><a class="header-anchor" href="#swarm" aria-hidden="true">#</a> swarm</h3><blockquote><p><code>docker swarm COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> swarm ca 
<span class="token comment"># docker swarm ca [OPTIONS]          </span>
<span class="token comment">#   &gt; Display and rotate the root CA</span>
$ <span class="token function">docker</span> swarm init <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
<span class="token comment"># docker swarm init        </span>
<span class="token comment">#   &gt; Initialize a swarm</span>
$ <span class="token function">docker</span> swarm <span class="token function">join</span> 
<span class="token comment"># docker swarm join [OPTIONS] HOST:PORT        </span>
<span class="token comment">#   &gt; Join a swarm as a node and/or manager</span>
$ <span class="token function">docker</span> swarm join-token 
<span class="token comment"># docker swarm join-token [OPTIONS] (worker|manager)</span>
<span class="token comment">#   &gt; Manage join tokens</span>
$ <span class="token function">docker</span> swarm leave 
<span class="token comment"># docker swarm leave [OPTIONS] </span>
<span class="token comment">#   &gt; Leave the swarm</span>
$ <span class="token function">docker</span> swarm unlock 
<span class="token comment"># docker swarm unlock      </span>
<span class="token comment">#   &gt; Unlock swarm</span>
$ <span class="token function">docker</span> swarm unlock-key 
<span class="token comment"># docker swarm unlock-key [OPTIONS] </span>
<span class="token comment">#   &gt; Manage the unlock key</span>
$ <span class="token function">docker</span> swarm update 
<span class="token comment"># docker swarm update [OPTIONS]      </span>
<span class="token comment">#   &gt; Update the swarm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> system</h3><blockquote><p><code>docker system COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> system <span class="token function">df</span>
<span class="token comment"># docker system df [OPTIONS]</span>
<span class="token comment">#   &gt; 查看 Docker 磁盘使用情况</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>system<span class="token punctuation">]</span> events <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;1467302400&quot;</span> <span class="token comment"># 显示docker 2016年7月1日 后的所有事件</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>system<span class="token punctuation">]</span> events <span class="token parameter variable">-f</span> <span class="token string">&quot;image&quot;</span><span class="token operator">=</span><span class="token string">&quot;mysql:5.6&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;1467302400&quot;</span> <span class="token comment"># 显示docker 镜像为mysql:5.6 2016年7月1日 后的相关事件    </span>
<span class="token comment"># docker [system] events [OPTIONS] </span>
<span class="token comment">#   &gt; 从服务器获取实时事件</span>
<span class="token comment">#       -f              ：根据条件过滤事件</span>
<span class="token comment">#       --since         ：从指定的时间戳后显示所有事件</span>
<span class="token comment">#       --until         ：流水时间显示到指定的时间为止</span>
$ <span class="token function">docker</span> <span class="token punctuation">[</span>system<span class="token punctuation">]</span> info       
<span class="token comment"># docker [system] info [OPTIONS]</span>
<span class="token comment">#   &gt; 显示 Docker 系统信息，包括容器总数，运行容器数...</span>
$ <span class="token function">docker</span> system prune       
<span class="token comment"># docker system prune [OPTIONS]</span>
<span class="token comment">#   &gt; Remove unused data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trust" tabindex="-1"><a class="header-anchor" href="#trust" aria-hidden="true">#</a> trust</h3><blockquote><p><code>docker trust COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker trust key COMMAND</span>
<span class="token comment">#   &gt; Manage keys for signing Docker images</span>
$ <span class="token function">docker</span> trust key generate 
<span class="token comment"># docker trust key generate NAME   </span>
<span class="token comment">#   &gt; Generate and load a signing key-pair</span>
$ <span class="token function">docker</span> trust key load 
<span class="token comment"># docker trust key load [OPTIONS] KEYFILE</span>
<span class="token comment">#   &gt; Load a private key file for signing</span>
<span class="token comment"># docker trust signer COMMAND  </span>
<span class="token comment">#   &gt; Manage entities who can sign Docker images</span>
$ <span class="token function">docker</span> trust signer <span class="token function">add</span> 
<span class="token comment"># docker trust signer add OPTIONS NAME REPOSITORY [REPOSITORY...]</span>
<span class="token comment">#   &gt; Add a signer</span>
$ <span class="token function">docker</span> trust signer remove 
<span class="token comment"># docker trust signer remove [OPTIONS] NAME REPOSITORY [REPOSITORY...]</span>
<span class="token comment">#   &gt; Remove a signer</span>
$ <span class="token function">docker</span> trust inspect 
<span class="token comment"># docker trust inspect IMAGE[:TAG] [IMAGE[:TAG]...]     </span>
<span class="token comment">#   &gt; Return low-level information about keys and signatures</span>
$ <span class="token function">docker</span> trust revoke 
<span class="token comment"># docker trust revoke [OPTIONS] IMAGE[:TAG]      </span>
<span class="token comment">#   &gt; Remove trust for an image</span>
$ <span class="token function">docker</span> trust sign 
<span class="token comment"># docker trust sign IMAGE:TAG       </span>
<span class="token comment">#   &gt; Sign an image</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> volume</h3><blockquote><p><code>docker volume COMMAND</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume create 
<span class="token comment"># docker volume create [OPTIONS] [VOLUME]     </span>
<span class="token comment">#   &gt; Create a volume</span>
$ <span class="token function">docker</span> volume inspect 
<span class="token comment"># docker volume inspect [OPTIONS] VOLUME [VOLUME...]     </span>
<span class="token comment">#   &gt; Display detailed information on one or more volumes</span>
$ <span class="token function">docker</span> volume <span class="token function">ls</span> 
<span class="token comment"># docker volume ls [OPTIONS]         </span>
<span class="token comment">#   &gt; List volumes</span>
$ <span class="token function">docker</span> volume prune 
<span class="token comment"># docker volume prune [OPTIONS]       </span>
<span class="token comment">#   &gt; Remove all unused local volumes</span>
$ <span class="token function">docker</span> volume <span class="token function">rm</span> 
<span class="token comment"># docker volume rm [OPTIONS] VOLUME [VOLUME...]          </span>
<span class="token comment">#   &gt; Remove one or more volumes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function k(v,b){const a=c("ExternalLinkIcon");return i(),o("div",null,[t(" more "),m,n("ul",null,[n("li",null,[n("a",r,[s("Docker 命令大全"),l(a)])])]),u])}const O=e(d,[["render",k],["__file","commands.html.vue"]]);export{O as default};
