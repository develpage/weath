<template>
    <div id="map">
        <button @click="getMap">getMap</button>
        <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            disableDefaultUi: false
        }"
        ref="map"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
        >
        </GmapMap>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'WeatherMap',
    mounted() {
        console.log(this.$refs.map);
    },
    methods: {
        getMap(){
            axios.get(`https://tile.openweathermap.org/map/pressure_new/5/1/100.png?appid=${process.env.VUE_APP_WEATHER_APPID}`)
            .then(resp => {
                console.log(resp.data)
                

                console.log(Buffer.from(resp.data, 'binary').toString('base64'));


            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

