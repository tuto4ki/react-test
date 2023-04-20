import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import { configDefaults, UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'src/main.tsx', 'src/type.tsx'],
      provider: 'c8',
      all: true,
    },
  },
};

export default defineConfig({
  plugins: [eslintPlugin(), react()],
  test: vitestConfig.test,
});
