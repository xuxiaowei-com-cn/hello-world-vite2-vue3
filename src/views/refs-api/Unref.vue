<template>
  <div>
    <br><br>
    <el-link type='primary' target='_blank' href='https://v3.vuejs.org/api/refs-api.html#unref'>unref</el-link>
    <br><br>
    <el-input v-model='input' id='input' placeholder='请输入内容'></el-input>
    <br><br>
    <el-button @click="unrefButton()">按钮</el-button>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'

const input = ref(null)

function unrefButton() {
  console.log('input.value：', input.value)
  console.log('unref(input)：', unref(input))
  console.log('unref(document.getElementById("input"))：', unref(document.getElementById("input").value))
}

</script>

<style lang="scss">

#input {
  width: 200px;
}

</style>

<style scoped>

</style>