import axios from 'axios'
import store from '../../store/store'

export default {
    params () {
        return  {
            params: {
                lat: store.getters.cityData.cityLat,
                lon: store.getters.cityData.cityLon,
                APPID: store.getters.weatherApi
            }
        }
    },
    getCurrentWeather () {        
        return axios.get('http://api.openweathermap.org/data/2.5/weather?lang=ru', this.params())
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
                return {}
            })

    },
    fiveDayForecast () {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast?lang=ru', this.params())
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
                return {}
            })
    }
}