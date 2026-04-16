import isIosWebview = require("../../is-ios-webview");

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIosWebview", () => {
  it("returns true for iOS webviews", () => {
    let key, ua;
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosWebview(ua)).toBe(true);
      }
    }
  });

  it("returns true for Android webviews", () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && /android/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosWebview(ua)).toBe(false);
      }
    }
  });

  it("returns false for desktop Safari", () => {
    expect(isIosWebview(AGENTS.macSafari7_0_2)).toBe(false);
  });

  it("returns true when supported and not case-sensitive", () => {
    expect(isIosWebview(AGENTS.iPhoneWebviewLowercase)).toBe(true);
  });

  it("returns false when using a browser on an iPhone using version 15.5", () => {
    expect(isIosWebview(AGENTS.iPhone_15_5Safari)).toBe(false);
  });

  it("returns false for non-webviews", () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/webview/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWebview(ua)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it("returns true for Google Search App", () => {
    expect(isIosWebview(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(true);
  });

  it("returns true for iPad webview", () => {
    expect(isIosWebview(AGENTS.iPadWebview)).toBe(true);
  });

  it("returns true for iPod webview", () => {
    expect(isIosWebview(AGENTS.iPodWebview)).toBe(true);
  });

  it("returns true for Facebook in-app browser on iOS", () => {
    expect(isIosWebview(AGENTS.iPhoneFacebookWebview)).toBe(true);
  });

  it("returns false for iOS Safari in-app UA with Safari token", () => {
    // UA contains 'Safari' so should not be treated as a webview
    expect(isIosWebview(AGENTS.iPhone_15_5_SafariInApp)).toBe(false);
  });
});
