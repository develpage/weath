<template>
    <div class="search-city__container">
        
        <div class="input-group" :class="{visible : inputShow}">
            <label for="city" :class="{ 'label_hidden': inputFocus }">{{ $store.getters.cityData.cityName }}</label>

            <input  type    ="text"
                    name    ="city"
                    id      ="city"
                    class   ="search-city__input"
                    v-model ="inputValue"
                    @input  ="changeCity"
                    @focus  ="inputFocus = true" 
                    @blur   ="inputFocus = (inputValue.length > 0 ) ? true : false"
            />

            <ul class="search-city__list">
                <!-- <li class="search-city__list_item" v-if="cityList.length === 0">Ничего не найдено</li> -->
                <transition-group name="fade" tag="ul">

                <li class="search-city__list_item"
                    v-for   ="city in cityList"
                    :key    ="city.data.kladr_id"
                    @click  ="selectNewCity(city)"
                    >
                    {{ city.value }}
                </li>
                </transition-group>
            </ul>

        </div>

        <div class="search-city__location_icon" @click="inputShow = !inputShow">
            <svg width="372" height="512" viewBox="0 0 372 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M186 0C83.755 0 0.572998 83.182 0.572998 185.426C0.572998 312.314 166.512 498.593 173.577 506.461C180.213 513.852 191.799 513.839 198.423 506.461C205.488 498.593 371.427 312.314 371.427 185.426C371.425 83.182 288.244 0 186 0ZM186 278.719C134.558 278.719 92.708 236.868 92.708 185.426C92.708 133.984 134.559 92.134 186 92.134C237.441 92.134 279.291 133.985 279.291 185.427C279.291 236.869 237.441 278.719 186 278.719Z" fill="#C1C1C1"/>
            </svg>
        </div>
        
    </div>
</template>

<script>
import debounce from 'lodash.debounce'
import city from './city'
import { mapState } from 'vuex'

export default {
    name: 'SearchCity',
    data() {
        return {
            inputValue: '',
            cityList: {},
            inputShow: false,
            inputFocus: false
        }
    },
    created () {
        city.getClientIp().then(ip => {
            this.$store.commit('setClientIp', ip.data)
            city.getCurrentClientLocation(ip.data).then(currentCity => {
                this.$store.commit('setLocation', currentCity.data.location)                
            })
        })
    },
    computed: {
        ...mapState(['cityData'])
    },
    methods: {
        changeCity: debounce(function () {
            city.changeCity(this.inputValue)
                .then(cities => {
                    this.cityList = cities.data.suggestions
                    console.log(this.cityList);
                })
            },
        700),
        selectNewCity (newCity) {
            this.inputValue = newCity.value
            city.changeCity(this.inputValue)
                .then(cities => {
                    this.$store.commit('setLocation', cities.data.suggestions[0])
                })            
            this.cityList = {}
            this.inputShow = false
        }            
        
    }
}
</script>

<style scoped>

</style>
