<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <br><br>
    <router-link to="/refs-api/ref">Ref</router-link>
    |
    <router-link to="/refs-api/unref">Unref</router-link>
    |
    <router-link to="/refs-api/toRef">ToRef</router-link>
  </div>
  <router-view/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
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