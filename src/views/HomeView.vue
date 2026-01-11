<template>
  <div class="home-container">
    <h2 class="page-title">食谱大全</h2>
    <!-- 搜索组件：接收搜索事件 -->
    <SearchBar @search="handleSearch" />
    <!-- 食谱列表 -->
    <div class="recipe-list">
      <el-row :gutter="24">
        <!-- 循环渲染食谱卡片 -->
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="recipe in filteredRecipes" :key="recipe.id">
          <RecipeCard :recipe="recipe" @collectChange="handleCollectChange" />
        </el-col>
      </el-row>
    </div>
    <!-- 空数据提示 -->
    <div v-if="filteredRecipes.length === 0" class="empty-tip">
      <el-empty description="没有找到匹配的食谱"></el-empty>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecipeCard from '@/components/RecipeCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import { recipeList } from '@/utils/recipeData'  // 导入模拟食谱数据

// 原始食谱列表（不直接修改）
const allRecipes = ref(recipeList)
// 筛选后的食谱列表（用于渲染）
const filteredRecipes = ref(recipeList)
// 搜索参数（关键词 + 分类）
const searchParams = ref({
  keyword: '',
  category: 'all'
})

// 处理搜索事件（接收子组件传递的参数）
const handleSearch = (params) => {
  searchParams.value = params
  filterRecipes()  // 执行筛选逻辑
}

// 筛选食谱的核心逻辑
const filterRecipes = () => {
  let result = [...allRecipes.value]  // 复制原始数据，避免污染

  // 1. 按关键词筛选（匹配食谱名称或食材）
  if (searchParams.value.keyword) {
    const keyword = searchParams.value.keyword.toLowerCase()  // 转为小写，忽略大小写
    result = result.filter(recipe => {
      const matchTitle = recipe.title.toLowerCase().includes(keyword)  // 匹配名称
      const matchIngredient = recipe.ingredients.some(ing => ing.toLowerCase().includes(keyword))  // 匹配食材
      return matchTitle || matchIngredient
    })
  }

  // 2. 按分类筛选（all 表示全部）
  if (searchParams.value.category !== 'all') {
    result = result.filter(recipe => recipe.category === searchParams.value.category)
  }

  filteredRecipes.value = result  // 更新筛选结果
}

// 处理收藏状态变化（刷新列表）
const handleCollectChange = () => {
  filteredRecipes.value = [...filteredRecipes.value]  // 触发重新渲染
}

// 页面挂载时执行一次筛选（初始化）
onMounted(() => {
  filterRecipes()
})
</script>

<style scoped lang="scss">
@import '../assets/styles/main.scss';

.home-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 32px 20px;
  min-height: 100vh;
  background-color: $bg-color;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  color: $text-color;
  text-align: center;
  position: relative;
  padding-bottom: 12px;
  animation: fadeIn 0.6s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: $primary-color;
    border-radius: 2px;
  }
}

.recipe-list {
  margin-top: 40px;
  animation: fadeIn 0.6s ease-out 0.2s both;
}

// 响应式布局调整
.el-row {
  margin-left: -12px;
  margin-right: -12px;
}

.el-col {
  padding: 12px;
  
  &:nth-child(1) .recipe-card {
    animation-delay: 0.2s;
  }
  
  &:nth-child(2) .recipe-card {
    animation-delay: 0.3s;
  }
  
  &:nth-child(3) .recipe-card {
    animation-delay: 0.4s;
  }
  
  &:nth-child(4) .recipe-card {
    animation-delay: 0.5s;
  }
  
  &:nth-child(5) .recipe-card {
    animation-delay: 0.6s;
  }
  
  &:nth-child(6) .recipe-card {
    animation-delay: 0.7s;
  }
}

.empty-tip {
  margin-top: 80px;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
  
  .el-empty {
    padding: 40px 20px;
    background-color: $card-bg;
    border-radius: 12px;
    box-shadow: $card-shadow;
  }
  
  .el-empty__description {
    font-size: 16px;
    color: $text-secondary;
  }
}
</style>