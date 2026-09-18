import { defineConfig, devices } from '@playwright/test'
import { config } from './src/config/env.config'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  projects: [
    {
      name: 'api',
      testMatch: '**/api/**/*.spec.ts',
      use: {
        baseURL: config.baseUrl,
        extraHTTPHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    },
    {
      name: 'ui-chromium',
      testMatch: '**/ui/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://the-internet.herokuapp.com',
      },
    },
    {
      name: 'reconciliation',
      testMatch: '**/reconciliation/**/*.spec.ts',
      use: {
        baseURL: config.baseUrl,
      },
    },
  ],
})