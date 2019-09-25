<template>
    <div>
        
        <transition name="loader">
            <div v-if="loading" class="loading">
                <img class="loading__img" src="../../assets/img/sunlight.svg" alt="">
            </div>
        </transition>

        <div class="current-weather" v-if="post" >
            <slot></slot>
            <div class="current-weather__maindata">
                <p class="current-weather__data temperature"><span>+</span>{{ getWeatherTemp }}<sup>o</sup></p>
                <div class="current-weather__maindata__desc">
                    <img class="current-weather__icon" :src="getWeatherIcon" alt="">
                    <p class="current-weather__data description">{{ weatherData.weather[0].description | capitalize}}</p>
                </div>
            </div>
            
            <div class="current-weather__seconddata">                
                <p class="current-weather__data">
                    <img class="current-weather__data__icon" src="../../assets/img/wind.svg" alt="">
                    Ветер {{ weatherData.wind.speed }} м/с
                </p>
                <p class="current-weather__data">
                    <img class="current-weather__data__icon" src="../../assets/img/humidity.svg" alt="">
                    Влажность {{ weatherData.main.humidity }} %
                </p>
                <p class="current-weather__data">
                    <img class="current-weather__data__icon" src="../../assets/img/preassure.svg" alt="">
                    Давление {{ getWeatherPreassure }} мм рт. ст.
                </p>
            </div>

        </div>

    </div>
</template>

<script>
import weather from './currentWeather'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'CurrentWeather',
    data () {
        return {
            loading: true,
            post: false,
        }
    },
    created () {
        this.$store.watch(
            ()=>{
                return this.$store.state.cityData
            },
            ()=>{
                weather.getCurrentWeather()
                    .then(w => {
                        this.$store.commit('setWeather', w.data)                         
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => {
                        setTimeout(() => {
                            this.loading = false
                            this.post = true 
                        }, 1000)
                    })

                weather.fiveDayForecast()
                    .then(f => {
                        this.$store.commit('setForecast', f.data)
                    })
            },
            {
                deep:true
            }
        )
    },
    filters: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        }
    },
    computed: {
        ...mapState([
            'weatherData'
        ]),
        ...mapGetters([
            'getWeatherTemp',
            'getWeatherIcon',
            'getWeatherPreassure'
        ])
    }
}
</script>

<style scoped>

</style>


