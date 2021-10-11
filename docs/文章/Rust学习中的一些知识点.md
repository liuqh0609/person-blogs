---
title: Rust学习过程中记录的一些知识点
describe: 记录学习过程中的一些难以理解点的知识点，并在学习过程中不断完善。在每个阶段都会有不同的理解，及时更新自己的认知
tag: Rust
---

# Rust 学习记录

## 所有权

所有权是`Rust`中最 nb 的特点。其他语言(`Javascript`)在管理内存方面要么是利用 `GC`，在运行时不断寻找不需要的内存进行释放，要么就是手动管理内存。但是`Rust`就另辟蹊径，选择了第三种：

**在编译时，通过规则的约束来完成对内存的管理**。这样就可以减少运行时的一些负担

总结一下，所有权解决的问题：

1. 跟踪代码的哪些部分正在使用 `heap` 的哪些数据
2. 最小化`heap`中的重复数据量
3. 清理`heap`中未使用的数据，以避免空间不足

> 管理内存。
> 针对`heap`中的数据.

## 所有权规则

1. 每个值都有一个变量，这个变量就是该值的所有者
2. 每个值同事只能有一个所有者
3. 当所有者超出作用域时，该值会被删除

<hr/>

## 借用和引用

借用的语法是`&`

```rust
let s = "hello,rust";
let s1 = &s;
```

默认情况下，rust 中的借用都是只读的，如果想要借用的为可变的需要使用`&mut`。

可变引用有一个很大的限制，就是在同一时间同一作用域下只能使用一个可变引用

```rust
fn main() {
    let mut s = "hello,rust";
    let s1 = &mut s;
    let s2 = &mut s;
    print!("{}{}", s1, s2)
}
```

这里会抛出一个错误`error[E0499]: cannot borrow 's' as mutable more than once at a time`。

> 其实在 rust 中借用和引用是同一个概念，但是与其他语言不同的是，其他语言中的引用其实就是共享所用权，对值有无差别的访问权限，可读可写。
> 但是 rust 默认情况下的引用是只读的

> 要清楚的认识到 rust 中设计所有权的用意，就是为了抛弃 GC（垃圾回收机制）来减轻运行时的负担，所有权的设计可以让 rust 在编译器通过检测规则来看使用者的代码设计是否符合其所有权的规则

<hr/>

## 悬垂引用 dangling pointer

`dangling pointer`：即一个指针指向了一个内存地址，但是该内存空间已经被释放的情况。（意简言赅，指了个寂寞）

```rust
fn main(){
  let jimo_pointer = dangle(); // 这里就产生了悬垂指针，因为在dangle执行完毕时，内部的s所占用的内存已经被释放
}

fn dangle() ->&String{
  let s = String::from("hello");
  &s
}
```

> 其实这里牵扯到了生命周期的问题

## String 和 &str 的区别

- `String`可以看做是由三个变量所组成的结构体：

  - 指向堆上连续内存的一个指针(红框)
  - 这块内存的总长度`capacity`（绿框）
  - 内存中已经使用的总大小`length`(蓝框)

> 这个对象存放在栈上。

```rust
let s = String::from("hello,rust");
```

- `String`类型是可以动态调整缓冲区容量的，所以有`push_str`等方法，可以动态扩充容量，其实`String`和`Vec<T>`类型的行为和特性在本质上一致，只不过`String`规定只能保存标准的`UTF-8`文本。

  ![20211003173322](http://qiniu.liuqh.cn/blogImage/20211003173322.png)

- `&str`是字符串切片（slice），是对 String 的一种借用形式。他表示的是一个字符串的区间。并且它的容量是不固定的（`unsized`），它常用来表示一个引用，所以在使用中通常是`&str`，而不是`str`。字符串字面量默认就是`&str`

![20211003171141](http://qiniu.liuqh.cn/blogImage/20211003171141.png)

> 往往在函数的参数中，会使用`&str`，而不用`&String`，因为这样就可以同时接收`String`和`&str`两种类型的参数了(`String` 类型只需要使用切片搞一下`s[..]`)
> `fn a_method( s: &str ) ->&str {}`

<hr/>

## Struct 中的 impl 的关联函数

关联函数：即在`impl`中定义的不把`self`当做第一个参数的函数。
通常用来做构造函数

- 关联函数使用`::`来访问。例如`String::from()`。
- 关联函数不是一个方法，而是一个函数，它的调用不是通过实例，而是通过结构体本身来调用的。

> `impl`中一般的方法都是由`&self`作为第一个参数的，这种方法的调用是通过点的形式调用的。

<hr/>

## 枚举 enum 以及枚举变体

通过两个例子来说明：
我们利用枚举来定义一个 `localhost` 的 `IPV4` 地址，利用结构体可以这样做：

```rust
enum IPAddrKind {
    IPV4,
    IPV6,
}

struct IPAddr {
    kind: IPAddrKind,
    address: String,
}

fn main() {
    let localhost = IPAddr {
        kind: IPAddrKind::IPV4,
        address: String::from("127.0.0.1"),
    };
}

```

当我们使用枚举的变体时，这里的变体是指**在 Rust 中允许将数据直接附加到枚举的变体中**。

> 可以理解为，当我们使用枚举的变体时，其实就是 `Rust`为我们默默的定义了一个函数（有一说一 Rust 里面的语法糖多到爆炸）

```rust
enum IPAddrKind {
    IPV4(u32,u32,u32,u32),
    IPV6(String),
}


fn main() {
    let localhost = IPAddrKind::IPV4(127,0,0,1);
}
```

这里达到的效果和上面的例子是一样的。Rust 中的枚举是真正将枚举用来提高代码生产力的，十分好用。

<hr/>

## Options 枚举

**在 Rust 中没有 Null**。`Option`可以理解为就是用来替代 Null 的一种解决方案`

> 毕竟 Null 之父，在 2009 年的时候说过：`Null`的设计是一个巨大的失误，有多大呢，据说这个失误价值十亿美元...

在标准库中`Option<T>`的定义:

```rust
enum Option<T>{
  Some(T),
  None,
}
```

首先我们要明确 Option 其实就是描述一个变量可能存在也可能不存在的这么一个情况。所以这个定义就是反映了这样一种描述。
如果这个值存在的情况下就返回 `Some`，不存在就是 `None`

下面这三个都是在**预导入**模块中的，所以我们可以直接使用，而不用`use`来导入：

> - Option
> - Some
> - None
