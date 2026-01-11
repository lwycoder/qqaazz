// 存储键名（统一管理）
const STORAGE_KEY = 'collectedRecipes'

// 1. 获取所有收藏的食谱 ID
export const getCollectedRecipes = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []  // 没有数据时返回空数组
}

// 2. 检查某个食谱是否已收藏
export const isCollected = (recipeId) => {
  const collectedIds = getCollectedRecipes()
  return collectedIds.includes(recipeId)  // 返回布尔值
}

// 3. 收藏食谱（添加 ID 到本地存储）
export const collectRecipe = (recipeId) => {
  const collectedIds = getCollectedRecipes()
  if (!collectedIds.includes(recipeId)) {  // 避免重复收藏
    collectedIds.push(recipeId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectedIds))  // 存储到本地
  }
}

// 4. 取消收藏（从本地存储移除 ID）
export const cancelCollect = (recipeId) => {
  let collectedIds = getCollectedRecipes()
  collectedIds = collectedIds.filter(id => id !== recipeId)  // 过滤掉要取消的 ID
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collectedIds))
}