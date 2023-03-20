import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  }
};

export default defineConfig({
  plugins: [eslintPlugin(), react()],
  test: vitestConfig.test
});
