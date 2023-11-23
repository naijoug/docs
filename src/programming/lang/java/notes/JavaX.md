# Java X

## Java 5

- 静态导入
    > 用于导入类的某个静态属性或方法。使用静态导入可以简化程序对类静态属性和方法的调用。
    >
    > 语法 : `import static 包名.类名.静态属性|静态方法|*`

    ```java
    import static java.lang.System.out
    out.print("Hello!");
    ```

- 增强 for 循环
    > 增强 for 循环只能用在数组、或实现 Iterable 接口的集合类上
    >
    > 语法 : `for(变量类型 变量 : 需迭代的数组或集合){ }`

    ```java
    for(String str : list) {
        System.out.print(str);
    } 
    ```

- 可变参数
    > 允许为方法定义长度可变的参数。
    >
    > 语法 : `数据类型... 变量名`  `(int... number)`

    * 可变长参数是Object[] 数组。（可变参数里存的是对象数组）
    * JDK中具有可变参数的类Arrays.asList()方法。
    * 可变参数的细节
        + 声明 : 在一个方法中，最多只能有一个可变参数。可变参数只能放在参数列表的最后面。
        + 调用 : 当使用可变参数时，可以传0或多个参数。当使用可变参数时，也可以传一个数组进去，就表示多个参数。
        + 使用 : 在方法内部使用时，就是在使用一个数组。当调用时没有传参数时（传了0个），这时在方法内部的参数数组是有值的（不为null），但长度为0.


- 自动装箱/拆箱
    > 自动装箱：指开发人员可以把一个基本数据类型直接赋给对应的包装类。
    >
    > 自动拆箱：指开发人员可以把一个包装类对象直接赋给对应的基本数据类型。

    | 包装类 | 基本数据类型 
    | -- | -- 
    | Byte      | byte 
    | Short	    | short 
    | Integer	| int 
    | Long	    | long 
    | Boolean	| boolean 
    | Float	    | float 
    | Double	| double 
    | Character	| char 

- 枚举类
    > `enum` 关键字用于定义一个枚举类。

    * 枚举类也是一种特殊形式的`Java`类。
    * 枚举类中声明的每一个枚举值代表枚举类的一个实例对象。
    * 与`Java`中的普通类一样，在声明枚举类时，也可以声明属性、方法和构造函数.
    * 枚举类可以声明抽象方法,但是要有具体的枚举值去实现.
    * 枚举类也可以实现接口(序列化)、或继承抽象类。
    * JDK5中扩展了`switch`语句，它除了可以接收`int`, `byte`, `char`, `short`外，还可以接收一个枚举类型(`enum`)。
    * 若枚举类只有一个枚举值，则可以当作单态设计模式使用。

## Java 8
> Objects are a poor man's closures.
>
> Closures are a poor man's objects.

- Lambda
    > Lambda 表达式 : 闭包。允许将函数作为一个方法的参数。
    >
    > 语法格式 : `(parameters) -> expression` || `(parameters) -> { statements; }`

- Optional
    > 可选类型，用于解决空指针异常的问题

- 接口方法可以定义默认实现
    
    ```java
    public interface Tool {
        default void work() {
            System.out.println("use tool to work!");
        }
    }
    ```

- Functional Interface : 函数式接口，也称为 SAM。
    * SAM : (Single Abstract Method) 一类特殊的接口，只定义唯一一个抽象方法接口(不包括 Object 隐式公共方法)
    * `@FunctionalInterface` : 标记接口是函数式接口