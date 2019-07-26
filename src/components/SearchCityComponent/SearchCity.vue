<template>
    <div class="search-city__container">
        <input type="text" name="city" id="city" class="search-city__input" @input="changeCity" v-model="inputValue">
        <ul class="search-city__list">
           <li v-for="city in cityList" :key="city.data.kladr_id" @click="selectNewCity(city)">{{ city.value }}</li> 
        </ul>
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
            cityList: {}
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
                })
            },
        1000),
        selectNewCity (newCity) {
            this.inputValue = newCity.value
            city.changeCity(this.inputValue)
                .then(cities => {
                    this.$store.commit('setLocation', cities.data.suggestions[0])
                })            
            this.cityList = {}
        }            
        
    }
}
</script>
