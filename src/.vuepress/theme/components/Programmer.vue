<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    console.log(`Programmer on mounted.`)
})

const title = ref('程序员必备技能')

const items = ref([
    { id: 0, text: '数据结构+算法' },
    { id: 1, text: '操作系统' },
    { id: 2, text: '网络知识' }
])

</script>

<template>
    <div>
        <h1>Programmer</h1>
        <!-- You can add more Vue components here -->
        <div class="flex-col">
            <span>{{ title }}</span>
            <div v-for="item in items" :key="item.id">
                <div>
                    <span>{{ item.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* You can add your styles here */
</style>