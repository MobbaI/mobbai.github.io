<template>
  <div class="blogshow">
    <Singleblogtitle :blog="blog" :isDark="true"/>
    <mavon-editor
      class="markdown"
      v-model="mdContent"
      :subfield="settingMd.subfield"
      :defaultOpen="settingMd.defaultOpen"
      :toolbarsFlag="settingMd.toolbarsFlag"
      :boxShadow="settingMd.boxShadow"
      :previewBackground="settingMd.previewBackground"
    />
    <div v-if="Loading" class="loading">
      <div class="loading-pic"></div>
      <span>Loading...</span>
    </div>
    <div v-if="LoadingFailed" class="load-failed">
      <i class="load-failed-pic fa fa-warning"></i>
      <span>Loading failed, please try F5 !</span>      
    </div>
  </div>
</template>

<script>
import requestApi from '../api/requestApi'
import mblogs from '../../public/static/js/blogs'
import Singleblogtitle from './Singleblogtitle'

export default {
  name: "Bolgshow",
  components: {
    Singleblogtitle
  },
  data() {
    return {
      settingMd: {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", // 默认展示
        toolbarsFlag: false,
        boxShadow: false,
        previewBackground: "#fff",
        navigation: false, // 默认展示目录
        toolbars: {},
      },
      mdContent: '',
      Loading: true,
      LoadingFailed: false,
      blog: {
        id: '',
        data: '',
        title: '',
        categories: '',
        abstract: ''
      }
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let id = this.$route.params.id
      this.blog = this.get_blog_info(id)
      let md = this.blog.data + '-' + id

      this.LoadingFailed = false
      this.Loading = true

      requestApi.fetch(`static/md/${md}.md`).then(res => {
        this.Loading = false
        this.mdContent = res.data
      }).catch(() => {
        this.Loading = false
        this.LoadingFailed = true
      })
    },
    get_blog_info(id) {
      let blogs = mblogs.blogs
      let blog = blogs.find((b) => {
        if(b.id === id) return b
      })
      return blog
    }
  }
}
</script>

<style lang="less">
.blogshow {
  margin-top: 100px;
  position: relative;

  @media screen and (max-width: 950px) {
    .markdown-body {
      margin: 0 !important;
    }
  }

  .markdown-body {
    margin: 0 10px 50px;
    border: 0 solid #fff;

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 20px 0 15px;
      font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
      // line-height: 1.5;
      color: #222;
      // background: #fff;
      border-bottom: #fff;
    }

    p {
      margin-bottom: 25px;
      font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
      color: #333;
      font-size: 16px;
      line-height: 2;
    }

    @media screen and (max-width: 950px) {
      pre {
        width: calc(100vw - 67px);
        // width: 100vw;
        min-width: 270px;
      }

      blockquote {
        width: calc(100vw - 67px);
        // width: 100vw;
        min-width: 270px;
      }            
    }
  }

  .loading {
    position: absolute;
    // top: 150px;
    top: 50%;
    left: calc(50% - 29px);
    z-index: 9999;
    .loading-pic {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(34, 34, 34, 0.2);
      border-top: 4px solid rgba(34, 34, 34, 0.7);
      border-radius: 50%;
      animation: loading-360 .8s infinite linear;      
    }
    span {
      position: absolute;
      top: 70px;
      font-weight: bold;
    }
  }

  .load-failed {
    position: absolute;
    top: 60%;
    left: calc(50% - 120px);
    z-index: 9999;
    span {
      position: absolute;
      width: 250px;
      // top: 40px;
      left: 30px;
      font-weight: bold;
    }
  }  

  @keyframes loading-360 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>