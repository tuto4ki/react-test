import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import path from 'path';
import { configDefaults, UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'server.tsx', 'src/type.tsx'],
      provider: 'c8',
      all: true,
    },
  },
};

export default defineConfig({
  plugins: [eslintPlugin(), react()],
  test: vitestConfig.test,
  server: {
    origin: 'http://127.0.0.1:3001',
  },
});
