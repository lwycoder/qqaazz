<template>
  <div id="app">
    <!-- 导航栏组件 -->
    <NavBar />
    <!-- 路由视图：渲染当前页面 -->
    <router-view />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'  // 导入导航栏组件
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>