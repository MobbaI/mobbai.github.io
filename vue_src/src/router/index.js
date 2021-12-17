import VueRouter from "vue-router"
import Blog from '../components/Blog'
import Blogshow from '../components/Blogshow'
import Movie from "../components/Movie"
import Home from '../components/Home'
import About from '../components/About'
import Overview from '../components/Overview'
import Category from '../components/Category'
import Singlecategory from "../components/Singlecategory"
import Archive from "../components/Archive"

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            component: Home,
            meta: {
                title: 'MobbaI'
            }
        },
        {
            path: '/blog',
            component: Blog,
            meta: {
                title: '文档 | MobbaI'
            },
            children: [
                {
                    path: '',
                    component: Overview,
                    meta: {
                        title: '文档 | MobbaI'
                    }
                },
                {
                    path: 'category',
                    component: Category,
                    meta: {
                        title: '文档 | MobbaI'
                    }
                },
                {
                    path: 'category/:category',
                    component: Singlecategory,
                    meta: {
                        title: '文档 | MobbaI'
                    }
                },
                {
                    path: 'archive',
                    component: Archive,
                    meta: {
                        title: '文档 | MobbaI'
                    }
                },
                {
                    path: 'display/:id',
                    component: Blogshow,
                    meta: {
                        title: '文档 | MobbaI'
                    }
                }
            ]
        },
        {
            path: '/movie',
            component: Movie,
            meta: {
                title: '影视 | MobbaI'
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
                title: 'Yzh | MobbaI'
            }
        }
    ]
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Y'
    window.scroll(0, 0)
});

export default router