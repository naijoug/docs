<script setup>
import { ref, onMounted } from 'vue'

const title = ref('热门技术')

const items = ref([
    { id: 1, text: '人工智能', icon: './assets/image/icon-lock.png' },
    { id: 2, text: '区块链', icon: './assets/image/icon-cloud.png' },
    { id: 3, text: '其它技术', icon: './assets/image/icon-bug.png' }
])

onMounted(() => {
    console.log(`Trending on mounted.`)
})

</script>

<template>
    <div id="trending">
        <h1>{{ title }}</h1>
        
        <div>
            <div class="flex-row" v-for="item in items" :id="item.id">
                <img :src="item.icon" :alt="item.text" referrerpolicy="no-referrer" />
                <span>{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<style>

#trending {
    width: 100vw;
    height: auto;
    background-image: url(./assets/image/bg-trending.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
}

</style>