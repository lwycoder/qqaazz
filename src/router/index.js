import { createRouter, createWebHistory } from 'vue-router'
// 导入页面视图
import HomeView from '@/views/HomeView.vue'
import CollectionView from '@/views/CollectionView.vue'
import DetailView from '@/views/DetailView.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '食谱收藏夹 - 首页' }  // 页面标题
  },
  {
    path: '/collection',
    name: 'collection',
    component: CollectionView,
    meta: { title: '我的收藏' }
  },
  {
    path: '/detail/:id',  // 动态路由，传递食谱 ID
    name: 'detail',
    component: DetailView,
    meta: { title: '食谱详情' }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // HTML5 历史模式
  routes
})

// 路由守卫：跳转时设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()  // 继续跳转
})

export default router