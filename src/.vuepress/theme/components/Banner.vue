<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    console.log(`Banner on mounted.`)
})

</script>

<template>
    <div id="banner">
        <h1>Banner</h1>
        <!-- You can add more Vue components here -->
        <div class="flex-col">
            <span>知识库</span>
            <span>一个程序员的个人知识库</span>
            <div class="flex-row justify-evenly">
                <div><span>文档目录</span></div>
                <div><span>个人博客</span></div>
            </div>
        </div>
    </div>
</template>

<style>

#banner {
    width: 100vw;
    height: 60px;
}

</style>