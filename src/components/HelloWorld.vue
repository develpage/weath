<template>
  <div class="wrapper">
    <div class="header">
      <h1>Погода в:  {{ $store.state.cityData.cityName }}</h1>
      <SearchCity />
    </div>

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
.wrapper {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
