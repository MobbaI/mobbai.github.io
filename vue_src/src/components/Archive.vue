<template>
    <div class="blog-archive">
        <div class="blog-years" v-for="year in blogYears" :key="year">
            <div class="blog-year">{{year}}</div>
            <div class="year-blogs" v-for="blog in yearBlogs[year]" :key="blog.id">
                <div class="blog-month-day">
                    {{blog.data.slice(4, 6) + '-' + blog.data.slice(6, 8)}}
                </div>
                <div class="blog-title" @click="toBlogShow(blog.id)">
                    {{blog.title}}    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mblogs from '../../public/static/js/blogs';

export default {
    name: 'Archive',
    data() {
        return {
            blogs: [],
            blogYears: [],
            yearBlogs: {}
        }
    },
    methods: {
        toBlogShow(blogId) {
            let blogPath = '/blog/display/' + blogId
            this.$router.push(blogPath)
        }
    },
    mounted() {        
        this.blogs = mblogs.blogs.sort((a, b) => b['data'] - a['data'])
        this.blogYears = [...new Set(this.blogs.map(m => m.data.slice(0, 4)))]
        this.blogYears.forEach(y => {
            let tempList = this.blogs.filter(b => {
                if(b.data.slice(0, 4) === y) return b
            })
            this.yearBlogs[y] = tempList
        })
    }
}
</script>

<style lang="less" scoped>
    .blog-archive {
        margin: 105px 50px 88px;

        .blog-years {
            .blog-year {
                padding: 40px 0 40px 30px;
                border-left: 5px solid rgba(34, 34, 34, 0.05);
                font-size: 23px;
                // font-weight: bold;
            }

            .year-blogs {
                display: flex;
                padding: 10px 0 10px 30px;
                border-left: 5px solid rgba(34, 34, 34, 0.05);

                // .blog-month-day {
                    
                // }

                .blog-title {
                    position: relative;
                    margin-left: 10px;
                    transition: .3s ease;
                    &:hover {
                        cursor: pointer;
                        margin-left: 15px;
                    }
                }

                &:first-of-type {
                    padding-top: 0;
                }
            }
            
            &:first-of-type {
                .blog-year {
                    padding-top: 0;
                }
            }
        }
    }

/* Forward */
.hvr-forward {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active {
  -webkit-transform: translateX(8px);
  transform: translateX(8px);
}
</style>