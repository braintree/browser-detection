import { defineConfig } from "@playwright/test";
import * as path from "path";
import * as dotenv from "dotenv";

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  globalSetup: require.resolve("./scripts/playwright.browserstack.setup.ts"),
  globalTeardown: require.resolve(
    "./scripts/playwright.browserstack.teardown.ts",
  ),

  timeout: 120000,
  retries: 0,
  workers: 3,
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
