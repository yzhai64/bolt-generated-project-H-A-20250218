import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // 确保以当前目录为根目录
  build: {
    rollupOptions: {
      input: './index.html', // 确保路径指向根目录的 index.html
    },
  },
});