import isChrome from "../is-chrome";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isChrome", () => {
  it("false when IE9", () => {
    expect(isChrome(AGENTS.ie9)).toBe(false);
  });

  it("returns true for iOS Chrome", () => {
    expect(isChrome(AGENTS.iPhoneUnsupportedChrome)).toBe(true);
    expect(isChrome(AGENTS.iPhoneSupportedChrome)).toBe(true);
  });

  it("returns true for Android Chrome", () => {
    expect(isChrome(AGENTS.androidPhoneChrome)).toBe(true);
  });

  it("returns true for desktop Chrome", () => {
    expect(isChrome(AGENTS.pcChrome_27)).toBe(true);
    expect(isChrome(AGENTS.pcChrome_41)).toBe(true);
  });

  it("returns true for Android Chromium-based WebViews in KitKat to Lollipop", () => {
    expect(isChrome(AGENTS.androidChromeWebviewKitKatLollipop)).toBe(true);
  });

  it("returns true for Android Chromium-based WebViews in Lollipop and above", () => {
    expect(isChrome(AGENTS.androidChromeWebviewLollipopAndAbove)).toBe(true);
  });

  it("returns false for old Android Chromium-based WebViews", () => {
    expect(isChrome(AGENTS.androidChromeWebviewOld)).toBe(false);
  });

  it("returns false for other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/chrome/i.test(key) && !/unsupported/i.test(key)) {
        ua = AGENTS[key];
        expect(isChrome(ua)).toBe(false);
      }
    });
  });
});
