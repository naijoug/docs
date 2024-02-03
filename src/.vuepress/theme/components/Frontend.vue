<script setup>
import { ref, onMounted } from 'vue'

const title = ref('前端')

const items = ref([
    { id: 0, text: 'iOS' },
    { id: 1, text: 'Android' },
    { id: 2, text: 'Flutter' },
    { id: 3, text: 'HTML' },
    { id: 4, text: 'Vue' },
    { id: 5, text: 'React' }
])

onMounted(() => {
    console.log(`Frontend on mounted.`)
})

</script>

<template>
    <div>
        <h1>Frontend</h1>
        
        <span>{{ title }}</span>
        <div>
            <div v-for="item in items" :key="item.id">
                <span>{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<style>
/* You can add your styles here */
</style>