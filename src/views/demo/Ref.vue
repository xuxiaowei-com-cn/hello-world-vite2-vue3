<template>
  <div>
    <h2>Ref</h2>
    <div>作者：{{author}}</div>
    <div>年龄：{{age}}</div>
    <button @click="nextYear()">下一年</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref(26)
const author = ref('徐晓伟')
function nextYear() {
  age.value ++;
}

</script>

<style scoped>

</style>