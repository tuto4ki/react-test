import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import { configDefaults, UserConfig as VitestUserConfigInterface } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'server.tsx', 'src/type.tsx', '/instrumented'],
      provider: 'c8',
      all: true,
    },
  },
};

export default defineConfig({
  plugins: [
    eslintPlugin(),
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: vitestConfig.test,
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
    host: true,
    port: 3001,
    origin: 'http://127.0.0.1:3001',
  },
  build: {
    sourcemap: true,
  },
});
