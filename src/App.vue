<template>
  <div id="app">
    <main-component></main-component>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>

<style lang="sass">
   @import '@/assets/styles/style.sass'
</style>
