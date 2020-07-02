import fs = require("fs");
import path = require("path");

const browserDetection: {
  [key: string]: Function;
} = require("../../dist/browser-detection");

describe("browserDetection", () => {
  it("includes a prop for each js file in the root directory", () => {
    const functions = Object.keys(browserDetection);
    const files = fs.readdirSync("./");
    const jsFileNames = files.filter(
      (file) => path.extname(file) === ".js" && file !== "browser-detection.js"
    );
    const jsFiles = jsFileNames.map((file) => require(`../../${file}`));

    expect(jsFiles.length).toBeGreaterThan(0);

    jsFiles.forEach((module) => {
      const found = functions.find((prop) => module === browserDetection[prop]);

      if (!found) {
        throw new Error(`${module} was not found on browserDetection`);
      }
    });
  });
});
