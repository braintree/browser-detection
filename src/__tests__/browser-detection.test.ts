import fs from "fs";
import path from "path";

const browserDetection: {
  [key: string]: (ua: string) => boolean;
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
      const found = functions.find(
        (prop) => module.default.name === browserDetection[prop].name
      );

      if (!found) {
        throw new Error(`${module} was not found on browserDetection`);
      }
    });
  });
});