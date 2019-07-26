import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        weather_APPID: '7e3fbc88fd6222fb743d652c55e3d775',
        dadata_API_KEY: 'aa89573dd11d24e26d3818f58250ec8a56519b52',
        client_IP: '',

        cityData: {
            cityName: '',
            cityLat: '',
            cityLon: ''
        },

        weatherData: {
            t: '',
            icon: ''
        },

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
            state.weatherData.t = Math.round(weather.main.temp - 273.15)
            state.weatherData.icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        },
        setForecast (state, forecast) {
            state.forecast = forecast
        }
    },
    getters: {
        dadataApi (state) {
            return state.dadata_API_KEY
        },
        weatherApi(state) {
            return state.weather_APPID
        },
        cityData (state) {
            return state.cityData
        },
        weatherData (state) {
            return state.weatherData
        },
        getForecast (state) {
            return state.forecast
        }
    },
    modules: {}
})

export default store
