<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {Document, Filter, Setting} from "@element-plus/icons-vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>

  <div>
    <NavBar/>
    <router-view/>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>

  </div>

  <el-icon>
    <document/>
  </el-icon>
  <el-icon>
    <Filter/>
  </el-icon>
  <HelloWorld msg="Vite + Vue"/>

<!--  <el-button type="primary">我是 ElButton</el-button>-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
