import hasSoftwareKeyboard = require("../has-software-keyboard");
import isAndroid = require("../is-android");
import isChromeOS = require("../is-chrome-os");
import isIos = require("../is-ios");

import { mocked } from "ts-jest/utils";

jest.mock("../is-android");
jest.mock("../is-chrome-os");
jest.mock("../is-ios");

describe("hasSoftwareKeyboard", () => {
  beforeEach(() => {
    mocked(isIos).mockReturnValue(false);
    mocked(isAndroid).mockReturnValue(false);
    mocked(isChromeOS).mockReturnValue(false);
  });

  it("returns true for ios", () => {
    mocked(isIos).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for android", () => {
    mocked(isAndroid).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for Chrome OS", () => {
    mocked(isChromeOS).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns false when all software browser agents return false", () => {
    expect(hasSoftwareKeyboard()).toBe(false);
  });
});
