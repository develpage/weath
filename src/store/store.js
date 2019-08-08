import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        client_IP: '',

        cityData: {
            cityName: '',
            cityLat: '',
            cityLon: ''
        },

        weatherData: {},

        forecast: {}
        
        
    },
    actions: {},
    mutations: {
        setClientIp (state, ip) {
            state.client_IP = ip
        },
        setLocation (state, location) {
            state.cityData.cityName = location.value
            state.cityData.cityLat  = location.data.geo_lat
            state.cityData.cityLon  = location.data.geo_lon
        },
        setWeather (state, weather) {
            state.weatherData = weather
        },
        setForecast (state, forecast) {
            state.forecast = forecast
        }
    },
    getters: {
        getWeatherTemp (state) {
            return Math.round(state.weatherData.main.temp - 273.15)
        },
        getWeatherIcon(state) {
            return `http://openweathermap.org/img/w/${state.weatherData.weather[0].icon}.png`
        },
        getWeatherPreassure(state) {
            return Math.round(state.weatherData.main.pressure * 0.75006375541921)
        }
    },
    modules: {}
})

export default store
