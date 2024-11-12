---
title: Markdown
icon: hashtag

index: true
order: 1

---

> `Markdown` 主要是为了方便写作而生的，编写完之后最终是转化为了 `HTML` 文档，而且也是完全兼容 `HTML` 格式文档，可以插入 `HTML` 格式文档。整理 `Markdown` 常用的标记语法。

<!-- more -->

## Reference

- [Markdown 官网语法](http://daringfireball.net/projects/markdown/syntax)
- [Markdown 基本语法](https://github.com/younghz/Markdown)
- [Markdown 中文网](http://www.markdown.cn/)

## Editor

- [MWeb](http://zh.mweb.im/)
- [MarkdownPad](http://markdownpad.com)
- [Milkdown](https://milkdown.dev/) 👉🏻 [🐙](https://github.com/Milkdown/milkdown)
    > 🍼 Plugin driven WYSIWYG markdown editor framework.
- [MacDown][https://macdown.uranusjr.com/] 👉🏻 [🐙](https://github.com/MacDownApp/macdown)
    > Open source Markdown editor for macOS.

## Usage

### Span (行内元素)

   | 效果 | 格式
   | -- | --
   | **强调**      | `**文本**`
   | *斜体*        | `*文本*`  
   | ~~删除线~~    | `~~文本~~`
   | 内嵌代码      | `` `代码` ``
   | 链接          | `[显示文本](链接地址)`
   | 图片          | `![图片文本](图片地址)`
   | Email         | `<mail@mail.com>`

### Block (块区元素)
 
  | 效果 | 格式
  | -- | --
  | 换行符                | 在行尾输入两个以上空格
  | 标题 - Setext 形式    | `====`、`----`
  | 标题 - atx 形式       | `# 标题1`、`## 标题2`、`### 标题3`...
  | 引用                  | `> 引用文本`  (区块引用可以嵌套使用其他`Markdown`的标记)
  | 分割线                | 三个以上的星号、减号、底线（中间可以插入空格） `****`、`----`、`- - -`、`____`
  | 列表 - 无序列表        | `*`、`+`、`-`  
  | 列表 - 有序列表        | `1.`、`2.`、`3.`...
  | 代码区块              | 代码区块需要使用4个空格或者1个Tab制表符就可以
  | 代码块                | 通过符号\`\`\`首尾包含即可，还可以设置代码语言、描述、链接地址
  | 表格                  | 表格标题需要用`|`分隔线分割，第二行需要(至少一个)`|`分割线，内容区域分割线与标题区域对应即可

  \`\`\` [代码语言] [代码描述(文件名、位置...)] [链接地址] [链接描述] 
    code
  \`\`\`

  ```md
  // 表格对齐方式 : 通过第二行控制
  //      + 左对齐(默认) : `:-`、`:---`  
  //      + 居中 : `:`、`:-:`、`:---:`  
  //      + 右对齐 : `-:`、`---:`  
  
  // 写法一：
  One        | Two       | Three
  ---        | ---       | ---
  T1(0,0)    | T1(0,1)   | T1(0,2)
  T1(1,0)    | T1(1,1)   | T1(1,2)
  T1(2,0)    | T1(2,1)   | T1(2,2)
  // 写法二：
  | One      | Two       | Three     |
  | ---      | ---       | ---       |
  | T2(0,0)  | T2(0,1)   | T2(0,2)   |
  | T2(1,0)  | T2(1,1)   | T2(1,2)   |
  | T2(2,0)  | T2(2,1)   | T2(2,2)   |
  // 写法三：格式简洁、清晰（推荐）
  | One        | Two       | Three
  | :---       | :---:     | ---:
  | T3(0,0)    | T3(0,1)   | T3(0,2)
  | T3(1,0)    | T3(1,1)   | T3(1,2)
  | T3(2,0)    | T3(2,1)   | T3(2,2)
  ```

  One         | Two       | Three
  ---         | ---       | ---
  T1(0,0)     | T1(0,1)   | T1(0,2)
  T1(1,0)     | T1(1,1)   | T1(1,2)
  T1(2,0)     | T1(2,1)   | T1(2,2)
      
  | One       | Two       | Three     |
  | ---       | ---       | ---       |
  | T2(0,0)   | T2(0,1)   | T2(0,2)   |
  | T2(1,0)   | T2(1,1)   | T2(1,2)   |
  | T2(2,0)   | T2(2,1)   | T2(2,2)   |
      
  | One         | Two       | Three
  | :---        | :---:     | ---:
  | T3(0,0)     | T3(0,1)   | T3(0,2)
  | T3(1,0)     | T3(1,1)   | T3(1,2)
  | T3(2,0)     | T3(2,1)   | T3(2,2)

- 其它元素

  | 效果 | 格式
  | -- | --
  | 自动链接  | `<链接地址>`
  | 脚注      | 在文文本中插入脚注 `[^n]`,文章结尾脚注格式 `[^n]:脚注内容`
  | 反斜杠    | 用于展示Markdown中已定义的标记 `\标记符号`
  | 锚点      | 插入锚点 `[锚点描述](#锚点名)` ，在锚点要跳转的地方插入 `## [锚点文本](id:锚点名)`
  
## [Mermaid](https://github.com/mermaid-js/mermaid)
> Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown

### Flow Chart : 流程图

```mermaid
graph LR
    fa:fa-check-->fa:fa-coffee
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```

### Sequence Diagram : 时序图

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### Class Diagram: 类图

```mermaid
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

### State Diagram: 状态图

```mermaid
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

### Entity Relationship Diagram : 实体关系图

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

### User Journey Diagram : 用户体验旅程图

```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```

### Gantt Diagram : 甘特图

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
```

### Pie Chart : 饼图

```mermaid
%%{init: {"pie": {"textPosition": 0.5}, "themeVariables": {"pieOuterStrokeWidth": "5px"}} }%%
pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```

### Quadrant Chart : 象限图

```mermaid
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
```

### Requirement Diagram : 需求图

```mermaid
requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req
```

### Git Graph : Git 图

```mermaid
---
title: Example Git diagram
---
gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit
```

### C4 Diagram

```mermaid
C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Mindmap : 思维导图

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
``` 

### Timeline : 时间线

```mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter
```

### ZenUML : UML 图

```mermaid
zenuml
    title Demo
    Alice->John: Hello John, how are you?
    John->Alice: Great!
    Alice->John: See you later!
```
