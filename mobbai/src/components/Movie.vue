<template>
    <div class="movie-container">
        <div class="movie-type">
            <div class="movie-type-list">
                <div 
                :class="{'movie-type-list-in': true, 'movie-type-list-in-actived': filmOrTV.isActived}" 
                v-for="(filmOrTV, index) in $store.state.movieFilmOrTV" :key="index" 
                @click="changeMovieType('movieFilmOrTV', 'filmOrTV', filmOrTV.filmOrTV)">
                    {{filmOrTV.filmOrTV}}
                </div>
            </div>
            <div class="movie-type-list">
                <div 
                :class="{'movie-type-list-in': true, 'movie-type-list-in-actived': country.isActived}" 
                v-for="(country, index) in $store.state.movieCountries" :key="index" 
                @click="changeMovieType('movieCountries', 'country',country.country)">
                    {{country.country}}
                </div>
            </div>
            <div class="movie-type-list">
                <div 
                :class="{'movie-type-list-in': true, 'movie-type-list-in-actived': category.isActived}" 
                v-for="(category, index) in $store.state.movieCategories" :key="index" 
                @click="changeMovieType('movieCategories', 'category', category.category)">
                    {{category.category}}
                </div>
            </div>
        </div>
        <div class="image-list">
            <div class="image-box" 
            v-for="movie in movieDisplay.slice(24*(pageNow-1), 24*pageNow)" 
            :key="movie._id">
                <div class="image">
                    <img :src="movie.imageUrl" @click="showMovie(movie)">
                </div>
                <span :title="movie.name"><p>{{movie.name}}</p></span>
            </div>
            <i v-for="(i, index) in 5" :key="index"></i>
        </div>
        <ul v-if="movieDisplayPageInfo[0] > 1" class="movie-pages">
            <li v-if="pageNow != 1" class="go forward" @click="previousPage">
                <i class="fa fa-chevron-left"></i>
            </li>
            <li :class="{'movie-page-number': true, 'movie-page-number-actived': pageNow === n ? true : false}" 
            v-for="n in movieDisplayPageInfo[0]" :key="n" @click="jumpPage(n)">
                {{n}}
            </li>
            <li v-if="pageNow < movieDisplayPageInfo[0]" class="go backward" @click="nextPage">
                <i class="fa fa-chevron-right"></i>
            </li>
        </ul>
        <div v-if="movieShow" class="image-show" @click="movieShow = null">
            <img ref="movieShowImage" :src="movieShow.imageUrl">
            <div class="movie-introduction">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Movie',
    data() {
        return {
            movieList: [],
            movieDisplay: [],
            scroll: 0,
            isAnimationShow: false,
            movieSelectedType: {
                filmOrTV: '全部',
                country: '全部',
                category: '全部'
            },
            pageNow: 1,
            movieShow: null
        };
    },
    computed: {
        movieDisplayPageInfo() {
            let movieCount = this.movieDisplay.length
            let moviePages = Math.ceil(movieCount / 24)
            return [moviePages, movieCount]
        }
    },
    watch: {
        movieSelectedType: {
            deep: true,
            handler() {
                const selectedMovie_1 = this.get_movie_display(this.movieList, this.movieSelectedType.filmOrTV, 'filmOrTV')
                const selectedMovie_2 = this.get_movie_display(selectedMovie_1, this.movieSelectedType.country, 'country')
                this.movieDisplay = this.get_movie_display(selectedMovie_2, this.movieSelectedType.category, 'category')
            }
        }
    },
    mounted() {
        if(!this.$store.state.movie.length) this.$store.dispatch('get_movie')
        this.movieList = this.$store.state.movie
        this.movieSelectedType = this.$store.state.movieSelectedType
        this.pageNow = this.$store.state.pageNow
    },
    methods: {
        changeMovieType(selected_list_name, selected_list_in_name, selected_type) {
            this.$store.state[selected_list_name].map(m => {
                if(m[selected_list_in_name] === selected_type) {
                    m.isActived = true
                    this.$store.dispatch('changeSelectedType', [selected_list_in_name, selected_type])
                }else {
                    m.isActived = false
                }
            })

            this.pageNow = 1
        },
        get_movie_display(ori_list, selected_type, selected_type_name) {
            const selectedMovie = ori_list.map(m => {
                if(selected_type !== '全部') {
                    if(m[selected_type_name] === selected_type) {
                        return m
                    }
                }else {
                    return m
                }
            }).filter(res => res!=undefined)
            return selectedMovie
        },
        jumpPage(number) {
            this.pageNow = number
            document.documentElement.scrollTop = 50
        },
        previousPage() {
            if(this.pageNow > 1) this.pageNow--
            document.documentElement.scrollTop = 50
        },
        nextPage() {
            if(this.pageNow < this.movieDisplayPageInfo[0]) this.pageNow++
            document.documentElement.scrollTop = 50
        },
        showMovie(movie) {
            this.movieShow = movie
            let window_w_h = [document.documentElement.clientWidth, document.documentElement.clientHeight]
            if(window_w_h[0] < 690 || window_w_h[1] < 980) {
                this.$nextTick(() => {
                    if(window_w_h[0] > 0.7*window_w_h[1]) this.$refs.movieShowImage.style.height = `${0.9*window_w_h[1]}px`
                    else this.$refs.movieShowImage.style.width = `${0.9*window_w_h[0]}px`
                });
            }
        }
    },
    beforeRouteLeave(from, to, next) {
        this.$store.state.pageNow = this.pageNow
        next()
    }
}
</script>

