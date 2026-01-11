import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')  // 仅保留路径别名配置
    }
  },
  server: {
    port: 3000,
    open: true
  }
  // 完全删除 css 节点！避免自动注入导致重复导入
})