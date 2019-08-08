<template>
    <div class="a">
        <button @click="sortForecastByDay">aaa</button>
        <ul v-for="(forecast, index) in forecasts.list" :key="index">
            <li>date: {{ forecast.dt_txt }}</li>
            <li>temp: {{ setTemp(forecast.main.temp) }} <span>C<sup>o</sup></span></li>
            <li><img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'" /></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Forecast',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            forecasts: state => state.forecast
        })
    },
    methods: {
        sortForecastByDay() {

            let result = this.forecasts.list.reduce((acc, item)=>{

                let key = item.dt_txt.split('-')[2].split(' ')[0]

                if (acc[key]) {
                    acc[key].push(item)
                } else {
                    acc[key] = [item]
                }
                return acc
                }, {})


                console.log(result);

            },
            setTemp(k) {
                return Math.round(k - 273.15)
            }
    }
}
</script>
