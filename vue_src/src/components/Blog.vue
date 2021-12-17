<template>
    <div class="archive">
        <div class="left">
            <div class="left-one">
                <div class="Forrest-Gump">冰冻三尺，非一日之寒</div>
                <ul class="left-items">
                    <li class="left-item" @click="goOverview">
                        <i class="fa fa-smile-o"></i>
                        主页
                        <i :class="{'is-actived fa fa-yelp': blogTabActived === ''}"></i>
                    </li>
                    <li class="left-item" @click="goCategory">
                        <i class="fa fa-th"></i>
                        分类
                        <i :class="{'is-actived fa fa-yelp': blogTabActived === 'c'}"></i>
                    </li>
                    <li class="left-item" @click="goArchive">
                        <i class="fa fa-archive"></i>
                        归档
                        <i :class="{'is-actived fa fa-yelp': blogTabActived === 'a'}"></i>
                    </li>
                </ul>
            </div>
            <div class="left-two">
                <div class="left-pic">
                    <img src="static/img/blog_pic.jpg">
                </div>
                <ul class="blog-statis">
                    <li>
                        <div class="statis-number">{{blogCount}}</div>
                        日志
                    </li>
                    <li>
                        <div class="statis-number">{{blogCategoryCount}}</div>
                        分类
                    </li>
                </ul>
                <div class="other-link">
                    <a href="https://github.com/MobbaI" class="github-icon" target="_blank">
                        <i class="fa fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
        <ul :class="{'tabs': true, 'tabs-short': $store.state.scrollTop > 0}">
            <li class="tab" @click="showTab">
                <i class="fa fa-th-list"></i>
            <br>
            <span>目录</span>
            </li>
        </ul>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import mblogs from '../../public/static/js/blogs'

export default {
    name: 'Blog',
    data() {
        return {
            blogCount: null,
            blogCategoryCount: null,
            blogTabActived: null
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(val) {
                this.blogTabActived = val.path.slice(6, 7)
            }
        }
    },
    methods: {
        goOverview() {
            this.$router.push('/blog')
        },
        goCategory() {
            this.$router.push('/blog/category')
        },
        goArchive() {
            this.$router.push('/blog/archive')
        },
        showTab() {
            const abc = document.querySelector('.left')
            if(!abc.style.display || abc.style.display === 'none') {
                abc.style.display = 'block'
            }else {
                abc.style.display = 'none'
            }
        }
    },
    mounted() {
        const blogs = mblogs.blogs
        this.blogCount = blogs.length
        this.blogCategoryCount = [...new Set(blogs.map(b => b.categories))].length
    }
}
</script>

<style lang="less">
.archive {
    // height: 100%;
    display: flex;
    min-height: 1024px;
    min-width: 300px;

    .left {
        // border: 1px solid rgba(34, 34, 34, 1);
        margin-top: 100px;
        margin-right: 25px;
        width: 230px;
        margin-left: 25px;

        .left-one {
            // border: 1px solid rgba(34, 34, 34, 0.08);
            // background-color: rgba(116, 108, 235, 0.2);
            .Forrest-Gump {
                background-color: #222;
                padding: 20px 0;
                color: #fff;
                text-align: center;
            }

            .left-items {
                margin: 0;
                padding: 14px 0;
                border: 1px solid rgba(34, 34, 34, 0.1);
                list-style-type: none;
                padding-left: 0;
                .left-item {
                    padding: 5px 20px;
                    &:hover {
                        cursor: pointer;
                        background-color: rgba(120, 120, 120, 0.1);
                    }
                    i {
                        padding: 0 5px;
                    }

                    .is-actived {
                        padding-left: 66px;
                    }
                }
            }
        }

        .left-two {
            border: 1px solid rgba(34, 34, 34, 0.1);
            border-radius: 0 0 10px 10px;
            margin-top: 10px;
            padding: 20px 10px;
            .left-pic {
                height: 150px;
                text-align: center;
                padding: 10px 0;
                img {
                    height: 100%;
                    border-radius: 25px;
                }
            }

            .blog-statis {
                display: flex;
                list-style-type: none;
                padding-left: 0;
                justify-content: center;
                li {
                    padding: 0 25px;
                    text-align: center;
                    &:not(:first-child) {
                        border-left: 1px solid rgba(34, 34, 34, 0.1);
                    }

                    .statis-number {
                        font-weight: bold;
                    }
                }
            }

            .other-link {
                text-align: center;
                // border-top: 1px dotted rgba(34, 34, 34, 0.2);
                // border-bottom: 1px dotted rgba(34, 34, 34, 0.2);
                padding: 5px 0 0;
                .github-icon {
                    text-decoration: none;
                    border-bottom: none;
                    i {
                        font-size: 18px;
                        margin-right: 8px;
                    }
                }
            }
        }
    }

    .tabs {
        transition: all .3s ease-in-out;
        margin: 0;
        padding: 0;
        height: 66px;
        display: none;
        align-items: center;
        position: fixed;
        margin-left: 3%;
        z-index: 9999;
        .tab {
          width: 28px;
          text-align: center;
          list-style: none;
          padding: 0 10px;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .tabs-short {
        height: 40px;
        span {
          display: none;
        }
      }

    .right {
        flex: 1;
    }
}

@media (max-width: 950px) {
    .archive {
        flex-direction: column;
        .left {
            display: none;
            padding: 10px;
            width: calc(100% - 20px);
            margin: 66px 0 -66px;
            z-index: 99;

            .md-list {
                height: 220px;
            }
        }
        .tabs {
            display: flex;
        }
    }
}

@media (min-width: 950px) {
    .archive {
        .left {
            display: block !important;
        }
    }
}
// @media screen and (max-width: 888px) {
//     .archive-list {
//         width: 100%;
//     }
// }

/* Float */
.hvr-float {
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
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}
</style>