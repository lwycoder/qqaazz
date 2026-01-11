<template>
  <el-menu :default-active="activePath" class="nav-menu" mode="horizontal">
    <el-container>
      <el-menu-item index="/" @click="navigateTo('/')">
        <HomeFilled class="nav-icon" />
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/collection" @click="navigateTo('/collection')">
        <StarFilled class="nav-icon" />
        <span>我的收藏</span>
      </el-menu-item>
    </el-container>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { HomeFilled, StarFilled } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const activePath = ref(route.path)  // 当前激活的路由

// 监听路由变化，更新激活状态
watch(
  () => route.path,
  (newPath) => {
    activePath.value = newPath
  }
)

// 导航跳转函数
const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.nav-menu {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 60px;
  line-height: 60px;

  .nav-icon {
    margin-right: 8px;
  }

  el-menu-item {
    font-size: 16px;
    color: #333;

    &.is-active {
      color: $primary-color !important;
      font-weight: 600;
    }
  }
}
</style>