import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { svgBuilder } from './src/plugins/svgBuilder'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  base: `/vue3_demo/`,
  plugins: [vue(), svgBuilder('./src/assets/icons/')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/helpers/_variable.scss";
          @import "./src/scss/helpers/_viewport.scss";
          @import "./src/scss/components/button.scss";
        `,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        
        // 關於 Vite 部署到 GitHub Pages 卻找不到 _plugin-vue_export-helper 問題
        // https://israynotarray.com/other/20220928/1377668819/
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          // substr 是被淘汰語法，因此要改 slice
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
        },
      },
    },
  },
})
