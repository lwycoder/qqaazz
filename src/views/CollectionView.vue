<template>
  <div class="collection-container">
    <h2 class="page-title">我的收藏</h2>
    <!-- 收藏的食谱列表 -->
    <div class="recipe-list">
      <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="recipe in collectedRecipes" :key="recipe.id">
          <RecipeCard :recipe="recipe" @collectChange="loadCollectedRecipes" />
        </el-col>
      </el-row>
    </div>
    <!-- 空收藏提示 -->
    <div v-if="collectedRecipes.length === 0" class="empty-tip">
      <el-empty description="暂无收藏的食谱，快去首页收藏喜欢的食谱吧～"></el-empty>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { recipeList } from '@/utils/recipeData'  // 导入所有食谱
import { getCollectedRecipes } from '@/utils/storage'  // 导入收藏工具

// 收藏的食谱列表
const collectedRecipes = ref([])

// 加载收藏的食谱（核心逻辑）
const loadCollectedRecipes = () => {
  const collectedIds = getCollectedRecipes()  // 获取收藏的 ID 数组
  // 筛选出收藏的食谱对象
  collectedRecipes.value = recipeList.filter(recipe => collectedIds.includes(recipe.id))
}

// 页面挂载时加载收藏列表
onMounted(() => {
  loadCollectedRecipes()
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.collection-container {
  padding: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: $primary-color;
}

.recipe-list {
  margin-top: 16px;
}

.empty-tip {
  margin-top: 48px;
  text-align: center;
}
</style>