import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
      },
    },
    {
      name: "safari",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "ios",
      use: {
        ...devices["iPhone SE (3rd gen)"],
      },
      testMatch: "__tests__/ios.spec.ts",
    },
    {
      name: "ipad",
      use: {
        ...devices["iPad (gen 11)"],
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7 AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
      },
      testMatch: "__tests__/ipad.spec.ts",
    },
  ],
  testMatch: "__tests__/osx.spec.ts",
  timeout: 120000,
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
    actionTimeout: 30000,
    navigationTimeout: 30000,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
