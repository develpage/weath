<template>
    <div class="current-weather">
        <img :src="'http://openweathermap.org/img/w/' + wData.weather[0].icon + '.png'" alt="">
        <p>{{ wData.weather[0].description }}</p>
        <p>{{ Math.round(wData.main.temp - 273.15) }} <span>C<sup>o</sup></span></p>
        <p>Ветер: {{ wData.wind.speed }} м/с</p>
        <p>Влажность: {{ wData.main.humidity }} %</p>
        <p>Давление: {{ Math.round(wData.main.pressure * 0.75006375541921) }} мм рт. ст.</p>
    </div>
</template>

<script>
import weather from './currentWeather'

export default {
    name: 'CurrentWeather',
    data () {
        return {
            wData: {}
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
                        // this.$store.commit('setWeather', w.data)
                        this.wData = w.data
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

<style scoped>

</style>


