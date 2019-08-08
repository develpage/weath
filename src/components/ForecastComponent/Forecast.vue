<template>
    <div class="a">
        <div class="forecasts-by-day" v-for="(forecastByDay, i) in forecastList" :key="i">
            <p>{{ i }}</p>
            <ul class="forecast" v-for="(forecast, index) in forecastByDay" :key="index">
                <li>date: {{ forecast.dt_txt }}</li>
                <li>temp: {{ setTemp(forecast.main.temp) }} <span>C<sup>o</sup></span></li>
                <li><img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'" /></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Forecast',
    data() {
        return {
            forecastList: {}
        }
    },
    computed: {
        ...mapState({
            forecasts: state => state.forecast
        })
    },
    methods: {
        sortForecastByDay() {

            let forecastObject = JSON.parse(JSON.stringify(this.forecasts.list))

            let result = forecastObject.reduce((acc, item)=>{

                let key = item.dt_txt.split(' ')[0].split('-').reverse().join('-')

                if (acc[key]) {
                    acc[key].push(item)
                } else {
                    acc[key] = [item]
                }
                return acc
            }, {})

            this.forecastList = result

        },
        setTemp(k) {
            return Math.round(k - 273.15)
        }
    },
    watch: {
        'forecasts': function() {
            this.sortForecastByDay()
        }
    }
}
</script>

<style scoped>
</style>
