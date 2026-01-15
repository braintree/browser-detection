import { defineConfig } from "@playwright/test";
import * as path from "path";
import * as dotenv from "dotenv";
import CAPABILITIES from "../helpers/capabilities.json";
import {
  commonCaps,
  getBrowserStackEndpoint,
} from "./scripts/browserstack-constants";
import { webCapability } from "./types";

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, ".env") });

const createWebProjects = (platform: "windows" | "osx") => {
  const platformCapabilities = CAPABILITIES[platform] as webCapability[];
  return platformCapabilities.map((cap) => {
    const capabilities: Record<string, string> = {
      ...commonCaps,
      project: `${platform}`,
      browser: cap.browserName,
      browser_Version: cap.browserVersion,
      os: cap.os,
      os_version: cap.osVersion,
    };

    return {
      name: `${cap.os}`,
      workers: platform === "osx" ? 4 : 3,
      testMatch: `**/${platform}.spec.ts`,
      use: {
        name: `${cap.browserName}`,
        connectOptions: {
          wsEndpoint: getBrowserStackEndpoint(capabilities),
          timeout: 60000,
        },
        fullyParallel: true,
      },
    };
  });
};

export default defineConfig({
  globalSetup: require.resolve("./scripts/playwright.browserstack.setup.ts"),
  globalTeardown: require.resolve(
    "./scripts/playwright.browserstack.teardown.ts",
  ),

  projects: [...createWebProjects("windows"), ...createWebProjects("osx")],
  timeout: 120000,
  retries: 1,
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
