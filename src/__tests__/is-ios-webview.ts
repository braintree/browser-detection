import isIosWebview = require("../is-ios-webview");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe.only("isIosWebview", () => {
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

  it.only("returns true MERCHANT SUPPLIED example", () => {
    // This is a merchant-supplied user agent that exhibited the issue they have. 
    expect(isIosWebview("mozilla/5.0 (linux; android 12; pixel 3a) applewebkit/537.36 (khtml, like gecko) chrome/101.0.4951.61 mobile safari/537.36")).toBe(true);
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
