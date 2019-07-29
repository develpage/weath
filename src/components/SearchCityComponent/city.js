import axios from 'axios'
import store from '../../store/store'
// import { mapState } from 'vuex'

const optionsCurrentClientLocation = {
    headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${store.getters.dadataApi}`
    }
}

const changeCityOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${store.getters.dadataApi}`
    }
}

const changeCityBody = {
    query: '',
    from_bound: {
        value: 'city'
    },
    to_bound: {
        value: 'city'
    },
    locations: {
        city_type_full: 'город'
    }
}


export default {
    getClientIp() {
        return axios.get('https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=text')
            .then(res => {
                console.log(res);
                return res
            })
            .catch(err => {
                console.log(err)
                return {}
            })
    },
    getCurrentClientLocation(ip) {
        return axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}`, optionsCurrentClientLocation)
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
                return {}
            })
    },
    changeCity (cityName) {
        changeCityBody.query = cityName
        return axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', changeCityBody, changeCityOptions)
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
                return {}
            })
    },
}