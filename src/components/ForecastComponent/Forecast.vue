<template>
    <div class="a">
        <ul v-for="(forecast, index) in forecasts.list" :key="index">
            <li>date: {{ forecast.dt_txt }}</li>
            <li>temp: {{ forecast.main.temp - 273.15 }} <span>C<sup>o</sup></span></li>
            <li><img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Forecast',
    computed: {
        forecasts() {
            console.log(this.$store.getters.getForecast)
            return this.$store.getters.getForecast
        }
    }
}
</script>
