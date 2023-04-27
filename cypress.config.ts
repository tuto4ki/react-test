import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,
  env: {
    coverage: true,
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
  experimentalFetchPolyfill: true,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
  pageLoadTimeout: 100000,
});
