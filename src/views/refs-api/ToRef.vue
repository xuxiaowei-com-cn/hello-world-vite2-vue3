<template>
  <div>
    <br><br>
    <el-link type='primary' target='_blank' href='https://v3.vuejs.org/api/refs-api.html#toRef'>toRef</el-link>
    <br><br>
    <el-button @click="toRefButton()">按钮</el-button>
  </div>
</template>

<script setup>
import { reactive, toRef } from 'vue'

const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

function toRefButton() {
  fooRef.value ++
  console.log(state.foo) // 2

  state.foo ++
  console.log(fooRef.value) // 3
}

</script>

<style scoped>

</style>