---
title: 基础知识
icon: hashtag

index: true

---

<!-- more -->



## concept

- `HMR`: `Hot Module Replacement` - "热模块替换"
> 它允许在开发过程中，不刷新整个页面的情况下，动态地更新 `React` 组件。当代码发生变化时，`HMR` 可以将新的模块代码推送到客户端，并且只替换应用中改变的部分，从而提高开发效率，让开发者能够更快速地看到代码修改后的效果。

- `JSX`: `JavaScript XML`
> React 中用于描述用户界面的 JavaScript 语法扩展。它允许在 JavaScript 代码中编写类似 HTML 的代码。

- `Virtual DOM`
> React 在内存中维护的虚拟 UI 树。它通过比较新旧虚拟 DOM 的差异来最小化实际 DOM 的更新，提高渲染性能。

- `Component` - "组件"
> React 应用的基本构建块。可以是函数组件或类组件，用于封装可重用的 UI 代码和逻辑。

- `Props` - "属性"
> 从父组件向子组件传递数据的只读对象。用于组件间的数据传递。

- `State` - "状态"
> 组件内部管理的可变数据。当状态改变时，组件会重新渲染。

## 学习路径

### 入门篇

#### 基础概念
- `React Element` - "React 元素"
  > React 应用的最小构建单元，是描述 UI 一部分的普通对象。通常通过 JSX 创建。

- `Functional Component` - "函数组件"
  > 最简单的 React 组件形式，本质上是接收 props 并返回 React 元素的 JavaScript 函数。

- `Class Component` - "类组件"
  > 使用 ES6 class 语法定义的 React 组件，拥有更多特性如生命周期方法等。

- `React Fragment` - "React 片段"
  > 允许将多个元素组合而不添加额外的 DOM 节点，使用 `<>...</>` 或 `<React.Fragment>...</React.Fragment>` 语法。

#### 环境搭建
1. **使用 Create React App**
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
   ```

2. **使用 Vite**
   ```bash
   npm create vite@latest my-app -- --template react
   cd my-app
   npm install
   npm run dev
   ```

#### 第一个组件
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 使用组件
<Welcome name="React" />
```

### 进阶篇

#### Hooks API
- `useState` - "状态钩子"
  > 让函数组件使用状态，返回当前状态值和更新状态的函数。
  ```jsx
  const [count, setCount] = useState(0);
  ```

- `useEffect` - "副作用钩子"
  > 处理组件中的副作用操作，如数据获取、订阅或手动修改 DOM。
  ```jsx
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅当 count 改变时执行
  ```

- `useContext` - "上下文钩子"
  > 接收一个 Context 对象并返回当前上下文值，用于共享全局数据。
  ```jsx
  const value = useContext(MyContext);
  ```

- `useReducer` - "归约器钩子"
  > useState 的替代方案，适用于复杂的状态逻辑管理。
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- `useCallback` - "回调钩子"
  > 返回一个记忆化的回调函数，仅在依赖项更改时才会变化。
  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

- `useMemo` - "记忆钩子"
  > 返回一个记忆化的值，仅在依赖项更改时重新计算。
  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- `useRef` - "引用钩子"
  > 创建一个可变的引用对象，其 `.current` 属性被初始化为传入的参数。
  ```jsx
  const inputRef = useRef(null);
  ```

#### 组件通信
- **父子组件通信**：通过 props 传递数据和回调函数
- **兄弟组件通信**：通过状态提升至共同的父组件
- **跨层级组件通信**：使用 Context API 或状态管理库

#### 路由管理
使用 React Router 进行客户端路由管理：
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 高级篇

#### 性能优化
- **React.memo**：记忆化组件，避免不必要的重渲染
- **React.lazy & Suspense**：代码分割和懒加载
- **useCallback & useMemo**：避免重复创建函数和计算值
- **列表渲染优化**：使用稳定的 key 值

#### 状态管理
- **Context + useReducer**：轻量级状态管理
- **Redux**：大型应用的可预测状态容器
- **MobX**：简化的状态管理库
- **Zustand**：使用钩子的简约状态管理
- **Recoil**：React 专用的实验性状态管理库
- **Jotai**：原始且灵活的状态管理方案

#### 服务端渲染
- **Next.js**：React 框架，支持 SSR, SSG 和 ISR
- **Remix**：全栈 React 框架，专注于 Web 标准
- **Hydration & 客户端接管**：理解 SSR 中的水合过程

#### 测试
- **Jest**：JavaScript 测试框架
- **React Testing Library**：测试 React 组件的工具
- **Cypress**：端到端测试框架

### 生态系统

#### UI 库
- **Material-UI (MUI)**：基于 Material Design 的 React 组件
- **Ant Design**：企业级 UI 设计语言和组件库
- **Chakra UI**：简单、模块化的组件库
- **Tailwind CSS**：功能类优先的 CSS 框架

#### 数据获取
- **React Query**：用于获取、缓存和更新异步数据
- **SWR**：用于数据获取的 React Hooks 库
- **Apollo Client**：全功能 GraphQL 客户端
- **Axios**：基于 Promise 的 HTTP 客户端

## 常见问题解决方案

### 错误边界
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>出现了一些问题</h1>;
    }

    return this.props.children;
  }
}
```

### 表单处理
- **受控组件**：React 控制表单的值
- **非受控组件**：DOM 控制表单的值，通过 ref 获取
- **Formik/React Hook Form**：简化表单处理的库

### React 18 新特性
- **并发渲染**：允许 React 准备多个版本的 UI
- **自动批处理**：更多情况下自动合并状态更新
- **Suspense 改进**：更好地支持数据获取
- **Transitions API**：区分紧急和非紧急更新