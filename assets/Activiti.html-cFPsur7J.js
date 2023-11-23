import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as _,o as i,c as a,b as t,e,d as o,f as c}from"./app-NiSSZH60.js";const E={},h=c('<h1 id="activiti" tabindex="-1"><a class="header-anchor" href="#activiti" aria-hidden="true">#</a> Activiti</h1><blockquote><p><code>Activiti</code>是一个工作流引擎， <code>Activiti</code>可以将业务系统中复杂的业务流程抽取出来，使用专门的建模语言（<code>BPMN2.0</code>）进行定义，业务系统按照预先定义的流程进行执行，实现了业务系统的业务流程由<code>Activiti</code>进行管理，减少业务系统由于流程变更进行系统升级改造的工作量，从而提高系统的健壮性，同时也减少了系统开发维护成本。</p></blockquote><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',3),T={href:"https://github.com/Activiti/Activiti",target:"_blank",rel:"noopener noreferrer"},l={href:"https://github.com/waylau/activiti-5.x-user-guide",target:"_blank",rel:"noopener noreferrer"},I=c('<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><ul><li><p>BPM (Business Process Management)，业务流程管理。是一种理念，以持续的提高组织业务绩效为目的系统化方法，常见商业管理教育如EMBA、MBA等均将BPM包含在内。</p></li><li><p>BPMN</p><ul><li>业务流程建模与标注 BPMN(<code>Business</code> <code>Process</code> <code>Model</code> and <code>Notation</code>)，描述流程的基本符号，包括这些图元如何组合成一个业务流程图（<code>Business</code> <code>Process</code> <code>Diagram</code>）。</li><li>和<code>BPM</code>是两个不同的概念。<code>Activiti</code>使用<code>BPMN</code>标准进行流程建模。是由<code>BPMI</code>（Business Process Management Initiative）开发的一套标准的业务流程建模符号，使用BPMN提供的符号可以创建业务流程。</li></ul></li><li><p>Activiti Explorer</p><ul><li>默认用户 <ul><li>admin =&gt; <code>kermit - kermit</code></li><li>managerment =&gt; <code>gonzo - gonzo</code></li><li>engineering =&gt; <code>fozzie - fozzie</code></li></ul></li></ul></li><li><p>activiti.cfg.xml : <code>Activiti</code>核心配置文件，配置流程引擎创建工具的基本参数和数据库连接池参数。</p></li><li><p>定义数据库配置参数 :</p></li></ul><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>jdbcUrl</td><td>数据库的JDBC URL。</td></tr><tr><td>jdbcDriver</td><td>对应不同数据库类型的驱动。</td></tr><tr><td>jdbcUsername</td><td>连接数据库的用户名。</td></tr><tr><td>jdbcPassword</td><td>连接数据库的密码。</td></tr></tbody></table><ul><li>基于 <code>JDBC</code> 参数配置的数据库连接 会使用默认的 <code>MyBatis</code> 连接池, 配置连接池 <code>MyBatis</code> 参数 :</li></ul><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>jdbcMaxActiveConnections</td><td>连接池中处于被使用状态的连接的最大值。默认为10。</td></tr><tr><td>jdbcMaxIdleConnections</td><td>连接池中处于空闲状态的连接的最大值。</td></tr><tr><td>jdbcMaxCheckoutTime</td><td>连接被取出使用的最长时间，超过时间会被强制回收。 默认为20000（20秒）。</td></tr><tr><td>jdbcMaxWaitTime</td><td>这是一个底层配置，让连接池可以在长时间无法获得连接时， 打印一条日志，并重新尝试获取一个连接。（避免因为错误配置导致沉默的操作失败）。 默认为20000（20秒）。</td></tr></tbody></table><h2 id="activiti-services-api" tabindex="-1"><a class="header-anchor" href="#activiti-services-api" aria-hidden="true">#</a> Activiti Services API</h2><table><thead><tr><th>服务</th><th>功能</th></tr></thead><tbody><tr><td><code>RepositoryService</code></td><td>管理流程定义</td></tr><tr><td><code>TaskService</code></td><td>任务管理</td></tr><tr><td><code>IdentityService</code></td><td>组织机构管理</td></tr><tr><td><code>FormService</code></td><td>一个可选服务，任务表单管理</td></tr><tr><td><code>RuntimeService</code></td><td>执行管理，包括启动、推进、删除流程实例等操作</td></tr><tr><td><code>ManagementService</code></td><td></td></tr><tr><td><code>HistoryService</code></td><td>历史管理(执行完的数据的管理)</td></tr></tbody></table><ul><li><p><code>ProcessEngine</code> : 在<code>Activiti</code>中最核心的类，其他的类都是由他而来。调用ProcessEngines的<code>getDefaultProceeEngine</code>方法时会自动加载classpath下名为 activiti.cfg.xml 文件。</p></li><li><p><code>RepositoryService</code> : <code>Activiti</code>的仓库服务类。所谓的仓库指流程定义文档的两个文件：bpmn文件和流程图片。</p></li><li><p><code>TaskService</code> : <code>activiti</code>的任务服务类。可以从这个类中获取任务的信息。</p></li><li><p><code>IdentityService</code></p></li><li><p><code>FormService</code></p></li><li><p><code>RuntimeService</code> : 是<code>activiti</code>的流程执行服务类。可以从这个服务类中获取很多关于流程执行相关的信息。</p></li><li><p><code>ManagementService</code></p></li><li><p><code>HistoryService</code> : 是<code>activiti</code>的查询历史信息的类。在一个流程执行完成后，这个对象为我们提供查询历史信息。</p></li><li><p><code>ProcessDefinition</code> : 流程定义类。可以从这里获得资源文件等。</p></li><li><p><code>ProcessInstance</code> : 代表流程定义的执行实例。一个流程实例包括了所有的运行节点。我们可以利用这个对象来了解当前流程实例的进度等信息。流程实例就表示一个流程从开始到结束的最大的流程分支，即一个流程中流程实例只有一个。</p></li><li><p><code>Execution</code> : <code>Activiti</code>用这个对象去描述流程执行的每一个节点。在没有并发的情况下，<code>Execution</code>就是同<code>ProcessInstance</code>。流程按照流程定义的规则执行一次的过程，就可以表示执行对象<code>Execution</code>。</p></li></ul><h2 id="activiti-database-表-23" tabindex="-1"><a class="header-anchor" href="#activiti-database-表-23" aria-hidden="true">#</a> Activiti DataBase (表 - 23)</h2><blockquote><p><code>Activiti</code>的后台是有数据库的支持，所有的表都以<code>ACT_</code>开头，第二部分是表示表的用途的两个字母标识。用途也和服务的<code>API</code>对应。</p></blockquote><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_EVT_*</code></td><td></td></tr><tr><td><code>ACT_GE_*</code></td><td>通用数据， 用于不同场景下，如存放资源文件</td></tr><tr><td><code>ACT_HI_*</code></td><td><code>HI</code>表示<code>history</code>。 这些表包含历史数据，比如历史流程实例， 变量，任务等等。</td></tr><tr><td><code>ACT_ID_*</code></td><td><code>ID</code>表示<code>identity</code>。 这些表包含身份信息，比如用户，组等等。</td></tr><tr><td><code>ACT_PROCDEF_*</code></td><td></td></tr><tr><td><code>ACT_RE_*</code></td><td><code>RE</code>表示<code>repository</code>。 这个前缀的表包含了流程定义和流程静态资源 （图片，规则，等等）。</td></tr><tr><td><code>ACT_RU_*</code></td><td><code>RU</code>表示<code>runtime</code>。 这些运行时的表，包含流程实例，任务，变量，异步任务，等运行中的数据。 <code>Activiti</code>只在流程实例执行过程中保存这些数据， 在流程结束时就会删除这些记录。 这样运行时表可以一直很小速度很快。</td></tr></tbody></table><h3 id="act-evt-日志数据表-1" tabindex="-1"><a class="header-anchor" href="#act-evt-日志数据表-1" aria-hidden="true">#</a> ACT_EVT_* (日志数据表 - 1)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_EVT_LOG</code></td><td>日志数据表</td></tr></tbody></table><ul><li>ACT_EVT_LOG ( evt_log ) : 用来保存日志</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>LOG_NR_</code></td><td></td></tr><tr><td><code>TYPE_</code></td><td></td></tr><tr><td><code>PROC_DEF_ID_</code></td><td></td></tr><tr><td><code>PROC_INST_ID_</code></td><td></td></tr><tr><td><code>EXECUTION_ID_</code></td><td></td></tr><tr><td><code>TASK_ID_</code></td><td></td></tr><tr><td><code>TIME_STAMP_</code></td><td></td></tr><tr><td><code>USER_ID_</code></td><td></td></tr><tr><td><code>DATA_</code></td><td></td></tr><tr><td><code>LOCK_OWNER_</code></td><td></td></tr><tr><td><code>LOCK_TIME_</code></td><td></td></tr><tr><td><code>IS_PROCESSED_</code></td><td></td></tr></tbody></table><h3 id="act-ge-通用数据表-2" tabindex="-1"><a class="header-anchor" href="#act-ge-通用数据表-2" aria-hidden="true">#</a> ACT_GE_* (通用数据表 - 2)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_GE_BYTEARRAY</code></td><td>二进制数据表</td></tr><tr><td><code>ACT_GE_PROPERTY</code></td><td>属性数据表存储整个流程引擎级别的数据,初始化表结构时，会默认插入三条记录</td></tr></tbody></table><ul><li>ACT_GE_BYTEARRAY ( bytearray ) : 用来保存部署文件的大文本数据</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>资源文件编号，自增长</td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr><tr><td><code>NAME_</code></td><td>资源文件名称</td></tr><tr><td><code>DEPLOYMENT_ID_</code></td><td>来自于父表<code>ACT_RE_DEPLOYMENT</code>的主键</td></tr><tr><td><code>BYTES_</code></td><td>大文本类型，存储文本字节流</td></tr><tr><td><code>GENERATED_</code></td><td></td></tr></tbody></table><ul><li>ACT_GE_PROPERTY ( property ) : 属性数据表。存储这个流程引擎级别的数据。</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>NAME_</code></td><td>属性名称</td></tr><tr><td><code>VALUE_</code></td><td>属性值</td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr></tbody></table><h3 id="act-hi-历史数据库表-8" tabindex="-1"><a class="header-anchor" href="#act-hi-历史数据库表-8" aria-hidden="true">#</a> ACT_HI_* (历史数据库表 - 8)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_HI_ACTINST</code></td><td>历史节点表</td></tr><tr><td><code>ACT_HI_ATTACHMENT</code></td><td>历史附件表</td></tr><tr><td><code>ACT_HI_COMMENT</code></td><td>历史意见表</td></tr><tr><td><code>ACT_HI_DETAIL</code></td><td>历史详情表，提供历史变量的查询</td></tr><tr><td><code>ACT_HI_IDENTITYLINK</code></td><td>历史流程人员表</td></tr><tr><td><code>ACT_HI_PROCINST</code></td><td>历史流程实例表</td></tr><tr><td><code>ACT_HI_TASKINST</code></td><td>历史任务实例表</td></tr><tr><td><code>ACT_HI_VARINST</code></td><td>历史变量表</td></tr></tbody></table><ul><li>ACT_HI_ACTINST ( actinst )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>PROC_DEF_ID_</code></td><td>流程定义id</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程实例id</td></tr><tr><td><code>EXECUTION_ID_</code></td><td>执行实例</td></tr><tr><td><code>ACT_ID_</code></td><td>节点id</td></tr><tr><td><code>TASK_ID_</code></td><td>任务id</td></tr><tr><td><code>CALL_PROC_INST_ID_</code></td><td></td></tr><tr><td><code>ACT_NAME_</code></td><td>节点名称</td></tr><tr><td><code>ACT_TYPE_</code></td><td>节点类型</td></tr><tr><td><code>ASSIGNEE_</code></td><td>节点任务分配人</td></tr><tr><td><code>START_TIME_</code></td><td>开始时间</td></tr><tr><td><code>END_TIME_</code></td><td>结束时间</td></tr><tr><td><code>DURATION_</code></td><td>经过时长</td></tr></tbody></table><ul><li>ACT_HI_ATTACHMENT ( attachment )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>USER_ID_</code></td><td></td></tr><tr><td><code>NAME_</code></td><td></td></tr><tr><td><code>DESCRIPTION_</code></td><td></td></tr><tr><td><code>TYPE_</code></td><td></td></tr><tr><td><code>TASK_ID_</code></td><td></td></tr><tr><td><code>PROC_INST_ID_</code></td><td></td></tr><tr><td><code>URL_</code></td><td></td></tr><tr><td><code>CONTENT_ID_</code></td><td></td></tr></tbody></table><ul><li>ACT_HI_COMMENT ( comment ) : 意见表</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>TYPE_</code></td><td>意见记录类型 为comment 时 为处理意见</td></tr><tr><td><code>TIME_</code></td><td>记录时间</td></tr><tr><td><code>USER_ID_</code></td><td></td></tr><tr><td><code>TASK_ID_</code></td><td>对应任务的id</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>对应的流程实例的id</td></tr><tr><td><code>ACTION_</code></td><td>为AddComment 时为处理意见</td></tr><tr><td><code>MESSAGE_</code></td><td>处理意见</td></tr><tr><td><code>FULL_MSG_</code></td><td></td></tr></tbody></table><ul><li>ACT_HI_DETAIL ( detail ) : 启动流程或者在任务complete之后,记录历史流程变量</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>TYPE_</code></td><td>variableUpdate 和 formProperty 两种值</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>对应流程实例id</td></tr><tr><td><code>EXECUTION_ID_</code></td><td>对应执行实例id</td></tr><tr><td><code>TASK_ID_</code></td><td>对应任务id</td></tr><tr><td><code>ACT_INST_ID</code></td><td>对应节点id</td></tr><tr><td><code>NAME_</code></td><td>历史流程变量名称，或者表单属性的名称</td></tr><tr><td><code>VAR_TYPE_</code></td><td>定义类型</td></tr><tr><td><code>REV_</code></td><td>版本</td></tr><tr><td><code>TIME_</code></td><td>导入时间</td></tr><tr><td><code>BYTEARRAY_ID_</code></td><td></td></tr><tr><td><code>DOUBLE_</code></td><td>如果定义的变量或者表单属性的类型为double，他的值存在这里</td></tr><tr><td><code>LONG_</code></td><td>如果定义的变量或者表单属性的类型为LONG ,他的值存在这里</td></tr><tr><td><code>TEXT_</code></td><td>如果定义的变量或者表单属性的类型为string，值存在这里</td></tr><tr><td><code>TEXT2_</code></td><td></td></tr></tbody></table><ul><li>ACT_HI_IDENTITYLINK ( identitylink )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>GROUP_ID_</code></td><td></td></tr><tr><td><code>TYPE_</code></td><td></td></tr><tr><td><code>USER_ID_</code></td><td></td></tr><tr><td><code>TASK_ID_</code></td><td></td></tr><tr><td><code>PROC_INST_ID_</code></td><td></td></tr></tbody></table><ul><li>ACT_HI_PROCINST ( procinst )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>唯一标识</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程id</td></tr><tr><td><code>BUSINESS_KEY_</code></td><td>业务编号</td></tr><tr><td><code>PROC_DEF_ID_</code></td><td>流程定义id</td></tr><tr><td><code>START_TIME_</code></td><td>流程开始时间</td></tr><tr><td><code>END_TIME_</code></td><td>结束时间</td></tr><tr><td><code>DURATION_</code></td><td>流程经过时间</td></tr><tr><td><code>START_USER_ID_</code></td><td>开启流程用户id</td></tr><tr><td><code>START_ACT_ID_</code></td><td>开始节点</td></tr><tr><td><code>END_ACT_ID_</code></td><td>结束节点</td></tr><tr><td><code>SUPER_PROCESS_INSTANCE_ID_</code></td><td>父流程流程id</td></tr><tr><td><code>DELETE_REASON_</code></td><td>从运行中任务表中删除原因</td></tr></tbody></table><ul><li>ACT_HI_TASKINST ( taskinst )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>PROC_DEF_ID_</code></td><td>流程定义id</td></tr><tr><td><code>TASK_DEF_KEY_</code></td><td>任务定义id</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程实例id</td></tr><tr><td><code>EXECUTION_ID_</code></td><td>执行实例id</td></tr><tr><td><code>NAME_</code></td><td>任务名称</td></tr><tr><td><code>PARENT_TASK_ID_</code></td><td>父任务id</td></tr><tr><td><code>DESCRIPTION_</code></td><td>说明</td></tr><tr><td><code>OWNER_</code></td><td>拥有人（发起人）</td></tr><tr><td><code>ASSIGNEE_</code></td><td>分配到任务的人</td></tr><tr><td><code>START__TIME_</code></td><td>开始任务时间</td></tr><tr><td><code>CLAIM_TIME</code></td><td></td></tr><tr><td><code>END_TIME_</code></td><td>结束任务时间</td></tr><tr><td><code>DURATION_</code></td><td>时长</td></tr><tr><td><code>DELETE_REASON_</code></td><td>从运行时任务表中删除的原因</td></tr><tr><td><code>PRIORITY_</code></td><td>紧急程度</td></tr><tr><td><code>DUE_DATE_</code></td><td></td></tr><tr><td><code>FROM_KEY_</code></td><td></td></tr></tbody></table><ul><li>ACT_HI_VARINST ( varinst )</li></ul><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>PROC_INST_ID_</code></td><td></td></tr><tr><td><code>EXECUTION_ID_</code></td><td></td></tr><tr><td><code>TASK_ID_</code></td><td></td></tr><tr><td><code>NAME_</code></td><td></td></tr><tr><td><code>VAR_TYPE_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>BYTEARRAY_ID_</code></td><td></td></tr><tr><td><code>DOUBLE_</code></td><td></td></tr><tr><td><code>LONG_</code></td><td></td></tr><tr><td><code>TEXT_</code></td><td></td></tr><tr><td><code>TEXT2_</code></td><td></td></tr></tbody></table><h3 id="act-id-组织机构表-4" tabindex="-1"><a class="header-anchor" href="#act-id-组织机构表-4" aria-hidden="true">#</a> ACT_ID_* (组织机构表 - 4)</h3><blockquote><p>这四张表很常见，基本的组织机构管理，关于用户认证方面建议还是自己开发一套，组件自带的功能太简单，使用中有很多需求难以满足</p></blockquote><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_ID_GROUP</code></td><td>用户组信息表</td></tr><tr><td><code>ACT_ID_INFO</code></td><td>用户扩展信息表</td></tr><tr><td><code>ACT_ID_MEMBERSHIP</code></td><td>用户与用户组对应信息表</td></tr><tr><td><code>ACT_ID_USER</code></td><td>用户信息表</td></tr></tbody></table><ul><li>ACT_ID_GROUP ( group ) : 用来存储用户组信息。</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>用户组名</td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr><tr><td><code>NAME_</code></td><td>用户组描述信息</td></tr><tr><td><code>TYPE_</code></td><td>用户组类型</td></tr></tbody></table><ul><li>ACT_ID_INFO ( info )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>USER_ID_</code></td><td></td></tr><tr><td><code>TYPE_</code></td><td></td></tr><tr><td><code>KEY_</code></td><td></td></tr><tr><td><code>VALUE_</code></td><td></td></tr><tr><td><code>PASSWORD_</code></td><td></td></tr><tr><td><code>PARENT_ID_</code></td><td></td></tr></tbody></table><ul><li>ACT_ID_MEMBERSHIP ( membership ) : 用来保存用户的分组信息</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>USER_ID_</code></td><td>用户名</td></tr><tr><td><code>GROUP_ID_</code></td><td>用户组名</td></tr></tbody></table><ul><li>ACT_ID_USER ( user ) : 用户信息</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>用户名</td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr><tr><td><code>FIRST_</code></td><td>用户名称</td></tr><tr><td><code>LAST_</code></td><td>用户姓氏</td></tr><tr><td><code>EMAIL_</code></td><td>邮箱</td></tr><tr><td><code>PWD_</code></td><td>密码</td></tr><tr><td><code>PICTURE_ID_</code></td><td></td></tr></tbody></table><h3 id="act-procdef-流程定义数据表-1" tabindex="-1"><a class="header-anchor" href="#act-procdef-流程定义数据表-1" aria-hidden="true">#</a> ACT_PROCDEF_* (流程定义数据表 - 1)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_PROCDEF_INFO</code></td><td>流程定义信息表</td></tr></tbody></table><ul><li>ACT_PROCDEF_INFO ( info ) : 流程定义信息</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>PROC_DEF_ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>INFO_JSON_ID_</code></td><td></td></tr></tbody></table><h3 id="act-re-资源库流程规则表-3" tabindex="-1"><a class="header-anchor" href="#act-re-资源库流程规则表-3" aria-hidden="true">#</a> ACT_RE_* (资源库流程规则表 - 3)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_RE_DEPLOYMENT</code></td><td>部署信息表</td></tr><tr><td><code>ACT_RE_MODEL</code></td><td>流程设计模型部署表</td></tr><tr><td><code>ACT_RE_PROCDEF</code></td><td>流程定义数据表</td></tr></tbody></table><ul><li>ACT_RE_DEPLOYMENT ( deployment ) : 用来存储部署时需要持久化保存下来的信息</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>部署编号，自增长</td></tr><tr><td><code>NAME_</code></td><td>部署包的名称</td></tr><tr><td><code>CATEGORY_</code></td><td></td></tr><tr><td><code>DEPLOY_TIME_</code></td><td>部署时间</td></tr></tbody></table><ul><li>ACT_RE_MODEL ( model )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>NAME_</code></td><td></td></tr><tr><td><code>KEY_</code></td><td></td></tr><tr><td><code>CATEGORY_</code></td><td></td></tr><tr><td><code>CREATE_TIME_</code></td><td></td></tr><tr><td><code>LAST_UPDATE_TIME_</code></td><td></td></tr><tr><td><code>VERSION_</code></td><td></td></tr><tr><td><code>META_INFO_</code></td><td></td></tr><tr><td><code>DEPLOYMENT_ID_</code></td><td></td></tr><tr><td><code>EDITOR_SOURCE_VALUE_ID_</code></td><td></td></tr><tr><td><code>EDITOR_SOURCE_EXTRA_VALUE_ID_</code></td><td></td></tr></tbody></table><ul><li>ACT_RE_PROCDEF ( procdef ) : 业务流程定义数据表</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>流程ID，由“流程编号：流程版本号：自增长ID”组成</td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>CATEGORY_</code></td><td>流程命名空间（该编号就是流程文件targetNamespace的属性值）</td></tr><tr><td><code>NAME_</code></td><td>流程名称（该编号就是流程文件process元素的name属性值）</td></tr><tr><td><code>KEY_</code></td><td>流程编号（该编号就是流程文件process元素的id属性值）</td></tr><tr><td><code>VERSION_</code></td><td>流程版本号（由程序控制，新增即为1，修改后依次加1来完成的）</td></tr><tr><td><code>DEPLOYMENT_ID_</code></td><td>部署编号</td></tr><tr><td><code>RESOURCE_NAME_</code></td><td>资源文件名称</td></tr><tr><td><code>DGRM_RESOURCE_NAME_</code></td><td>图片资源文件名称</td></tr><tr><td><code>DESCRIPTION_</code></td><td></td></tr><tr><td><code>HAS_START_FROM_KEY_</code></td><td>是否有Start From Key</td></tr><tr><td><code>SUSPENSION_STATE_</code></td><td></td></tr></tbody></table><p>注：此表和<code>ACT_RE_DEPLOYMENT</code>是多对一的关系，即，一个部署的bar包里可能包含多个流程定义文件，每个流程定义文件都会有一条记录在<code>ACT_REPROCDEF</code>表内，每个流程定义的数据，都会对于<code>ACT_GE_BYTEARRAY</code>表内的一个资源文件和PNG图片文件。和<code>ACT_GE_BYTEARRAY</code>的关联是通过程序用<code>ACT_GE_BYTEARRAY.NAME</code>与<code>ACT_RE_PROCDEF.NAME_</code>完成的，在数据库表结构中没有体现。</p><h3 id="act-ru-运行时数据库表-6" tabindex="-1"><a class="header-anchor" href="#act-ru-运行时数据库表-6" aria-hidden="true">#</a> ACT_RU_* (运行时数据库表 - 6)</h3><table><thead><tr><th>表名</th><th>功能</th></tr></thead><tbody><tr><td><code>ACT_RU_EVENT_SUBSCR</code></td><td></td></tr><tr><td><code>ACT_RU_EXECUTION</code></td><td>运行时流程执行实例表</td></tr><tr><td><code>ACT_RU_IDENTITYLINK</code></td><td>运行时流程人员表，主要存储任务节点与参与者的相关信息</td></tr><tr><td><code>ACT_RU_JOB</code></td><td></td></tr><tr><td><code>ACT_RU_TASK</code></td><td>运行时任务节点表</td></tr><tr><td><code>ACT_RU_VARIABLE</code></td><td>运行时流程变量数据表</td></tr></tbody></table><ul><li>ACT_RU_EVENT_SUBSCR ( event_subscr )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>EVENT_TYPE_</code></td><td></td></tr><tr><td><code>EVENT_NAME_</code></td><td></td></tr><tr><td><code>EXECUTION_ID_</code></td><td></td></tr><tr><td><code>PROC_INST_ID_</code></td><td></td></tr><tr><td><code>ACTIVITY_ID_</code></td><td></td></tr><tr><td><code>CONFIGURATION_</code></td><td></td></tr><tr><td><code>CREATED_</code></td><td></td></tr></tbody></table><ul><li>ACT_RU_EXECUTION ( execution )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程实例编号</td></tr><tr><td><code>BUSINESS_KEY_</code></td><td>业务编号</td></tr><tr><td><code>PARENT_ID_</code></td><td>找到该执行实例的父级，最终会找到整个流程的执行实例</td></tr><tr><td><code>PROC_DEF_ID_</code></td><td>流程ID</td></tr><tr><td><code>SUPER_EXEC_</code></td><td>引用的执行模板</td></tr><tr><td><code>ACT_ID_</code></td><td>节点id</td></tr><tr><td><code>IS_ACTIVE_</code></td><td>是否访问</td></tr><tr><td><code>IS_CONCURRENT_</code></td><td></td></tr><tr><td><code>IS_SCOPE_</code></td><td></td></tr><tr><td><code>IS_EVENT_SCOPE_</code></td><td></td></tr><tr><td><code>SUSPENSION_STATE_</code></td><td></td></tr><tr><td><code>CACHED_ENT_STATE</code></td><td></td></tr></tbody></table><ul><li>ACT_RU_IDENTITYLINK ( identitylink ) : 任务参与者数据表。主要存储当前节点参与者的信息。</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>REV_</code></td><td>版本</td></tr><tr><td><code>GROUP_ID_</code></td><td>组织id</td></tr><tr><td><code>TYPE_</code></td><td>类型</td></tr><tr><td><code>USER_ID_</code></td><td>用户id</td></tr><tr><td><code>TASK_ID_</code></td><td>任务id</td></tr><tr><td><code>PROC_INST_ID</code></td><td></td></tr><tr><td><code>PROC_DEF_ID</code></td><td></td></tr></tbody></table><ul><li>ACT_RU_JOB ( job )</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>TYPE_</code></td><td></td></tr><tr><td><code>LOCK_EXP_TIME_</code></td><td></td></tr><tr><td><code>LOCK_OWNER_</code></td><td></td></tr><tr><td><code>EXCLUSIVE_</code></td><td></td></tr><tr><td><code>EXECUTION_ID_</code></td><td></td></tr><tr><td><code>PROCESS_INSTANCE_ID_</code></td><td></td></tr><tr><td><code>PROC_DEF_ID_</code></td><td></td></tr><tr><td><code>RETRIES_</code></td><td></td></tr><tr><td><code>EXCEPTION_STACK_ID_</code></td><td></td></tr><tr><td><code>EXCEPTION_MSG_</code></td><td></td></tr><tr><td><code>DUEDATE_</code></td><td></td></tr><tr><td><code>REPEAT_</code></td><td></td></tr><tr><td><code>HANDLER_TYPE_</code></td><td></td></tr><tr><td><code>HANDLER_CFG_</code></td><td></td></tr></tbody></table><ul><li>ACT_RU_TASK ( task ) : 运行时任务数据表。</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td></td></tr><tr><td><code>REV_</code></td><td></td></tr><tr><td><code>EXECUTION_ID_</code></td><td>执行实例的id</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程实例的id</td></tr><tr><td><code>PROC_DEF_ID_</code></td><td>流程定义的id,对应act_re_procdef 的id_</td></tr><tr><td><code>NAME_</code></td><td>任务名称，对应 task 的name</td></tr><tr><td><code>PARENT_TASK_ID_</code></td><td>对应父任务</td></tr><tr><td><code>DESCRIPTION_</code></td><td></td></tr><tr><td><code>TASK_DEF_KEY_</code></td><td>task 的id</td></tr><tr><td><code>OWNER_</code></td><td>发起人</td></tr><tr><td><code>ASSIGNEE_</code></td><td>分配到任务的人</td></tr><tr><td><code>DELEGATION_</code></td><td>委托人</td></tr><tr><td><code>PRIORITY_</code></td><td>紧急程度</td></tr><tr><td><code>CREATE_TIME_</code></td><td>发起时间</td></tr><tr><td><code>DUE_TIME_</code></td><td>审批时长</td></tr><tr><td><code>SUSPENSION_STATE_</code></td><td></td></tr></tbody></table><ul><li>ACT_RU_VARIABLE ( variable ) : 运行时流程变量数据表。</li></ul><table><thead><tr><th>字段名</th><th>说明</th></tr></thead><tbody><tr><td><code>ID_</code></td><td>标识</td></tr><tr><td><code>REV_</code></td><td>版本号</td></tr><tr><td><code>TYPE_</code></td><td>数据类型</td></tr><tr><td><code>NAME_</code></td><td>变量名</td></tr><tr><td><code>EXECUTION_ID_</code></td><td>执行实例id</td></tr><tr><td><code>PROC_INST_ID_</code></td><td>流程实例id</td></tr><tr><td><code>TASK_ID_</code></td><td>任务id</td></tr><tr><td><code>BYTEARRAY_ID_</code></td><td></td></tr><tr><td><code>DOUBLE_</code></td><td>若数据类型为double ,保存数据在此列</td></tr><tr><td><code>LONG_</code></td><td>若数据类型为long保存数据到此列</td></tr><tr><td><code>TEXT_</code></td><td>string 保存到此列</td></tr><tr><td><code>TEXT2_</code></td><td></td></tr></tbody></table><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>流程文件部署主要涉及到3个表，分别是：<code>ACT_GE_BYTEARRAY</code>、<code>ACT_RE_DEPLOYMENT</code>、<code>ACT_RE_PROCDEF</code>。主要完成“部署包”--&gt;“流程定义文件”--&gt;“所有包内文件”的解析部署关系。从表结构中可以看出，流程定义的元素需要每次从数据库加载并解析，因为流程定义的元素没有转化成数据库表来完成，当然流程元素解析后是放在缓存中的，具体的还需要后面详细研究。</p>',79);function A(R,D){const d=_("ExternalLinkIcon");return i(),a("div",null,[h,t("ul",null,[t("li",null,[t("a",T,[e("Activiti"),o(d)])]),t("li",null,[t("a",l,[e("Activiti 5.x 用户指南"),o(d)])])]),I])}const n=r(E,[["render",A],["__file","Activiti.html.vue"]]);export{n as default};
