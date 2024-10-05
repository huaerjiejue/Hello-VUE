<script setup>  // 一定要使用setup，不然无法使用props传参
  defineProps({
    id: {
      type: String,
      // required: true
    }
  })
</script>

<template>
  <h1>About {{ id }}</h1>
</template>

<style scoped>

</style>