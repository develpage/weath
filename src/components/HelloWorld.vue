<template>
  <div>
    <SearchCity />
    <h1>{{ $store.getters.cityData.cityName }}</h1>
    <CurrentWeather />
    <Forecast />
  </div>
</template>

<script>
import SearchCity from './SearchCityComponent/SearchCity'
import CurrentWeather from './CurrentWeatherComponent/CurrentWeather'
import Forecast from './ForecastComponent/Forecast'

export default {
  name: 'HelloWorld',
  components: {
    SearchCity,
    CurrentWeather,
    Forecast
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>


<style scoped>
</style>
