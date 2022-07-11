import isIosWebview = require("../is-ios-webview");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe.only("isIosWebview", () => {
  it.only("returns true for iOS webviews", () => {
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

  it.skip("returns true merchantSuppliedSlackWebview example", () => {
    // This is a merchant-supplied user agent that exhibited the issue they have. 
    // It appears that the user agent can return with `Safari` in it even if its a webview. Which breaks our regex since it asserts it
    // is a webview if it doesn't have safar after AppleWebKit
    const merchantSuppliedSlackWebview = "mozilla/5.0 (linux; android 12; pixel 3a) applewebkit/537.36 (khtml, like gecko) chrome/101.0.4951.61 mobile safari/537.36"
    expect(isIosWebview(merchantSuppliedSlackWebview)).toBe(true);
  });

  it("returns true safariBrowserOnIphone example", () => {
    // This is a merchant-supplied user agent that exhibited the issue they have. 
    // It appears that the user agent can return with `Safari` in it even if its a webview. Which breaks our regex since it asserts it
    // is a webview if it doesn't have safar after AppleWebKit
    const safariBrowserOnIphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1"
    expect(isIosWebview(safariBrowserOnIphone)).toBe(false);
  });

  it("returns true slackWebviewOnIphone example", () => {
    // This is a merchant-supplied user agent that exhibited the issue they have. 
    // It appears that the user agent can return with `Safari` in it even if its a webview. Which breaks our regex since it asserts it
    // is a webview if it doesn't have safar after AppleWebKit
    const slackWebviewOnIphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 15 5 like Mac OS X) AppleWebKit/605.1.15(KHTML like Gecko) Version/15.5 Mobile/15E148 Safari/604.1"
    expect(isIosWebview(slackWebviewOnIphone)).toBe(true);
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
