# Activiti
> `Activiti`是一个工作流引擎， `Activiti`可以将业务系统中复杂的业务流程抽取出来，使用专门的建模语言（`BPMN2.0`）进行定义，业务系统按照预先定义的流程进行执行，实现了业务系统的业务流程由`Activiti`进行管理，减少业务系统由于流程变更进行系统升级改造的工作量，从而提高系统的健壮性，同时也减少了系统开发维护成本。

## Reference

- [Activiti](https://github.com/Activiti/Activiti)
- [Activiti 5.x 用户指南](https://github.com/waylau/activiti-5.x-user-guide)

## Concept

- BPM (Business Process  Management)，业务流程管理。是一种理念，以持续的提高组织业务绩效为目的系统化方法，常见商业管理教育如EMBA、MBA等均将BPM包含在内。

- BPMN
    * 业务流程建模与标注 BPMN(`Business` `Process` `Model` and `Notation`)，描述流程的基本符号，包括这些图元如何组合成一个业务流程图（`Business` `Process` `Diagram`）。
    * 和`BPM`是两个不同的概念。`Activiti`使用`BPMN`标准进行流程建模。是由`BPMI`（Business Process Management Initiative）开发的一套标准的业务流程建模符号，使用BPMN提供的符号可以创建业务流程。
 
- Activiti Explorer
    * 默认用户 
        + admin => `kermit - kermit`
        + managerment => `gonzo - gonzo`
        + engineering => `fozzie - fozzie`

- activiti.cfg.xml : `Activiti`核心配置文件，配置流程引擎创建工具的基本参数和数据库连接池参数。
    
- 定义数据库配置参数 :
    
| 参数 | 说明 
| --- | --- 
| jdbcUrl       | 数据库的JDBC URL。 
| jdbcDriver    | 对应不同数据库类型的驱动。 
| jdbcUsername  | 连接数据库的用户名。 
| jdbcPassword  | 连接数据库的密码。 | 

- 基于 `JDBC` 参数配置的数据库连接 会使用默认的 `MyBatis` 连接池, 配置连接池 `MyBatis` 参数 :
  
| 参数 | 说明 
| --- | --- 
| jdbcMaxActiveConnections  | 连接池中处于被使用状态的连接的最大值。默认为10。 
| jdbcMaxIdleConnections    | 连接池中处于空闲状态的连接的最大值。 
| jdbcMaxCheckoutTime       | 连接被取出使用的最长时间，超过时间会被强制回收。 默认为20000（20秒）。 
| jdbcMaxWaitTime           | 这是一个底层配置，让连接池可以在长时间无法获得连接时， 打印一条日志，并重新尝试获取一个连接。（避免因为错误配置导致沉默的操作失败）。 默认为20000（20秒）。 

## Activiti Services API

| 服务 | 功能 
| --- | --- 
| `RepositoryService`   | 管理流程定义 
| `TaskService`         | 任务管理 
| `IdentityService`     | 组织机构管理 
| `FormService`         | 一个可选服务，任务表单管理 
| `RuntimeService`      | 执行管理，包括启动、推进、删除流程实例等操作 
| `ManagementService`   |  
| `HistoryService`      | 历史管理(执行完的数据的管理) 

- `ProcessEngine` : 在`Activiti`中最核心的类，其他的类都是由他而来。调用ProcessEngines的`getDefaultProceeEngine`方法时会自动加载classpath下名为 activiti.cfg.xml 文件。

- `RepositoryService` : `Activiti`的仓库服务类。所谓的仓库指流程定义文档的两个文件：bpmn文件和流程图片。

- `TaskService` : `activiti`的任务服务类。可以从这个类中获取任务的信息。

- `IdentityService`
- `FormService` 

- `RuntimeService` : 是`activiti`的流程执行服务类。可以从这个服务类中获取很多关于流程执行相关的信息。

- `ManagementService`

- `HistoryService` : 是`activiti`的查询历史信息的类。在一个流程执行完成后，这个对象为我们提供查询历史信息。

- `ProcessDefinition` : 流程定义类。可以从这里获得资源文件等。

- `ProcessInstance` : 代表流程定义的执行实例。一个流程实例包括了所有的运行节点。我们可以利用这个对象来了解当前流程实例的进度等信息。流程实例就表示一个流程从开始到结束的最大的流程分支，即一个流程中流程实例只有一个。

- `Execution` : `Activiti`用这个对象去描述流程执行的每一个节点。在没有并发的情况下，`Execution`就是同`ProcessInstance`。流程按照流程定义的规则执行一次的过程，就可以表示执行对象`Execution`。


## Activiti DataBase (表 - 23)

> `Activiti`的后台是有数据库的支持，所有的表都以`ACT_`开头，第二部分是表示表的用途的两个字母标识。用途也和服务的`API`对应。

| 表名 | 功能 
| --- | --- 
| `ACT_EVT_*`       |  
| `ACT_GE_*`        | 通用数据， 用于不同场景下，如存放资源文件 
| `ACT_HI_*`        | `HI`表示`history`。 这些表包含历史数据，比如历史流程实例， 变量，任务等等。 
| `ACT_ID_*`        | `ID`表示`identity`。 这些表包含身份信息，比如用户，组等等。 
| `ACT_PROCDEF_*`   |  
| `ACT_RE_*`        | `RE`表示`repository`。 这个前缀的表包含了流程定义和流程静态资源 （图片，规则，等等）。 
| `ACT_RU_*`        | `RU`表示`runtime`。 这些运行时的表，包含流程实例，任务，变量，异步任务，等运行中的数据。 `Activiti`只在流程实例执行过程中保存这些数据， 在流程结束时就会删除这些记录。 这样运行时表可以一直很小速度很快。 

###  ACT_EVT_* (日志数据表 - 1)

| 表名 | 功能 
| --- | --- 
| `ACT_EVT_LOG` | 日志数据表 

- ACT_EVT_LOG ( evt_log ) : 用来保存日志

| 字段名 | 说明 
| ---   | --- 
| `LOG_NR_`         |  
| `TYPE_`           |  
| `PROC_DEF_ID_`    |  
| `PROC_INST_ID_`   |  
| `EXECUTION_ID_`   |  
| `TASK_ID_`        |  
| `TIME_STAMP_`     |  
| `USER_ID_`        |  
| `DATA_`           |  
| `LOCK_OWNER_`     |  
| `LOCK_TIME_`      |  
| `IS_PROCESSED_`   |  

### ACT_GE_* (通用数据表 - 2) 
 
| 表名 | 功能 
| --- | --- 
| `ACT_GE_BYTEARRAY`    | 二进制数据表 
| `ACT_GE_PROPERTY`     | 属性数据表存储整个流程引擎级别的数据,初始化表结构时，会默认插入三条记录 

- ACT_GE_BYTEARRAY ( bytearray ) : 用来保存部署文件的大文本数据

| 字段名 | 说明 
| ---   | --- 
| `ID_`             | 资源文件编号，自增长
| `REV_`            | 版本号 
| `NAME_`           | 资源文件名称 
| `DEPLOYMENT_ID_`  | 来自于父表`ACT_RE_DEPLOYMENT`的主键 
| `BYTES_`          | 大文本类型，存储文本字节流 
| `GENERATED_`      | 

- ACT_GE_PROPERTY ( property ) : 属性数据表。存储这个流程引擎级别的数据。

| 字段名 | 说明 
| ---   | --- 
| `NAME_`   | 属性名称 
| `VALUE_`  | 属性值 
| `REV_`    | 版本号 

### ACT_HI_* (历史数据库表 - 8)

| 表名 | 功能 
| --- | --- 
| `ACT_HI_ACTINST`          | 历史节点表 
| `ACT_HI_ATTACHMENT`       | 历史附件表 
| `ACT_HI_COMMENT`          | 历史意见表 
| `ACT_HI_DETAIL`           | 历史详情表，提供历史变量的查询 
| `ACT_HI_IDENTITYLINK`     | 历史流程人员表 
| `ACT_HI_PROCINST`         | 历史流程实例表 
| `ACT_HI_TASKINST`         | 历史任务实例表 
| `ACT_HI_VARINST`          | 历史变量表 

- ACT_HI_ACTINST ( actinst )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                 | 标识 
| `PROC_DEF_ID_`        | 流程定义id 
| `PROC_INST_ID_`       | 流程实例id 
| `EXECUTION_ID_`       | 执行实例 
| `ACT_ID_`             | 节点id 
| `TASK_ID_`            | 任务id 
|  `CALL_PROC_INST_ID_` | 
| `ACT_NAME_`           | 节点名称 
| `ACT_TYPE_`           | 节点类型 
| `ASSIGNEE_`           | 节点任务分配人 
| `START_TIME_`         | 开始时间 
| `END_TIME_`           | 结束时间 
| `DURATION_`           | 经过时长 

- ACT_HI_ATTACHMENT ( attachment )

| 字段名 | 说明 
| ---   | --- 
| `ID_`             |  
| `REV_`            |  
| `USER_ID_`        |  
| `NAME_`           |  
| `DESCRIPTION_`    |  
| `TYPE_`           |  
| `TASK_ID_`        |  
| `PROC_INST_ID_`   |  
| `URL_`            |  
| `CONTENT_ID_`     |  

- ACT_HI_COMMENT ( comment ) : 意见表

| 字段名 | 说明 
| ---   | --- 
| `ID_`             | 标识 
| `TYPE_`           | 意见记录类型 为comment 时 为处理意见 
| `TIME_`           | 记录时间 
| `USER_ID_`        |  
| `TASK_ID_`        | 对应任务的id 
| `PROC_INST_ID_`   | 对应的流程实例的id 
| `ACTION_`         | 为AddComment 时为处理意见 
| `MESSAGE_`        | 处理意见 
| `FULL_MSG_`       |  

- ACT_HI_DETAIL ( detail ) : 启动流程或者在任务complete之后,记录历史流程变量

| 字段名 | 说明 
| ---   | --- 
| `ID_`           | 标识 
| `TYPE_`         | variableUpdate 和 formProperty 两种值 
| `PROC_INST_ID_` | 对应流程实例id 
| `EXECUTION_ID_` | 对应执行实例id
| `TASK_ID_`      | 对应任务id 
| `ACT_INST_ID`   | 对应节点id 
| `NAME_`         | 历史流程变量名称，或者表单属性的名称 
| `VAR_TYPE_`     | 定义类型 
| `REV_`          | 版本 
| `TIME_`         | 导入时间 
| `BYTEARRAY_ID_` |  
| `DOUBLE_`       | 如果定义的变量或者表单属性的类型为double，他的值存在这里 
| `LONG_`         | 如果定义的变量或者表单属性的类型为LONG ,他的值存在这里 
| `TEXT_`         | 如果定义的变量或者表单属性的类型为string，值存在这里 
| `TEXT2_`        |  |

-  ACT_HI_IDENTITYLINK ( identitylink )

| 字段名 | 说明 
| ---   | --- 
| `ID_`             |  
| `GROUP_ID_`       |  
| `TYPE_`           |  
| `USER_ID_`        |  
| `TASK_ID_`        |  
| `PROC_INST_ID_`   |  

- ACT_HI_PROCINST ( procinst )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                         | 唯一标识 
| `PROC_INST_ID_`               | 流程id
| `BUSINESS_KEY_`               | 业务编号 
| `PROC_DEF_ID_`                | 流程定义id 
| `START_TIME_`                 | 流程开始时间 
| `END_TIME_`                   | 结束时间 
| `DURATION_`                   | 流程经过时间 
| `START_USER_ID_`              | 开启流程用户id 
| `START_ACT_ID_`               | 开始节点 
| `END_ACT_ID_`                 | 结束节点 
| `SUPER_PROCESS_INSTANCE_ID_`  | 父流程流程id 
| `DELETE_REASON_`              | 从运行中任务表中删除原因 

- ACT_HI_TASKINST ( taskinst )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                 | 标识 
| `PROC_DEF_ID_`        | 流程定义id 
| `TASK_DEF_KEY_`       | 任务定义id 
| `PROC_INST_ID_`       | 流程实例id 
| `EXECUTION_ID_`       | 执行实例id 
| `NAME_`               | 任务名称  
| `PARENT_TASK_ID_`     | 父任务id 
| `DESCRIPTION_`        | 说明 
| `OWNER_`              | 拥有人（发起人） 
| `ASSIGNEE_`           | 分配到任务的人 
| `START__TIME_`        | 开始任务时间 
| `CLAIM_TIME`          |  
| `END_TIME_`           | 结束任务时间 
| `DURATION_`           | 时长 
| `DELETE_REASON_`      | 从运行时任务表中删除的原因 
| `PRIORITY_`           | 紧急程度 
| `DUE_DATE_`           |  
| `FROM_KEY_`           |  

- ACT_HI_VARINST ( varinst )

| 表名 | 功能 
| --- | --- 
| `ID_`             |  
| `PROC_INST_ID_`   |  
| `EXECUTION_ID_`   |  
| `TASK_ID_`        |  
| `NAME_`           |  
| `VAR_TYPE_`       |  
| `REV_`            |  
| `BYTEARRAY_ID_`   |  
| `DOUBLE_`         |  
| `LONG_`           |  
| `TEXT_`           |  
| `TEXT2_`          |  

### ACT_ID_* (组织机构表 - 4)
> 这四张表很常见，基本的组织机构管理，关于用户认证方面建议还是自己开发一套，组件自带的功能太简单，使用中有很多需求难以满足 

| 表名 | 功能 
| --- | --- 
| `ACT_ID_GROUP`        | 用户组信息表 
| `ACT_ID_INFO`         | 用户扩展信息表 
| `ACT_ID_MEMBERSHIP`   | 用户与用户组对应信息表 
| `ACT_ID_USER`         | 用户信息表 

- ACT_ID_GROUP ( group ) : 用来存储用户组信息。

| 字段名 | 说明 
| ---   | --- 
| `ID_`         | 用户组名 
| `REV_`        | 版本号 
| `NAME_`       | 用户组描述信息 
| `TYPE_`       | 用户组类型 
 
- ACT_ID_INFO ( info )

| 字段名 | 说明 
| ---   | --- 
| `ID_`         |  
| `REV_`        |  
| `USER_ID_`    |  
| `TYPE_`       |  
| `KEY_`        |  
| `VALUE_`      |  
| `PASSWORD_`   |  
| `PARENT_ID_`  |  

- ACT_ID_MEMBERSHIP ( membership ) : 用来保存用户的分组信息

| 字段名 | 说明 
| ---   | --- 
| `USER_ID_`    | 用户名 
| `GROUP_ID_`   | 用户组名 

- ACT_ID_USER ( user ) : 用户信息

| 字段名 | 说明 
| ---   | --- 
| `ID_`             | 用户名 
| `REV_`            | 版本号 
| `FIRST_`          | 用户名称 
| `LAST_`           | 用户姓氏 
| `EMAIL_`          | 邮箱 
| `PWD_`            | 密码 
| `PICTURE_ID_`     |  

### ACT_PROCDEF_* (流程定义数据表 - 1)

| 表名 | 功能 
| --- | --- 
| `ACT_PROCDEF_INFO` | 流程定义信息表 

- ACT_PROCDEF_INFO ( info ) : 流程定义信息

| 字段名 | 说明 
| ---   | --- 
| `ID_`             |  
| `PROC_DEF_ID_`    |  
| `REV_`            |  
| `INFO_JSON_ID_`   |  

### ACT_RE_* (资源库流程规则表 - 3)

| 表名 | 功能 
| --- | --- 
| `ACT_RE_DEPLOYMENT`   | 部署信息表 
| `ACT_RE_MODEL`        | 流程设计模型部署表 
| `ACT_RE_PROCDEF`      | 流程定义数据表 

- ACT_RE_DEPLOYMENT ( deployment ) : 用来存储部署时需要持久化保存下来的信息

| 字段名 | 说明 
| ---   | --- 
| `ID_`             | 部署编号，自增长 
| `NAME_`           | 部署包的名称 
| `CATEGORY_`       |  
| `DEPLOY_TIME_`    | 部署时间 

- ACT_RE_MODEL ( model )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                             |  
| `REV_`                            |  
| `NAME_`                           |  
| `KEY_`                            |  
| `CATEGORY_`                       |  
| `CREATE_TIME_`                    |  
| `LAST_UPDATE_TIME_`               |  
| `VERSION_`                        |  
| `META_INFO_`                      |  
| `DEPLOYMENT_ID_`                  |  
| `EDITOR_SOURCE_VALUE_ID_`         |  
| `EDITOR_SOURCE_EXTRA_VALUE_ID_`   |  

- ACT_RE_PROCDEF ( procdef ) : 业务流程定义数据表

| 字段名 | 说明 
| ---   | --- 
| `ID_`                     | 流程ID，由“流程编号：流程版本号：自增长ID”组成 
| `REV_`                    |  
| `CATEGORY_`               | 流程命名空间（该编号就是流程文件targetNamespace的属性值） 
| `NAME_`                   | 流程名称（该编号就是流程文件process元素的name属性值） 
| `KEY_`                    | 流程编号（该编号就是流程文件process元素的id属性值） 
| `VERSION_`                | 流程版本号（由程序控制，新增即为1，修改后依次加1来完成的） 
| `DEPLOYMENT_ID_`          | 部署编号 
| `RESOURCE_NAME_`          | 资源文件名称 
| `DGRM_RESOURCE_NAME_`     | 图片资源文件名称 
| `DESCRIPTION_`            |  
| `HAS_START_FROM_KEY_`     | 是否有Start From Key 
| `SUSPENSION_STATE_`       |  

注：此表和`ACT_RE_DEPLOYMENT`是多对一的关系，即，一个部署的bar包里可能包含多个流程定义文件，每个流程定义文件都会有一条记录在`ACT_REPROCDEF`表内，每个流程定义的数据，都会对于`ACT_GE_BYTEARRAY`表内的一个资源文件和PNG图片文件。和`ACT_GE_BYTEARRAY`的关联是通过程序用`ACT_GE_BYTEARRAY.NAME`与`ACT_RE_PROCDEF.NAME_`完成的，在数据库表结构中没有体现。

### ACT_RU_* (运行时数据库表 - 6)

| 表名 | 功能 
| --- | --- 
| `ACT_RU_EVENT_SUBSCR`     | 
| `ACT_RU_EXECUTION`        | 运行时流程执行实例表 
| `ACT_RU_IDENTITYLINK`     | 运行时流程人员表，主要存储任务节点与参与者的相关信息 
| `ACT_RU_JOB`              | 
| `ACT_RU_TASK`             | 运行时任务节点表 
| `ACT_RU_VARIABLE`         | 运行时流程变量数据表 

- ACT_RU_EVENT_SUBSCR ( event_subscr )

| 字段名 | 说明 
| ---   | --- 
| `ID_`             |  
| `REV_`            |  
| `EVENT_TYPE_`     |  
| `EVENT_NAME_`     |  
| `EXECUTION_ID_`   |  
| `PROC_INST_ID_`   |  
| `ACTIVITY_ID_`    |  
| `CONFIGURATION_`  |  
| `CREATED_`        |  

- ACT_RU_EXECUTION ( execution )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                 | 
| `REV_`                | 版本号 
| `PROC_INST_ID_`       | 流程实例编号 
| `BUSINESS_KEY_`       | 业务编号 
| `PARENT_ID_`          | 找到该执行实例的父级，最终会找到整个流程的执行实例 
| `PROC_DEF_ID_`        | 流程ID 
| `SUPER_EXEC_`         | 引用的执行模板 
| `ACT_ID_`             | 节点id 
| `IS_ACTIVE_`          | 是否访问 
| `IS_CONCURRENT_`      | 
| `IS_SCOPE_`           | 
| `IS_EVENT_SCOPE_`     | 
| `SUSPENSION_STATE_`   | 
| `CACHED_ENT_STATE`    |  

- ACT_RU_IDENTITYLINK ( identitylink ) : 任务参与者数据表。主要存储当前节点参与者的信息。

| 字段名 | 说明 
| ---   | --- 
| `ID_`             | 标识 
| `REV_`            | 版本 
| `GROUP_ID_`       | 组织id  
| `TYPE_`           | 类型 
| `USER_ID_`        | 用户id 
| `TASK_ID_`        | 任务id 
| `PROC_INST_ID`    | 
| `PROC_DEF_ID`     | 

- ACT_RU_JOB ( job )

| 字段名 | 说明 
| ---   | --- 
| `ID_`                     |  
| `REV_`                    |  
| `TYPE_`                   |  
| `LOCK_EXP_TIME_`          |  
| `LOCK_OWNER_`             |  
| `EXCLUSIVE_`              |  
| `EXECUTION_ID_`           |  
| `PROCESS_INSTANCE_ID_`    |  
| `PROC_DEF_ID_`            |  
| `RETRIES_`                |  
| `EXCEPTION_STACK_ID_`     |  
| `EXCEPTION_MSG_`          |  
| `DUEDATE_`                |  
| `REPEAT_`                 |  
| `HANDLER_TYPE_`           |  
| `HANDLER_CFG_`            |  

- ACT_RU_TASK ( task ) : 运行时任务数据表。

| 字段名 | 说明 
| ---   | --- 
| `ID_`               | 
| `REV_`              | 
| `EXECUTION_ID_`     | 执行实例的id 
| `PROC_INST_ID_`     | 流程实例的id 
| `PROC_DEF_ID_`      | 流程定义的id,对应act_re_procdef 的id_ 
| `NAME_`             | 任务名称，对应 task 的name 
| `PARENT_TASK_ID_`   | 对应父任务 
| `DESCRIPTION_`      | 
| `TASK_DEF_KEY_`     | task 的id 
| `OWNER_`            | 发起人 
| `ASSIGNEE_`         | 分配到任务的人 
| `DELEGATION_`       | 委托人 
| `PRIORITY_`         | 紧急程度 
| `CREATE_TIME_`      | 发起时间 
| `DUE_TIME_`         | 审批时长 
| `SUSPENSION_STATE_` |  

- ACT_RU_VARIABLE ( variable ) : 运行时流程变量数据表。

| 字段名 | 说明 
| ---   | --- 
| `ID_`           | 标识 
| `REV_`          | 版本号 
| `TYPE_`         | 数据类型 
| `NAME_`         | 变量名 
| `EXECUTION_ID_` | 执行实例id 
| `PROC_INST_ID_` | 流程实例id 
| `TASK_ID_`      | 任务id 
| `BYTEARRAY_ID_` | 
| `DOUBLE_`       | 若数据类型为double ,保存数据在此列 
| `LONG_`         | 若数据类型为long保存数据到此列 
| `TEXT_`         | string 保存到此列 
| `TEXT2_`        | 


## 总结
流程文件部署主要涉及到3个表，分别是：`ACT_GE_BYTEARRAY`、`ACT_RE_DEPLOYMENT`、`ACT_RE_PROCDEF`。主要完成“部署包”-->“流程定义文件”-->“所有包内文件”的解析部署关系。从表结构中可以看出，流程定义的元素需要每次从数据库加载并解析，因为流程定义的元素没有转化成数据库表来完成，当然流程元素解析后是放在缓存中的，具体的还需要后面详细研究。 