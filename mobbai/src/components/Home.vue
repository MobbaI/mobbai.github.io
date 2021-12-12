<template>
    <div class="home">
        <img class="animate__animated animate__fadeIn" src="https://gitee.com/mobbai/image/raw/master/GM/1.jpg">
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            property: 'value',
        }
    },
    // beforeRouteLeave(to, from, next) {
    //     this.$refs.homeImgae.classList.add('animate__animated', 'animate__fadeOut')
    //     this.$refs.homeImgae.addEventListener('animationend', () => next())
    // }
}
</script>

<style lang="less" scoped>
.home {
    padding-top: 130px;
    // width: 100%;
    img {
        width: 100%;
    }
}
</style>