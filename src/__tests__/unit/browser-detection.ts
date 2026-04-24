import fs = require("fs");
import path = require("path");

// This test intentionally imports from the compiled dist/ artifact rather than the TypeScript
// source. Its purpose is publish-integrity: it verifies that each root-level .js shim
// (e.g. is-android.js → dist/is-android) is also exposed as a named export on the main
// dist/browser-detection bundle, matching the tree-shaking contract for package consumers.
//
// Because this test never loads src/browser-detection.ts through ts-jest, Istanbul cannot
// instrument it — so that file is excluded from collectCoverageFrom in package.json.
// src/browser-detection.ts is a pure re-export barrel with no logic or branches, so there
// is no value in a separate TypeScript-source-level test for it.
const browserDetection: {
  [key: string]: (ua: string) => boolean;
} = require("../../../dist/browser-detection");

describe("browserDetection", () => {
  it("includes a prop for each js file in the root directory", () => {
    const functions = Object.keys(browserDetection);
    const files = fs.readdirSync("./");
    const jsFileNames = files.filter(
      (file) =>
        path.extname(file) === ".js" &&
        file !== "browser-detection.js" &&
        file !== "commitlint.config.js",
    );
    const jsFiles = jsFileNames.map((file) => require(`../../../${file}`));

    expect(jsFiles.length).toBeGreaterThan(0);

    jsFiles.forEach((module) => {
      const found = functions.find((prop) => module === browserDetection[prop]);

      if (!found) {
        throw new Error(`${module} was not found on browserDetection`);
      }
    });
  });
});
