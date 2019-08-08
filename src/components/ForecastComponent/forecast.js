export default {
    sortForecastByDay(forecasts) {
        let forecastObject = JSON.parse(JSON.stringify(forecasts.list))
        let result = forecastObject.reduce((acc, item) => {
            let key = item.dt_txt.split(' ')[0].split('-').reverse().join('-')
            if (acc[key]) {
                acc[key].push(item)
            } else {
                acc[key] = [item]
            }
            return acc
        }, {})
       
        return result
    },
    setTemp(k) {
        return Math.round(k - 273.15)
    }
}