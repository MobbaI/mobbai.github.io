<template>
  <div class="header">
    <div class="header-inner">
      <!-- <div class="home-name">
        <span>MobbaI</span>
      </div> -->
      <div class="header-blank"></div>
      <div class="menu">
        <ul :class="{'menu-items': true, 'short': $store.state.scrollTop > 0}">
          <li class="menu-item menu-item-home hvr-buzz" @click="toHome">
            <i class="fa fa-home"></i>
            <br>
            <span>首页</span>
          </li>
          <li class="menu-item menu-item-archives hvr-sink" @click="toBlog">
            <i class="fa fa-book"></i>
            <br>
            <span>文档</span>
          </li>
          <li class="menu-item menu-item-categories hvr-sink">
            <i class="fa fa-question"></i>
            <br>
            <span>没做</span>
          </li>
          <li class="menu-item menu-item-categories hvr-sink" @click="toMovie">
            <i class="fa fa-film"></i>
            <br>
            <span>影视</span>
          </li>
          <li class="menu-item menu-item-about hvr-sink" @click="toAbout">
            <i class="fa fa-user"></i>
            <br>
            <span>关于</span>
          </li>
        </ul>
      </div>
      <div v-if="$store.state.scrollTop - 200 > 0" class="back-top">
        <i class="fa fa-arrow-circle-up" @click="backTop"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.$store.dispatch('scroll_top', scrollTop);
    },
    backTop() {
      let el = document.documentElement
      let step = 0
      let back_to_top = setInterval(() => {
        if(el.scrollTop <= 0) {
          clearInterval(back_to_top)
          return
        }
        step += 10
        el.scrollTop -= step
      }, 20)
    },
    toHome() {
      this.$router.push({
        path: '/'
      })
    },
    toBlog() {
      this.$router.push({
        path: '/blog'
      })
    },
    toMovie() {
      this.$router.push({
        path: '/movie'
      })
    },
    toAbout() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  z-index: 9999;
  position: fixed;
  width: 100%;
  top: 0;
  // border-top: 1px solid #333;
  // border-bottom: 2px solid #222;
  background-color: #fff;
  .header-inner {
    display: flex;
    justify-content: space-between;
    .home-name {
      display: flex;
      width: 200px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
    .header-blank {
      flex: 1;
    }
    .menu {
      width: 250px;
      margin: 0 2% 0 0;
      .menu-items {
        transition: all .3s ease-in-out;
        margin: 0;
        padding: 0;
        height: 66px;
        display: flex;
        align-items: center;
        .menu-item{
          width: 28px;
          text-align: center;
          // display: inline-block;
          list-style: none;
          padding: 0 10px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .short {
        height: 40px;
        span {
          display: none;
        }
      }
    }

    .back-top {
      position: fixed;
      right: 5%;
      bottom: 13%;
      i {
        font-size: 35px;
        opacity: 0.2;
        transition: .3s ease-in-out;
        @media (any-hover: hover) {
          &:hover {
            cursor: pointer;
            opacity: 1;
          }
        }
      }
    }
  }
}

/* Buzz */
@-webkit-keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
@keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
.hvr-buzz {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
@media (any-hover: hover) {  
  .hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {
    -webkit-animation-name: hvr-buzz;
    animation-name: hvr-buzz;
    -webkit-animation-duration: 0.15s;
    animation-duration: 0.15s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

/* Sink */
.hvr-sink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

@media (any-hover: hover) {
  .hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
</style>
