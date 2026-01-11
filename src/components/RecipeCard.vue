<template>
  <el-card class="recipe-card" shadow="hover">
    <!-- 食谱封面图 -->
    <div class="card-img">
      <img :src="recipe.cover" :alt="recipe.title" />
    </div>
    <!-- 卡片内容 -->
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">{{ recipe.title }}</h3>
        <!-- 收藏按钮 -->
        <el-button
          :icon="StarFilled"
          class="collect-btn"
          :class="{ collected: isCollected }"
          @click="handleCollect"
          circle
        ></el-button>
      </div>
      <!-- 食谱元信息 -->
      <div class="card-meta">
        <el-tag size="small" :type="getTagType()">{{ recipe.category }}</el-tag>
        <span class="meta-item">{{ recipe.time }}</span>
        <span class="meta-item">难度：{{ recipe.difficulty }}</span>
      </div>
      <!-- 食材预览 -->
      <div class="card-ingredients">
        <span class="ingredient-label">食材：</span>
        <span class="ingredient-list">{{ getIngredientText(recipe.ingredients) }}</span>
      </div>
      <!-- 查看详情按钮 -->
      <el-button
        class="view-btn"
        type="primary"
        size="small"
        @click="goToDetail"
      >
        查看详情
      </el-button>
    </div>
  </el-card>
</template>

<script setup>
// 1. 导入核心依赖（确保路径正确）
import { defineProps, defineEmits, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { StarFilled } from '@element-plus/icons-vue'
// 导入工具函数（确保 storage.js 存在且导出正确）
import { isCollected as checkCollected, collectRecipe, cancelCollect } from '@/utils/storage'

// 2. 定义 props（指定默认值，避免传参缺失报错）
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
    default: () => ({
      title: '默认食谱',
      cover: 'https://picsum.photos/id/292/400/300',
      ingredients: [],
      time: '未知',
      difficulty: '未知',
      category: '家常菜'
    })
  }
})

// 3. 定义 emits（规范语法）
const emit = defineEmits(['collectChange'])

// 4. 路由实例
const router = useRouter()

// 5. 收藏状态（添加错误处理，避免无ID报错）
const isCollected = ref(() => {
  try {
    return checkCollected(props.recipe.id)
  } catch (err) {
    return false
  }
})

// 6. 处理收藏逻辑（添加错误捕获）
const handleCollect = () => {
  try {
    if (isCollected.value) {
      cancelCollect(props.recipe.id)
    } else {
      collectRecipe(props.recipe.id)
    }
    isCollected.value = !isCollected.value
    emit('collectChange')
  } catch (err) {
    console.error('收藏操作失败：', err)
  }
}

// 7. 跳转到详情页（判断路由是否存在）
const goToDetail = () => {
  if (router.hasRoute('detail')) {
    router.push({ name: 'detail', params: { id: props.recipe.id } })
  } else {
    console.error('路由 "detail" 未定义')
  }
}

// 8. 分类标签类型（避免分类不存在报错）
const getTagType = () => {
  const typeMap = {
    '家常菜': 'success',
    '川菜': 'danger',
    '西餐': 'primary',
    '凉菜': 'info'
  }
  return typeMap[props.recipe.category] || 'default'
}

// 9. 食材文本处理（避免数组为空报错）
const getIngredientText = (ingredients) => {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return '暂无食材信息'
  }
  return ingredients.slice(0, 3).join('、') + (ingredients.length > 3 ? '...' : '')
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

// 定义局部变量
$collect-color: #f56c6c;

.recipe-card {
  width: 100%;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;

  .card-img {
    height: 220px; // 增加图片高度
    overflow: hidden;
    border-radius: 12px 12px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;

      &:hover {
        transform: scale(1.1); // 更大的缩放效果
      }
    }
  }

  .card-content {
    padding: 20px; // 增加内边距

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;

      .card-title {
        font-size: 20px; // 增加字体大小
        font-weight: 600;
        margin: 0;
        color: $text-color;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.3;
      }

      .collect-btn {
        color: #bdbdbd;
        transition: all 0.3s ease;
        margin-top: -4px;
        
        &:hover {
          color: $collect-color;
          transform: scale(1.1);
        }

        &.collected {
          color: $collect-color;
        }
      }
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      color: $text-secondary;
      font-size: 13px;
      flex-wrap: wrap;
    }

    .card-ingredients {
      margin-bottom: 20px;
      color: $text-secondary;
      font-size: 14px;
      line-height: 1.5;

      .ingredient-label {
        font-weight: 600;
        color: $text-color;
        margin-right: 8px;
      }

      .ingredient-list {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .view-btn {
      width: 100%;
      font-size: 14px;
    }
  }
}
</style>