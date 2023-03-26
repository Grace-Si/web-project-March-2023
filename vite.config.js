import { defineConfig } from 'vite';
import path from 'path'; 

export default defineConfig({    
  root: './src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //定义@为去./src 去找
    },
  },
});

