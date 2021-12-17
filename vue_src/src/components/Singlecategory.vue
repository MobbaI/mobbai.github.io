<template>
    <div class="single-category">
        <div class="category-name">
            <div class="category-pic">
                <img :src="`static/img/category/${categoryName}.png`">
            </div>
            <h2>{{categoryName}}</h2>
        </div>
        <div class="blog-title-list">
            <div v-for="blog in categoryBlogs" :key="blog.id" @click="toBlogShow(blog.id)">
                <Singleblogtitle :blog="blog" :isPic="false"/>
        </div>
    </div>
    </div>
</template>

<script>
import mblogs from '../../public/static/js/blogs'
import Singleblogtitle from './Singleblogtitle';

export default {
    name: 'Singlecategory',
    components: { Singleblogtitle },
    data() {
        return {
            categoryName: '',
            categoryBlogs: []
        }
    },
    methods: {
        toBlogShow(blogId) {
            let blogPath = '/blog/display/' + blogId
            this.$router.push(blogPath)
        }
    },
    mounted() {        
        this.categoryName = this.$route.params.category
        let blogs = mblogs.blogs
        this.categoryBlogs = blogs.filter((b) => {
            if(b.categories === this.categoryName) return b
        })
    }
}
</script>

<style lang="less" scoped>
    .single-category {
        margin-top: 100px;

        .category-name {
            display: flex;
            align-items: center;
            border: 1px solid rgba(34, 34, 34, 0.1);
            border-radius: 10px;
            background-color: #222;
            color: #fff;
            margin: 0 10px 30px;
            padding: 0 20px;
            .category-pic {
                width: 35px;
                height: 35px;
                margin-right: 15px;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>