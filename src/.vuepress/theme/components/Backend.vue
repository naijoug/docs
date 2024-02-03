<script setup>
import { ref, onMounted } from 'vue'

const title = ref('后端')

const items = ref([
    { id: 0, text: '服务器', tip: '后端技术的基石' },
    { id: 1, text: '数据库', tip: '大数据时代的核心竞争力' },
    { id: 2, text: '服务框架', tip: '快速搭建服务的利器' },
])

onMounted(() => {
    console.log(`Backend on mounted.`)
})

</script>

<template>
    <div>
        <h1>Backend</h1>
        
        <div>
            <div class="flex-col" v-for="item in items" :id="item.id">
                <span>{{ item.text }}</span>
                <span>{{ item.tip }}</span>
            </div>
        </div>
    </div>
</template>

<style>
/* You can add your styles here */
</style>