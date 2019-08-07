import axios from 'axios'
import store from '../../store/store'

export default {
    params () {
        return  {
            params: {
                lat: store.state.cityData.cityLat,
                lon: store.state.cityData.cityLon,
                APPID: store.state.weather_APPID
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