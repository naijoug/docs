---
title: 基础知识
icon: hashtag

index: true

---

<!-- more -->

## concept

- `SFC` (Single-File Component) : 单文件组件
- `mustache` 语法 : 双大括号 `{{ /***/ }}`，用于文本插值

## 响应式

> `ref` : 响应式引用包装
> `reactive` : 响应式对象
> `computed` : 响应式计算属性

```ts
const count = ref(0)
const user = reactive({
    name: "tom"
})
```

## usage

### v:bind

> `v:bind` : 属性绑定

```html
<!-- 动态绑定 id 属性 -->
<div v-bind:id="dynamicId"></div>
<!-- 简写 -->
<div :id="dynamicId"></div>
```

### v:on

> `v:on` : 事件绑定

```html
<button v-on:click="increment">{{ count }}</button>
<!-- 简写 -->
<button @click="increment">{{ count }}</button>
```

### v:model

> `v:model` : 双向绑定

```html
<input v-model="text">
<!-- 语法糖，等价于👇🏻 -->
<input :value="text" @input="onInput">
function onInput(e) {
  text.value = e.target.value
}
```

### v:if

> `v:if` : 条件渲染，`v-else`、`v-else-if` 用于表示条件分支。

```html
const awesome = ref(true)

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### v:for

> `v:for` : 列表渲染

```html
<ul>
  <!-- key 使得 Vue 能够精确的移动每个 <li>，以匹配对应的对象在数组中的位置 -->
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

## 生命周期

- `setup` :

-

- `beforeCreate` :
- `created` :

-

- `beforeMount` :
- `mounted` :

- 

- `beforeUpdate` :
- `updated` :

- 

- `beforeUmount` :
- `unmounted` : 

![vue-lifecycle](media/vue-lifecycle.png)

