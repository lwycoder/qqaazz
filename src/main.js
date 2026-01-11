import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 导入路由
import ElementPlus from 'element-plus'  // 导入 Element Plus
import 'element-plus/dist/index.css'  // 导入 Element Plus 样式
import '@/assets/styles/main.scss'  // 导入全局 SCSS 样式

// 导入 Element Plus 所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建 Vue 应用实例
const app = createApp(App)

// 注册所有 Element Plus 图标（全局可用）
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载路由和 Element Plus
app.use(router)
app.use(ElementPlus)

// 挂载应用到 #app 元素
app.mount('#app')