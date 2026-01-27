import { defineConfig } from "@playwright/test";

export default defineConfig({
  globalSetup: "../../scripts/playwright.browserstack.setup.ts",
  globalTeardown: "../../scripts/playwright.browserstack.teardown.ts",

  projects: [
    {
      name: "android",
      testMatch: "android.spec.ts",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
  ],
  timeout: 60000,
  retries: 0,
  webServer: {
    reuseExistingServer: true,
    command: "npm run start",
    url: "http://localhost:8080",
    stdout: "ignore",
    stderr: "pipe",
  },
  use: {
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
  },

  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],

  expect: {
    timeout: 10000,
  },
});
