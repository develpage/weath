<template>
    <div>

        <div v-if="loading" class="loading">
        Loading...
        </div>

        <div class="current-weather" v-else-if="post" >
            <img :src="getWeatherIcon" alt="">
            <p>{{ weatherData.weather[0].description }}</p>
            <p>{{ getWeatherTemp }} <span>C<sup>o</sup></span></p>
            <p>Ветер: {{ weatherData.wind.speed }} м/с</p>
            <p>Влажность: {{ weatherData.main.humidity }} %</p>
            <p>Давление: {{ getWeatherPreassure }} мм рт. ст.</p>
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


