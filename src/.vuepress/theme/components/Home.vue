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
<style src="./assets/css/theme.css"></style>

<style scoped>
#home {
    width: 100vw;
    height: auto;
    background-color: rgba(24, 41, 46, 1);
    background-image: url(./assets/image/bg-banner.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    text-align: center;
}
</style>