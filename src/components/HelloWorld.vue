<script setup>
import { inject } from "vue";
import { useCounterStore} from "../stores/useCounterStore.js";

defineProps({
  msg: String,
})

// axios实例
const $axios = inject('$axios')  //使用inject和main.js中的provide提供的axios实例
if(!$axios) {
  console.error('axios is not provided')
}

//按钮点击事件
const handleClick = async () => {
  try {
    const res = await $axios.get('/hello')
    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

// Vuex stores
const store = useCounterStore()

</script>

<template>
  <h1>{{ msg }}</h1>
<!--  <el-button type="primary" @click="handleClick">我是 ElButton</el-button>-->
  <div class="card">
<!--    <button type="button" @click="increment">count is {{count}}</button>-->
    <!-- 添加一个组件，显示count是不是奇数，荣国调用get_odd显示 -->
<!--    <p>count is odd: {{getOdd}}</p>-->

<!--    将两个按钮和一个显示放在同一行显示美观    -->
    <div class="button-row">
      <el-button type="primary" @click="handleClick">我是 ElButton</el-button>
      <button type="button" @click="store.increment()">count is {{store.count}}</button>
<!--      下面的功能没有实现呢，getter中的是数值而不是方法，为了美观也就设置了一个button的样式，实际上没有实现什么功能-->
      <button type="button">doubleCount is {{store.doubleCount}}</button>
<!--      <p>count is odd: {{getOdd}}</p>-->
      <button type="button" @click="store.$reset()">resetCounter</button>
    </div>

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

.button-row {
  display: flex; /* 使用 flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: center;
  gap: 10px; /* 控制按钮之间的间距 */
}

.button-row p {
  margin: 0; /* 去掉 <p> 标签的默认外边距 */
}
</style>
