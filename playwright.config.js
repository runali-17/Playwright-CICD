import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({

  fullyParallel: false,

  testDir: './tests',

  timeout: 50000,

  retries: 1,

  reporter: [

    ['html'],

    [
      'allure-playwright',
      {
        details: true,
        outputFolder: "allure-results",
        suiteTitle: false,

      }
    ]
  ],

  expect: { timeout: 5000 },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
      },
    },
  ],

});
