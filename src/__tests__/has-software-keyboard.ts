import hasSoftwareKeyboard = require("../has-software-keyboard");
import isAndroid = require("../is-android");
import isChromeOS = require("../is-chrome-os");
import isIos = require("../is-ios");

jest.mock("../is-android");
jest.mock("../is-chrome-os");
jest.mock("../is-ios");

describe("hasSoftwareKeyboard", () => {
  beforeEach(() => {
    jest.mocked(isIos).mockReturnValue(false);
    jest.mocked(isAndroid).mockReturnValue(false);
    jest.mocked(isChromeOS).mockReturnValue(false);
  });

  it("returns true for ios", () => {
    jest.mocked(isIos).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for android", () => {
    jest.mocked(isAndroid).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for Chrome OS", () => {
    jest.mocked(isChromeOS).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns false when all software browser agents return false", () => {
    expect(hasSoftwareKeyboard()).toBe(false);
  });
});
