import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,a as t,b as n,e as o,f as c}from"./app-pRGiPbnF.js";const l={},p=n("blockquote",null,[n("p",null,[n("code",null,"Structured Query Language"),o(" : 结构化查询语言，是一种对关系型数据库中的数据进行定义和操作的语言。")])],-1),d=c(`<h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> concept</h2><ul><li><p><code>SQL</code>语句的特点</p><ul><li>不区分大小写 (比如数据库认为user和UsEr是一样的)</li><li>每条语句都必须以分号 <code>;</code> 结尾</li><li><code>SQL</code>中的常用关键字有: <code>select</code>、<code>insert</code>、<code>update</code>、<code>delete</code>、<code>from</code>、<code>create</code>、<code>where</code>、<code>desc</code>、<code>order</code>、<code>by</code>、<code>group</code>、<code>table</code>、<code>alter</code>、<code>view</code>、<code>index</code>等等</li><li>数据库中不可以使用关键字来命名表、字段</li></ul></li><li><p><code>SQL</code>语句分类</p></li></ul><table><thead><tr><th>分类</th><th>全称</th><th>说明</th></tr></thead><tbody><tr><td><code>DDL</code></td><td>Data Definition Language (数据定义语句)</td><td>包括<code>create</code>和<code>drop</code>等</td></tr><tr><td><code>DML</code></td><td>Data Manipulation Language (数据操作语句)</td><td>包括<code>insert</code>、<code>update</code>、<code>delete</code>等</td></tr><tr><td><code>DQL</code></td><td>Data Query Language (数据查询语句)</td><td>包括<code>select</code>、<code>where</code>、<code>order by</code>等</td></tr></tbody></table><ul><li>约束</li></ul><table><thead><tr><th>约束字段</th><th>说明</th></tr></thead><tbody><tr><td><code>primary key</code></td><td>主键(简称PK),用来唯一地标识某一条记录，默认就包含了not null 和 unique 两个约束</td></tr><tr><td><code>foreign key</code></td><td>外键，用来建立表与表之间的联系</td></tr><tr><td><code>autoincrement</code></td><td>自动增长，必须为 integer 类型</td></tr><tr><td><code>not null</code></td><td>规定字段的值不能为<code>null</code></td></tr><tr><td><code>unique</code></td><td>规定字段的值必须唯一</td></tr><tr><td><code>default</code></td><td>指定字段的默认值</td></tr></tbody></table><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h2><h3 id="ddl-data-definition-language" tabindex="-1"><a class="header-anchor" href="#ddl-data-definition-language" aria-hidden="true">#</a> <code>DDL</code> (<code>Data Definition Language</code>)</h3><blockquote><p>数据定义语句 : create | drop</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--- 创建表</span>
<span class="token comment">/*
create table 表名 (字段名1 字段类型1, 字段名2 字段类型2, …);
create table if not exists 表名 (字段名1 字段类型1, 字段名2 字段类型2, …);
*/</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student <span class="token punctuation">(</span>id <span class="token keyword">integer</span><span class="token punctuation">,</span> name <span class="token keyword">text</span><span class="token punctuation">,</span> age <span class="token keyword">integer</span><span class="token punctuation">,</span> score <span class="token keyword">real</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student <span class="token punctuation">(</span>id <span class="token keyword">integer</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span> name <span class="token keyword">text</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">unique</span><span class="token punctuation">,</span> age <span class="token keyword">integer</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token comment">-- id作为t_student表的主键</span>
<span class="token comment">-- name字段不能为null，并且唯一</span>
<span class="token comment">-- age字段不能为null，并且默认为1</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student <span class="token punctuation">(</span>id <span class="token keyword">integer</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> autoincrement<span class="token punctuation">,</span> name <span class="token keyword">text</span><span class="token punctuation">,</span> age <span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token comment">-- id字段为自动增长主键</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_student <span class="token punctuation">(</span>id <span class="token keyword">integer</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> autoincrement<span class="token punctuation">,</span> name <span class="token keyword">text</span><span class="token punctuation">,</span> age <span class="token keyword">integer</span><span class="token punctuation">,</span> class_id <span class="token keyword">integer</span><span class="token punctuation">,</span> <span class="token keyword">constraint</span> fk_t_student_class_id_t_class_id <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>class_id<span class="token punctuation">)</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token keyword">references</span> t_class <span class="token comment">-- 新建一个外键</span>
<span class="token comment">-- t_student表中有一个叫做fk_t_student_class_id_t_class_id的外键</span>
<span class="token comment">-- 这个外键的作用是用t_student表中的class_id字段引用t_class表的id字段</span>

<span class="token comment">--- 删除表</span>
<span class="token comment">/*
drop table 表名;
drop table if exists 表名;
*/</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> t_student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dml-data-manipulation-language" tabindex="-1"><a class="header-anchor" href="#dml-data-manipulation-language" aria-hidden="true">#</a> <code>DML</code> (<code>Data Manipulation Language</code>)</h3><blockquote><p>数据操作语句 : insert | update | delete</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--- 插入</span>
<span class="token comment">/*
insert into 表名 (字段1, 字段2, …) values (字段1的值, 字段2的值, …);
*/</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_student <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> 
<span class="token comment">-- 注意: 数据库中的字符串内容应该用单引号 &#39; 括住</span>

<span class="token comment">--- 更新</span>
<span class="token comment">/*
update 表名 set 字段1 = 字段1的值, 字段2 = 字段2的值, … ;
*/</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">20</span> <span class="token punctuation">;</span>
<span class="token comment">-- 注意: 上面的示例会将t_student表中所有记录的name都改为jack，age都改为20</span>

<span class="token comment">--- 删除</span>
<span class="token comment">/*
delete from 表名 ;
*/</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> t_student <span class="token punctuation">;</span>
<span class="token comment">-- 注意: 上面的示例会将t_student表中所有记录都删掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dql-data-query-language" tabindex="-1"><a class="header-anchor" href="#dql-data-query-language" aria-hidden="true">#</a> <code>DQL</code> (<code>Data Query Language</code>)</h3><blockquote><p>数据查询语句 : select | where | order by | group by | having</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--- 查询</span>
<span class="token comment">/*
select 字段1, 字段2, … from 表名 ;
select * from 表名;
*/</span>
<span class="token keyword">select</span> name<span class="token punctuation">,</span> age <span class="token keyword">from</span> t_student <span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">;</span>  <span class="token comment">--- 条件查询</span>

<span class="token comment">--- 起别名 : 字段和表都可以起别名</span>
<span class="token comment">/*
select 字段1 别名 , 字段2 别名 , … from 表名 别名 ;
select 字段1 别名, 字段2 as 别名, … from 表名 as 别名 ;
select 别名.字段1, 别名.字段2, … from 表名 别名 ;
*/</span>
<span class="token keyword">select</span> name myname<span class="token punctuation">,</span> age myage <span class="token keyword">from</span> t_student <span class="token punctuation">;</span> 
<span class="token comment">-- 给name起个叫做myname的别名，给age起个叫做myage的别名</span>
<span class="token keyword">select</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>age <span class="token keyword">from</span> t_student s <span class="token punctuation">;</span>
<span class="token comment">-- 给t_student表起个别名叫做s，利用s来引用表中的字段</span>

<span class="token comment">--- 条件查询</span>
<span class="token comment">/*
where 字段 = 某个值; ( where 字段 is 某个值; )
where 字段 != 某个值; ( where 字段 is not 某个值; )
where 字段 &gt; 某个值;
where 字段1 = 某个值 and 字段2 &gt; 某个值 ;
where 字段1 = 某个值 or 字段2 = 某个值 ;
*/</span>
<span class="token comment">-- 将t_student表中年龄大于10 并且 姓名不等于jack的记录，年龄都改为 5</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> age <span class="token operator">=</span> <span class="token number">5</span> <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">and</span> name <span class="token operator">!=</span> ‘jack’ <span class="token punctuation">;</span>
<span class="token comment">-- 删除t_student表中年龄小于等于10 或者 年龄大于30的记录</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> t_student <span class="token keyword">where</span> age <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token operator">or</span> age <span class="token operator">&gt;</span> <span class="token number">30</span> <span class="token punctuation">;</span>
<span class="token comment">-- 将t_student表中名字等于jack的记录，height字段的值 都改为 age字段的值</span>
<span class="token keyword">update</span> t_student <span class="token keyword">set</span> score <span class="token operator">=</span> age <span class="token keyword">where</span> name <span class="token operator">=</span> ‘jack’ <span class="token punctuation">;</span>   

<span class="token comment">--- 查询数量</span>
<span class="token comment">/*
select count (字段) from 表名 ;
select count ( * ) from 表名 ;
*/</span> 
<span class="token keyword">select</span> <span class="token function">count</span> <span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> t_student <span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">count</span> <span class="token punctuation">(</span> <span class="token operator">*</span> <span class="token punctuation">)</span> <span class="token keyword">from</span> t_student <span class="token keyword">where</span> score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">;</span>

<span class="token comment">--- 排序查询结果</span>
<span class="token comment">/*
select * from t_student order by 字段 ;
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token punctuation">;</span>
<span class="token comment">-- 默认是按照升序排序（由小到大），也可以变为降序（由大到小）</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">desc</span> <span class="token punctuation">;</span>  <span class="token comment">--- 降序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">asc</span> <span class="token punctuation">;</span>   <span class="token comment">--- 升序（默认）</span>
<span class="token comment">-- 先按照年龄排序（升序），年龄相等就按照身高排序（降序）</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">asc</span><span class="token punctuation">,</span> height <span class="token keyword">desc</span> <span class="token punctuation">;</span>

<span class="token comment">--- 限制查询,分页查询</span>
<span class="token comment">/*
select * from 表名 limit 数值1, 数值2 ;
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">limit</span> <span class="token number">7</span> <span class="token punctuation">;</span>
<span class="token comment">-- 表示取最前面的7条记录，相当于select * from t_student limit 0, 7 ;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_student <span class="token keyword">limit</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">;</span> 
<span class="token comment">-- 可以理解为：跳过最前面4条语句，然后取8条记录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function i(r,u){return a(),e("div",null,[p,t(" more "),d])}const v=s(l,[["render",i],["__file","sql.html.vue"]]);export{v as default};
