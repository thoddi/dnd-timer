import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',    
    emptyOutDir: true,
  },
  plugins: [react({ tsDecorators: true })],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts',
  //   css: true,
  //   reporters: ['verbose'],
  //   coverage: {
  //     reporter: ['text', 'json', 'html'],
  //     include: ['src/**/*'],
  //     exclude: [],
  //   }
  // },
})