<style lang="less">
.movie-container {
    padding: 100px 30px 30px;
    min-height: 900px;

    .movie-type {
        margin: 0 5% 0 5%;
        border-bottom: 1px solid rgba(34, 34, 34, 0.1);
        padding-bottom: 5px;
        margin-bottom: 20px;
        
        .movie-type-list {
            margin-right: -5%;
            display: flex;
            // overflow: auto;
            flex-wrap: wrap;
            .movie-type-list-in {
                padding: 0 10px;
                margin: 5px;
                white-space: nowrap;
            }

            .movie-type-list-in-actived {
                color: #fff;
                background-color: rgba(34, 34, 34, 1) ;
            }
        }
    }

    .image-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        position: relative;
        min-height: 700px;
        .image-box {
            width: 135px;
            height: 225px;
            padding: 10px 10px 25px;
            text-align: center;
            .image {
                height: 85%;
                background-color: rgba(180, 180, 180, 0.1);
                img {
                    width: 100%;
                    border-radius: 2px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            span {
                position: relative;
                top: 7px;
                p {
                    font-weight: bold;
                    margin: 0;
                    height: 56px;
                    // white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font: 13px;
                    line-height: 1.6;
                }
                // &:hover::after {
                //     position: absolute;
                //     z-index: 9999;
                //     position:absolute;
                //     top: 0;
                //     left: -75px;
                //     width: 150px;
                //     font-weight: bold;
                //     background-color: #fff;
                //     content: attr(data-name);
                // }
            }
        }
        i {
            width: 155px;
        }
    }

    .movie-pages {
        display: flex;
        justify-content: center;
        // border-top: 1px solid rgba(34, 34, 34, 0.1);
        padding: 20px 0 20px;
        margin: 5px 5% 0 5%;
        list-style-type: none;
        padding-left: 0;

        .movie-page-number {
            padding: 0 10px;
            margin: 0 5px;
            border-radius: 8px;
            &:hover {
                cursor: pointer;
            }
        }
        
        .movie-page-number-actived {
            // font-weight: bold;
            color: #fff;
            background-color: #222;
        }

        .go {
            padding: 0 10px;
            margin: 0 5px;
            &:hover {
                cursor: pointer;
            }
        }
    }

    .image-show {
        position: fixed;
        width: 110%;
        height: 110%;
        top: -5%;
        left: -5%;
        z-index: 9999;
        background-color: rgba(34, 34, 34, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (any-hover: hover) {
    .movie-type-list-in:hover {
        cursor: pointer;
        background-color: rgba(34, 34, 34, 0.1);
    }
}
/* Grow */
.hvr-grow {
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
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>