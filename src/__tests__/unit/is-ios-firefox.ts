import isIosFirefox = require("../../is-ios-firefox");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIosFirefox", () => {
  restoreWindow();

  it("returns true for iPhone Firefox", () => {
    expect(isIosFirefox(AGENTS.iPhoneFirefox)).toBe(true);
  });

  it("returns true for iPad Firefox", () => {
    expect(isIosFirefox(AGENTS.iPadFirefox)).toBe(true);
  });

  it("returns true for iPod Firefox", () => {
    expect(isIosFirefox(AGENTS.iPodFirefox)).toBe(true);
  });

  it("returns false for Android phone Firefox", () => {
    expect(isIosFirefox(AGENTS.androidPhoneFirefox)).toBe(false);
  });

  it("returns false for Android tablet Firefox", () => {
    expect(isIosFirefox(AGENTS.androidTabletFirefox)).toBe(false);
  });

  it("returns false for desktop Firefox", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).toBe(false);
      }
    });
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.iPhoneFirefox,
      configurable: true,
    });
    expect(isIosFirefox()).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (
        !/iphone|ipad|ipod|phone|tablet/i.test(key) &&
        !/firefox/i.test(key)
      ) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).toBe(false);
      }
    });
  });
});
