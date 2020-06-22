<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <ApolloExample msg="Welcome to Your Vue.js App"/> -->
    <NeverGiveUp/>
  </div>
</template>

<script>
// import ApolloExample from './components/ApolloExample.vue'
import NeverGiveUp from './components/NeverGiveUp.vue'

export default {
  name: 'App',
  components: {
    NeverGiveUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
