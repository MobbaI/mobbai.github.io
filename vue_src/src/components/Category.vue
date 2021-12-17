<template>
    <div class="category-list">
        <div class="category-card" v-for="category in categories" :key="category" @click="toShowCategory(category)">
            <div class="category-card-in">
                <img :src="`static/img/category/${category}.png`">
                <h3>{{category}}</h3>
            </div>
        </div>
        <i v-for="n in 4" :key="n"></i>
    </div>
</template>

<script>
import mblogs from '../../public/static/js/blogs'

export default {
    name: 'Category',
    data() {
        return {
            categories: []
        }
    },
    methods: {
        toShowCategory(category) {
            this.$router.push(`/blog/category/${category}`)
        }
    },
    mounted() {        
        const ori_categories = mblogs.blogs.map(b => b.categories)
        this.categories = [...new Set(ori_categories)]
    }
}
</script>

<style lang="less" scoped>
    .category-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 105px;
        .category-card {
            border: 1px solid rgba(34, 34, 34, 0.1);
            border-radius: 5px;
            padding: 12px;
            margin: 0 15px 40px;
            position: relative;
            .category-card-in {
                border-radius: 5px;
                text-align: center;
                width: 100px;
                img {
                    width: 60px;
                    height: 60px;
                }
                h3 {
                    margin: 0;
                }
            }
            &:hover {
                cursor: pointer;
            }
        }

        i {
            width: 156px;
        }
    }
</style>