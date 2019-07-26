<template>
    <div>
        <p>{{ $store.getters.weatherData.t }} <span>C<sup>o</sup></span></p>
        <img :src="$store.getters.weatherData.icon" alt="">
    </div>
</template>

<script>
import weather from './currentWeather'

export default {
    name: 'CurrentWeather',
    data () {
        return {
            
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

                weather.fiveDayForecast()
                    .then(f => {
                        this.$store.commit('setForecast', f.data)
                    })
            },
            {
                deep:true
            }
        )
    }
}
</script>

