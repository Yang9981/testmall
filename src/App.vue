<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue"
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import 'assets/css/normalize.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
