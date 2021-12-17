<template>
    <div class="blog-overview">
        <div class="overview-header">
            <input class="overview-search" type="text" v-model="searchContent">
            <i class="search-icon fa fa-search"></i>
        </div>
        <div v-if="searchBlogs.length" class="blog-title-list">
            <div v-for="blog in searchBlogs" :key="blog.id" @click="toBlogShow(blog.id)">
                <Singleblogtitle :blog="blog" />
            </div>
        </div>
        <div v-if="!searchBlogs.length" class="no-blogs-tip">
            NothingToSay~
        </div>
    </div>
</template>

<script>
import Singleblogtitle from './Singleblogtitle'
import mblogs from '../../public/static/js/blogs'

export default {
    name: 'Overview',
    components: {
        Singleblogtitle
    },
    data() {
        return {
            blogs: [],
            searchContent: ''
        }
    },
    computed: {
        searchBlogs() {
            return this.blogs.filter(b => {
                if(b.title.indexOf(this.searchContent) != -1) return b
            })
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
    }
}
</script>

<style lang="less" scoped>
    .blog-overview {
        margin-top: 100px;

        .overview-header {
            height: 50px;
            margin: 0 10px 30px;
            border-radius: 10px;
            background-color: #222;
            position: relative;

            .overview-search {
                height: 20px;
                position: absolute;
                right: 15px;
                top: 12px;
                padding-right: 25px;
                width: 150px;
            }

            .search-icon {
                position: absolute;
                right: 23px;
                top: 18px;
            }
        }

        .no-blogs-tip {
            text-align: center;
            font-size: 17px;
            padding-top: 50px;
        }
    }
</style>