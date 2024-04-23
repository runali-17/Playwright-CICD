import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  fullyParallel: false,

  testDir: './tests',

  timeout: 50000,

  // retries: 1,

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
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     headless: true,
    //   },
    // },
    {
      name: 'iPhone 11',
      use: {
        ...devices['iPhone 11'],
        headless: true,
      }
    },
    // {
    //   name: 'Google Pixel 4',
    //   use: {
    //     ...devices['Pixel 4'],
    //     headless: true,
    //   }
    // },
  ],
});
