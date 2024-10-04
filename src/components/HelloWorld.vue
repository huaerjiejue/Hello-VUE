<script setup>
import { ref } from 'vue'
import { inject} from "vue";

defineProps({
  msg: String,
})

const count = ref(0)

const $axios = inject('$axios')  //使用inject和main.js中的provide提供的axios实例
if(!$axios) {
  console.error('axios is not provided')
}
const handleClick = async () => {
  try {
    const res = await $axios.get('/hello')
    console.log(res)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="handleClick">我是 ElButton</el-button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
