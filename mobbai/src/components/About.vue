<template>
    <div class="about">
        <div class="about-image">
            <img class="animate__animated animate__fadeIn" src="https://gitee.com/mobbai/image/raw/master/GM/about.jpg">
        </div>
    </div>
</template>

<script>

export default {
    name: 'About',
    data() {
        return {
            property: 'value'
        }
    }
}
</script>

<style lang="less" scoped>
.about {
    padding-top: 130px;
    display: flex;
    justify-content: center;
    .about-image {
        // width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>