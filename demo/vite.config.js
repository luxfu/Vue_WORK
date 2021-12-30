import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置@指向src目录
    }
  },
  server: {
    fs: {
      strict: false,
      port: 8080
    }
  }
})