<script setup>
import { ref, onMounted } from 'vue'

const title = ref('编程知识')
const detail = ref('记录归档使用过的编程语言知识点和概念。')

const items = ref([
    { id: 1, text: '编程范式' },
    { id: 2, text: '编码规范' },
    { id: 3, text: '内存管理' },
    { id: 4, text: '多线程' },
    { id: 5, text: '设计模式' },
    { id: 6, text: '密码学' }
])

onMounted(() => {
    console.log(`Programming on mounted.`)
})

</script>

<template>
    <div id="programming">
        <h1>Programming</h1>

        <div class="grid-container">
            <div class="grid-item" v-for="item in items" :key="item.id">
            <div class="flex-col">
                <span>{{ item.id }}</span>
                <span>{{ item.text }}</span>
            </div>
        </div>
        </div>
    </div>
</template>

<style>

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

.grid-item {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

</style>