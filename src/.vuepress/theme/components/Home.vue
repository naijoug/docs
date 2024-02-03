<script setup>
import { ref, onMounted } from 'vue'
import Banner from './Banner.vue'
import Programmer from './Programmer.vue'
import Programming from './Programming.vue'
import Backend from './Backend.vue'
import Frontend from './Frontend.vue'
import Trending from './Trending.vue'

onMounted(() => {
    console.log(`Home on mounted.`)
})

</script>

<template>
    <div id="home">
        <h1>欢迎来到我的知识库！</h1>

        <!-- Banner -->
        <Banner/>

        <!-- Programmer -->
        <Programmer/>

        <!-- Programming -->
        <Programming/>

        <!-- Backend -->
        <Backend/>

        <!-- Frontend -->
        <Frontend/>

        <!-- Trending -->
        <Trending/>
    </div>
</template>

<style src="./assets/css/common.css"></style>
<style>
div {
    text-align: center;
}

#home {
    width: 100vw;
    height: auto;
    background-color: rgba(24, 41, 46, 1);
    background-image: url(./assets/image/bg-banner.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
}
</style>