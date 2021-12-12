<template>
  <div id="app">
    <Header />
    <div class="home-main">
      <div class="main-left"></div>
        <router-view></router-view>
      <div class="main-right"></div>
    </div>
    <!-- <Blogshow /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 14px;
  line-height: 2;
  color: #555;
  background: #fff;
}

a {
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
}
// html,
// body,
// #app {
//   height: 100%;
//   .home-main {
//     height: 100%;
    // overflow-y: auto;
    // margin: 0 auto;
  // }
// }
body {
  &::-webkit-scrollbar {
  // display: none;
  }
}

.home-main {
  width: 1100px;
  // min-width: 350px;
  margin: 0 auto;
}

@media screen and (max-width: 950px) {
  .home-main {
    width: 100%;
  }
}

</style>
