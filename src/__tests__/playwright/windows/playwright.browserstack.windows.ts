import { defineConfig } from "@playwright/test";
import { type webCapability } from "../types";
import baseConfig from "../playwright.browserstack.config";
import CAPABILITIES from "../../helpers/capabilities.json";
import {
  commonCaps,
  getBrowserStackEndpoint,
} from "../scripts/browserstack-constants";

const capabilities: Record<string, string>[] = [];

for (let i = 0; i < CAPABILITIES.windows.length; i++) {
  const capability = CAPABILITIES.windows[i] as webCapability;
  capabilities.push({
    ...commonCaps,
    project: `Browser Detection on ${capability.browserName}`,
    browser: capability.browserName,
    browser_Version: capability.browserVersion,
    os: capability.os,
    os_version: capability.osVersion,
  });
}

export default defineConfig({
  ...baseConfig,
  testMatch: "**/windows.spec.ts",
  projects: Array.from(
    capabilities.map((cap) => {
      return {
        name: `windows-${cap.browser}`,
        use: {
          connectOptions: {
            wsEndpoint: getBrowserStackEndpoint(cap),
            timeout: 60000,
          },
          fullyParallel: true,
        },
      };
    }),
  ),
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
