<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    console.log(`Banner on mounted.`)
})

function gotoDocs() {
    console.log('go to docs.')
    router.push('/guide.html')
}

function gotoBlog() {
    console.log('go to blog.')
    window.location.href = 'https://naijoug.github.io/blog'
}

</script>

<template>
    <div id="banner">
        <!-- <h1>Banner</h1> -->
        <div class="flex-col">
            <span class="banner-slogan banner-title">知识库</span>
            <span class="banner-slogan banner-detail">一个程序员的个人知识库</span>
            <div class="banner-button-div flex-row">
                <button class="banner-button banner-button-docs" @click="gotoDocs">文档目录</button>
                <button class="banner-button banner-button-blog" @click="gotoBlog">个人博客</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

#banner {
    margin: 60px 0 0 0;
    width: 100vw;
    height: 980px;
}

.banner-slogan {
    color: var(--main-color);
    overflow-wrap: break-word;
    font-size: 40px;
    font-weight: 600;
    font-family: var(--main-font-family);
    text-align: left;
}

.banner-title {
    margin: 10% 0 0 50%;
}

.banner-detail {
    margin: 40px 0 0 50%;
}

.banner-button-div {
    height: 70px;
    margin: 40px 0 0 50%;
}

.banner-button {
    border-radius: 30px;
    height: 60px;
    cursor: pointer;
}
.banner-button-docs {
    background-color: var(--main-color);
}
.banner-button-blog {
    background-color: rgba(0, 0, 0, 0.3);
    margin-left: 50px;
}

.banner-button-text {
    overflow-wrap: break-word;
    font-size: 24px;
    font-weight: 600;
    font-family: var(--main-font-family);
    text-align: center;
    line-height: 60px;
    margin: 0 30px 0 30px;
}
.banner-button-text-docs {
    color: rgba(31, 38, 39, 1);
}
.banner-button-text-blog {
    color: var(--main-color);
}

</style>