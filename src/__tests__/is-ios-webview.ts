import isIosWebview = require("../is-ios-webview");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosWebview", () => {
  it("returns true for iOS webviews", () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        console.log("key", key);

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

  it("returns false when using a browser on an iPhone example", () => {
    expect(isIosWebview(AGENTS.iPhone_15_5Safari)).toBe(false);
  });

  it.skip("returns true slackWebviewOnIphone example", () => {
    // This is a merchant-supplied user agent that exhibited the issue they have.
    // It appears that the user agent can return with `Safari` in it even if its a webview. Which breaks our regex since it asserts it
    // is a webview if it doesn't have safar after AppleWebKit
    expect(isIosWebview(AGENTS.iPhone_15_5_Webview)).toBe(true);
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
});
