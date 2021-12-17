<template>
    <div :class="{'single-blog': true, 'single-blog-dark': isDark}">
        <div class="title">
            <div v-if="isPic" class="category-pic">
                <img :src="`static/img/category/${blog.categories}.png`">
            </div>
            <h2>{{blog.title}}</h2>
        </div>
        <div class="describe">
            <p>{{blog.abstract}}</p>
            <p class="blog-data">{{blog.data.slice(0, 4) + '-' + blog.data.slice(4, 6) + '-' + blog.data.slice(6, 8)}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Singleblogtitle',
    props: {
        blog: {

        },
        isDark: {
            type: Boolean,
            default: false
        },
        isPic: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .single-blog {
        border: 1px solid rgba(34, 34, 34, 0.1);
        border-radius: 10px;
        padding: 0 20px;
        margin: 0 10px 25px;
        // min-width: 250px;
        &:hover {
            cursor: pointer;
        }

        .title {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(34, 34, 34, 0.1);
            .category-pic {
                width: 35px;
                height: 35px;
                margin-right: 15px;
                img {
                    width: 100%;
                }
            }
        }

        .describe {
            position: relative;
            .blog-data {
                text-align: right;
            }
        }
    }
    
    .single-blog-dark {
        background-color: #222;
        color: #fff;
        &:hover {
            cursor: auto;
        }
        
        .title {
            border-bottom: 1px solid #fff;
        }
    }
</style>