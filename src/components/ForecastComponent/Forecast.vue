<template>
    <div class="a">
        <!-- <ul v-for="(forecast, index) in forecasts.list" :key="index">
            <li>date: {{ forecast.dt_txt }}</li>
            <li>temp: {{ forecast.main.temp - 273.15 }} <span>C<sup>o</sup></span></li>
            <li><img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'" /></li>
        </ul> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Forecast',
    data() {
        return {
            forecast: this.$store.state.forecast
        }
    },
    computed: {
        ...mapState({
            forecast2: state => state.forecast
        })
        // forecasts() {
        //     console.log(this.$store.state.forecast)
        //     return this.$store.state.forecast
        // }
    },
    mounted() {
        console.log(this.forecast);
        console.log(this.forecast2);
    }
}
</script>
