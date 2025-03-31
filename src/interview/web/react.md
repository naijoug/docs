---
title: React
icon: hashtag

index: true

---

<!-- more -->

## 组件

### ❓函数组件与类组件有什么区别

：：：details 💡

函数组件与类组件的主要区别如下：

1. **语法**：函数组件是一个简单的JavaScript函数，而类组件需要继承自`React.Component`。
2. **状态管理**：类组件可以使用`this.state`和`this.setState`来管理状态，而函数组件通常使用React Hooks（如`useState`）来管理状态。
3. **生命周期方法**：类组件可以使用生命周期方法（如`componentDidMount`、`componentDidUpdate`等），而函数组件通过`useEffect` Hook来实现类似的功能。
4. **性能**：函数组件通常比类组件更轻量，且在React的后续版本中，函数组件的性能得到了显著提升。
5. **代码简洁性**：函数组件通常更简洁，易于理解和维护。

随着React的发展，函数组件和Hooks已经成为编写React组件的首选方式。

：：：