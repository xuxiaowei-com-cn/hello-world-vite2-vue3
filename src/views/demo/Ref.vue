<template>
  <div>
    <br><br>
    <el-link type='primary' target='_blank' href='https://v3.vuejs.org/api/refs-api.html'>refs-api</el-link>
    <br><br>
    <el-tag>作者：{{author}}</el-tag>
    <br><br>
    <el-tag>年龄：{{age}}</el-tag>
    <br><br>
    <el-button @click="nextYear()">下一年</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref(26)
const author = ref('徐晓伟')

function nextYear() {
  // 只能通过 .value 改变值
  age.value ++;
}

</script>

<style scoped>

</style>