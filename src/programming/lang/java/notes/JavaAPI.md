# JAVA API

## Object
> `Object`描述的是所有类的通用属性与方法。

- `toString()` 返回对象的描述信息  (类名@哈希码值的十六进制形式 : `java.lang.Object@61bbe9ba` )
- `equals()`  返回的是比较的结果  如果相等返回`true`，否则`false`，比较的是对象的内存地址值。
- `hashCode()` 返回该对象的哈希码值： 采用操作系统底层实现的哈希算法。 
    * 同一个对象的哈希码值是唯一的。
    * `java`规定如果两个对象`equals`返回`true`，那么这两个对象的`hashCode`码必须一致。

## System
> System : 可以获取系统的属性

``` java
// 获取系统属性
Properties properties = System.getProperties();
properties.list(System.out);    //输出系统属性
System.getProperty("os.name");  //获取操作系统名字
(System.getenv("JAVA_HOME");    //获取环境变量
```

## Runtime
> `Runtime` : 类主要描述的是应用程序运行的环境。

``` java
exit() 							// 退出虚拟机
long freeMemory() 				// 获取可用内存数
gc() 							// 调用垃圾回收器程序，但是调用该方法的时候不会马上就运行gc
long maxMemory() 				// 获取JVM最大内存容量
long totalMemory() 			// 获取总内存数
Process exec(String command) 	// 启动一个字符串命令的进程
```


## Date
> `Date` : 类封装的是系统的当前时间。(但是`Date`已经过时了，`sun`推荐使用`Calendar`类。)

``` java
// SimpleDateFormat 日期格式化类
SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
System.out.print(format.format(new Date()));
// Calendar: 该类是一个日历的类，封装了年月日时分秒时区。
Calendar calendar = Calendar.getInstance();
calendar.get(calendar.YEAR);        //年
calendar.get(calendar.MONTH) + 1;   //月,月份从0开始
calendar.get(calendar.DAY_OF_MONTH);//日
calendar.get(calendar.HOUR);        //时
calendar.get(calendar.MINUTE);      //分
calendar.get(calendar.SECOND);      //秒
```


## Math
> `Math` : 类封装了很多数学的功能

``` java
static double ceil(double a)    // 返回大于等于指定小数的最小整数
static double floor(double a)   // 返回小于等于指定小数的最大整数
static dobule round(double a)   // 四舍五入
static double random()	        // 返回大于0.0 小于1.0的小数 1.0<= x < 11.0
```

## String
> `String` : 类描述的是文本字符串序列。 

``` java
//获取方法
int length()            // 获取字符串的长度
char charAt(int index)  // 获取特定位置的字符 (角标越界)
int indexOf(String str) // 获取特定字符的位置(overload)
int lastIndexOf(int ch) // 获取最后一个字符的位置
//判断方法
boolean endsWith(String str)    // 是否以指定字符结束
boolean isEmpty()               // 是否长度为0 如："" null V1.6
boolean contains(CharSequences) // 是否包含指定序列 应用：搜索
boolean equals(Object anObject) // 是否相等
boolean equalsIgnoreCase(String anotherString) // 忽略大小写是否相等
//转换方法
String(char[] value)    // 将字符数组转换为字符串
String(char[] value, int offset, int count)
Static String valueOf(char[] data)
static String valueOf(char[] data, int offset, int count)
char[] toCharArray()    // 将字符串转换为字符数组
//其它方法
String replace(char oldChar, char newChar)  // 替换
String[] split(String regex)                // 切割
String substring(int beginIndex) 
String substring(int beginIndex, int endIndex) // 截取字串
String toUpperCase()    // 转大写
String toLowerCase()    // 转小写
String trim()           // 去除空格
```

## StringBuffer
> 由于`String`是不可变的，所以导致`String`对象泛滥，在频繁改变字符串对象的应用中，需要使用可变的字符串缓冲区类。    

* 默认缓冲区的容量是16。
* 线程安全的所有的缓冲区操作方法都是同步的。效率很低。

``` java
//添加方法
StringBuffer()  // 在创建对象的时候赋值
append()        // 在缓冲区的尾部添加新的文本对象
insert()        // 在指定的下标位置添加新的文本对象
//查看
toString()              // 返回这个容器的字符串
indexOf(String str)     // 返回第一次出现的指定子字符串在该字符串中的索引。
substring(int start)    // 从开始的位置开始截取字符串
//修改
replace(int start int endString str)    // 使用给定 String 中的字符替换此序列的子字符串中的字符。该子字符串从指定的 start 处开始，一直到索引 end - 1 处的字符
setCharAt(int index char ch)            // 指定索引位置替换一个字符
//删除
delete(int start, int end) // start<= char <end 
//清空缓冲区 : delete(0, sb.length());
deleteCharAt(int index)
//反序
reverse() // 把字符串反序输出。
```

