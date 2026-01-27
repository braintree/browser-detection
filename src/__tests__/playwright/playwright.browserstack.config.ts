import { defineConfig } from "@playwright/test";
import CAPABILITIES from "../helpers/capabilities.json";
import {
  commonCaps,
  getBrowserStackEndpoint,
} from "./scripts/browserstack-constants";
import { mobileCapability, webCapability } from "./types";

const createWebProjects = (platform: "windows" | "osx") => {
  const platformCapabilities = CAPABILITIES[platform] as webCapability[];
  return platformCapabilities.map((cap) => {
    const capabilities: Record<string, string> = {
      ...commonCaps,
      browser: cap.browserName,
      browser_Version: cap.browserVersion,
      os: cap.os,
      os_version: cap.osVersion,
    };

    return {
      name: `${platform}`,
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

// note that browserstack does not seem to support this format of playwright config for android
// mostly connectOptions.wsEndpoint to generate the capabilities
// android configurations are in the /android/ directory
const createMobileAppleProjects = (platform: "ios" | "ipad") => {
  const platformCapabilities = CAPABILITIES[platform] as mobileCapability[];
  return platformCapabilities.map((cap) => {
    const capabilities: Record<string, string> = {
      ...commonCaps,
      browser_version: "latest",
      browser: cap.browserName,
      os: platform,
      real_mobile: "true",
      device: cap.deviceName,
      os_version: cap.osVersion,
    };

    return {
      name: `${platform}`,
      fullyParallel: false,
      testMatch: `**/${platform}.spec.ts`,
      use: {
        baseUrl: "http://localhost:8080",
        connectOptions: {
          wsEndpoint: getBrowserStackEndpoint(capabilities),
        },
        // BrowserStack iOS doesn't support ignoreHTTPSErrors
        ignoreHTTPSErrors: false,
      },
    };
  });
};

export default defineConfig({
  globalSetup: require.resolve("./scripts/playwright.browserstack.setup.ts"),
  globalTeardown:
    require.resolve("./scripts/playwright.browserstack.teardown.ts"),

  projects: [
    ...createWebProjects("windows"),
    ...createWebProjects("osx"),
    ...createMobileAppleProjects("ios"),
    ...createMobileAppleProjects("ipad"),
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
