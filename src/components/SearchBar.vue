<template>
  <div class="search-container">
    <el-row :gutter="16">
      <!-- 关键词搜索输入框 -->
      <el-col :span="16">
        <el-input
          v-model="searchKeyword"
          placeholder="输入食材或食谱名称搜索"
          prefix="Search"  
          @change="handleSearch"  
        ></el-input>
      </el-col>
      <!-- 分类下拉选择 -->
      <el-col :span="8">
        <el-select
          v-model="selectedCategory"
          placeholder="选择分类"
          @change="handleSearch"  
        >
          <el-option
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :value="category.id"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { categories } from '@/utils/recipeData'  // 导入分类数据

// 接收父组件传递的初始值（可选）
const props = defineProps({
  initialKeyword: {
    type: String,
    default: ''
  },
  initialCategory: {
    type: String,
    default: 'all'
  }
})

// 向父组件传递搜索参数
const emit = defineEmits(['search'])

// 搜索关键词和选中分类的响应式变量
const searchKeyword = ref(props.initialKeyword)
const selectedCategory = ref(props.initialCategory)

// 处理搜索逻辑：向父组件发送搜索参数
const handleSearch = () => {
  emit('search', {
    keyword: searchKeyword.value.trim(),  // 去除空格
    category: selectedCategory.value
  })
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.search-container {
  margin-bottom: 24px;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
}
</style>