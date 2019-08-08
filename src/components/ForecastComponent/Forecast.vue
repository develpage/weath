<template>
    <div class="a">
        <div class="forecasts-by-day" v-for="(forecastByDay, i) in forecastList" :key="i">
            <p>{{ i }}</p>
            <ul class="forecast" v-for="(forecast, index) in forecastByDay" :key="index">
                <li>date: {{ forecast.dt_txt }}</li>
                <li>temp: {{ ForecastMethods.setTemp(forecast.main.temp) }} <span>C<sup>o</sup></span></li>
                <li><img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'" /></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ForecastMethods from './forecast'

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
        }),
        ForecastMethods() {
            return ForecastMethods
        }
    },
    methods: {
        
    },
    watch: {
        'forecasts': function() {
            this.forecastList = ForecastMethods.sortForecastByDay(this.forecasts)
        }
    }
}
</script>

<style scoped>
</style>
