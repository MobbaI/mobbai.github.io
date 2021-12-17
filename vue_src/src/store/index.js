import Vuex from 'vuex'
import Vue from 'vue'
import mfmovie from '../../public/static/js/movie'

Vue.use(Vuex);

const actions = {
    // changeBlogTabActived(content, isActivedNumber) {
    //     content.commit('CHANGE_BLOG_TAB_ACTIVED', isActivedNumber);
    // },

    get_movie(content) {
        content.state.movie = mfmovie.movie.sort((a, b) => b['premiere'] - a['premiere'])

        content.state.movieFilmOrTV = get_movie_info('filmOrTV')
        content.state.movieCountries = get_movie_info('country')
        content.state.movieCategories = get_movie_info('category')

        function get_movie_info(typeToList) {
            const _ori = content.state.movie.map(m => m[typeToList])
            const state_movie = [...new Set(_ori)].map(m => {
                return {
                    [typeToList]: m,
                    isActived: false
                }
            })
            state_movie.unshift({
                [typeToList]: '全部',
                isActived: true
            })
            return state_movie
        }
    },
    changeSelectedType(content, [selected_list_in_name, selected_type]) {
        content.state.movieSelectedType[selected_list_in_name] = selected_type
    },

    scroll_top(content, scroll_top) {
        content.state.scrollTop = scroll_top
    }
}

const mutations= {
    // ['CHANGE_BLOG_TAB_ACTIVED'](state, isActivedNumber) {
    //     state.blogTabActived = isActivedNumber
    // }
}

const state = {
    movie: [],
    movieCountries: [],
    movieFilmOrTV: [],
    movieCategories: [],
    movieSelectedType: {
        filmOrTV: '全部',
        country: '全部',
        category: '全部'
    },
    pageNow: 1,

    // blogTabActived: null,

    scrollTop: null
}

const getters = {

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})