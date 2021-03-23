import { defineConfig } from 'vite'
// 自动导入组件库样式插件
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
// import fs from 'fs'
// import lessToJS from 'less-vars-to-js'
// import config from './config'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
})