## StringBuilder
> `StringBuilder` 是`JDK1.5`之后提出的，线程不安全，但是效率要高。用法与`StringBuffer`类似。


## Collection

| 类型 | 使用场景 
| --- | ---   
| `Collection`  | 保存若干个对象的时候使用集合。
| `List`        | 需要保留存储顺序, 并且保留重复元素, 使用`List`. </br> 如果查询较多, 那么使用`ArrayList`. </br> 如果存取较多, 那么使用`LinkedList`. </br>如果需要线程安全, 那么使用`Vector`. 
|  `Set`        | 不需要保留存储顺序, 并且需要去掉重复元素, 使用`Set`. </br> 如果我们需要将元素排序, 那么使用`TreeSet`. </br> 如果我们不需要排序, 使用`HashSet`, `HashSet`比`TreeSet`效率高. </br> 如果我们需要保留存储顺序, 又要过滤重复元素, 那么使用`LinkedHashSet`.  

- Array vs Collection

    | 类型 | 长度 | 存储数据类型 | 工具类 
    | -- | -- | -- | --
    | 数组 | 固定 | 基本数据类型 & 对象 | `Arrays` 
    | 集合 | 可变 | 只能是对象         | `Collections`

- `Comparable` vs `Comparator`

- `List` : 有存储顺序，可重复

    | List | 原理 | 线程安全 | 特点 | 默认大小 & 扩容
    | --- | --- | --- | --- | ---
    | ArrayList     | 数组实现 | 否 | 查找快，增删慢    | 默认大小10，扩容 50% + 1
    | LinkedList    | 链表实现 | 否 | 增删快，查找快    | 不需要扩容
    | Vector        | 数组实现 | 是 | 查找快，增删慢    | 扩容 100%

- `Set` : 无存储顺序，不可重复

    | Set  | 原理 | 线程安全 | 特点
    | --- | --- | --- | --- 
    | HashSet       | 哈希表实现      | 否 | 存取快        
    | TreeSet       | 红-黑树实现      | 否 | 默认对元素进行排序   
    | LinkedHashSet | 哈希表和链表实现  | 否 | 保留存储顺序      

- `Map` : 键可以重复，值不可以重复

    | Map | 原理 | 线程安全 | 特点
    | --- | --- | --- | ---
    | HashMap       | 哈希表实现      | 否 | 存取快，可以存入 null，key需要唯一
    | TreeMap       | 红-黑树实现     | 否 | 默认对元素进行排序
    | HashTable     | 哈希表实现      | 否 | 存取快，元素无序
    | LinkedHashMap | 哈希表和链表实现 | 否 | 

- `{{}}` : 双括号初始化
    > 原理 :
    > * 第一层括号：定义一个内部匿名类(Anonymous Inner Class)
    > * 第二层括号：是一个实例初始化块(instance initializer block)，这个在内部匿名类初始化时被执行
    >
    > 问题
    > * 可能导致串行化失败。匿名内部类声明方式，引用中持有外部类的引用，会有内存泄露的危险。串行化这个集合时，外部类也会被串行化，如果外部类没有实现 Serialize 接口，会报错
    > * 实质上是声明了一个 HashMap 的子类。有些序列化第三库，是不支持串行化 HashMap 的子类的。

    ``` java
    // List 双括号初始化
    List list = new ArrayList<String>() {{
        add("one");
        add("two");
    }};
    // Map 双括号初始化
    Map map = new HashMap() {{
        put("one", 1);
        put("two", 2);
    }};
    ```

- traverse : 遍历
    * 下标 `for` 循环遍历
    * `增强for` 遍历
    * `forEach` 遍历
    * 迭代器 `Iterator` 遍历

    ```java 
    // 1. 数组
    String[] strArr = new String[] { "one", "two"};
    // 下标 for
    for(int i = 0; i < strArr.length; i++) {
        System.out.println(strArr[i]);
    }
    // 增强 for
    for(String str : strArr) {
        System.out.println(str);
    }

    //2. List
    List<String> list = new ArrayList<>();
    list.add("1");
    list.add("2");
    // 下标 for
    for (int i = 0; i < list.size(); i++) {
        System.out.println(list.get(i));
    }
    // 增强 for
    for (String str : list) {
        System.out.println(str);
    }
    // forEach
    list.forEach(System.out::println);
    // 迭代器
    for (Iterator<String> iterator = list.iterator(); iterator.hasNext();) {
        System.out.println(iterator.next());
    }

    //3. Map
    Map<String, String> map = new HashMap<>();
    map.put("1", "one");
    map.put("2", "two");
    // for - Entry
    for (Map.Entry<String, String> entry : map.entrySet()) {
        System.out.println(entry.getKey() + ":" + entry.getValue());
    }
    // for - keys
    for (String key : map.keySet()) {
        System.out.println(key + ":" + map.get(key));
    }
    // for - values
    for (String value : map.values()) {
        System.out.println(value);
    }
    // forEach
    map.values().forEach(System.out::println);
    ```