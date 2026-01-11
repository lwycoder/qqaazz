<template>
  <div class="detail-container">
    <!-- 返回按钮 -->
    <el-button
      type="text"
      icon="ArrowLeft"
      @click="goBack"
      class="back-btn"
    >
      返回
    </el-button>
    <!-- 详情内容 -->
    <div class="recipe-detail">
      <el-row :gutter="24">
        <!-- 食谱图片 -->
        <el-col :xs="24" :md="10">
          <div class="detail-img">
            <img :src="currentRecipe.cover" :alt="currentRecipe.title" />
          </div>
        </el-col>
        <!-- 食谱信息 -->
        <el-col :xs="24" :md="14">
          <div class="detail-info">
            <div class="info-header">
              <h2 class="detail-title">{{ currentRecipe.title }}</h2>
              <!-- 收藏按钮 -->
              <el-button
                icon="StarFilled"
                class="collect-btn"
                :class="{ collected: isCollected }"
                @click="handleCollect"
              >
                {{ isCollected ? '已收藏' : '收藏' }}
              </el-button>
            </div>
            <!-- 元信息（分类、时间、难度） -->
            <div class="info-meta">
              <el-tag size="medium" :type="getTagType(currentRecipe.category)">{{ currentRecipe.category }}</el-tag>
              <div class="meta-item">
                <span class="icon">Clock</span>
                <span>{{ currentRecipe.time }}</span>
              </div>
              <div class="meta-item">
                <span class="icon">Warning</span>
                <span>难度：{{ currentRecipe.difficulty }}</span>
              </div>
            </div>
            <!-- 食材列表 -->
            <div class="ingredients-section">
              <h3 class="section-title">食材准备</h3>
              <div class="ingredients-list">
                <el-tag
                  v-for="(ingredient, index) in currentRecipe.ingredients"
                  :key="index"
                  type="default"
                  effect="plain"
                >
                  {{ ingredient }}
                </el-tag>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 制作步骤 -->
      <div class="steps-section">
        <h3 class="section-title">制作步骤</h3>
        <div class="steps-list">
          <div class="step-item" v-for="(step, index) in currentRecipe.steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">{{ step }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { recipeList } from '@/utils/recipeData'
import { isCollected as checkCollected, collectRecipe, cancelCollect } from '@/utils/storage'

const route = useRoute()  // 获取路由信息
const router = useRouter()  // 路由跳转工具

// 当前展示的食谱
const currentRecipe = ref({})
// 是否收藏
const isCollected = ref(false)

// 返回上一页
const goBack = () => {
  router.back()
}

// 处理收藏/取消收藏
const handleCollect = () => {
  if (isCollected.value) {
    cancelCollect(currentRecipe.value.id)
  } else {
    collectRecipe(currentRecipe.value.id)
  }
  isCollected.value = !isCollected.value
}

// 根据分类设置标签颜色
const getTagType = (category) => {
  const typeMap = {
    '家常菜': 'success',
    '川菜': 'danger',
    '西餐': 'primary',
    '凉菜': 'info'
  }
  return typeMap[category] || 'default'
}

// 页面挂载时初始化数据
onMounted(() => {
  const recipeId = parseInt(route.params.id)  // 获取路由传递的食谱 ID
  const recipe = recipeList.find(item => item.id === recipeId)  // 查找对应的食谱

  if (recipe) {
    currentRecipe.value = recipe  // 赋值给当前食谱
    isCollected.value = checkCollected(recipeId)  // 检查收藏状态
    document.title = `${recipe.title} - 食谱详情`  // 修改页面标题
  } else {
    // 未找到食谱，跳回首页
    router.push('/')
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.detail-container {
  padding: 24px;
}

.back-btn {
  margin-bottom: 16px;
  color: $primary-color;
}

.recipe-detail {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: $card-shadow;
}

.detail-img {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.detail-info {
  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .detail-title {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }

    .collect-btn {
      color: #999;
      transition: all 0.3s ease;

      &.collected {
        color: #f56c6c;
        background-color: rgba(245, 108, 108, 0.1);
      }
    }
  }

  .info-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;

    .meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;

      .icon {
        font-family: 'element-icons';  // Element Plus 图标字体
      }
    }
  }

  .ingredients-section {
    margin-bottom: 24px;

    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid $border-color;
    }

    .ingredients-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
}

.steps-section {
  margin-top: 24px;

  .section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid $border-color;
  }

  .steps-list {
    .step-item {
      display: flex;
      margin-bottom: 24px;
      position: relative;

      // 步骤之间的连接线
      &::after {
        content: '';
        position: absolute;
        left: 19px;
        top: 40px;
        bottom: -12px;
        width: 1px;
        background-color: $border-color;
      }

      // 最后一步去掉连接线
      &:last-child::after {
        display: none;
      }

      .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: $primary-color;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        flex-shrink: 0;  // 不收缩
      }

      .step-content {
        margin-left: 16px;
        flex: 1;
        line-height: 1.8;
        color: #333;
        padding-top: 8px;
      }
    }
  }
}
</style>