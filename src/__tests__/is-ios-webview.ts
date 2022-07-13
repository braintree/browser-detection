import isIosWebview = require("../is-ios-webview");

type WindowSafari = {
  // Disabling rule here because we don't really care is on the safari object beyond 'pushNotifications'.
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  pushNotifications: any;
  [key: string]: any;
};
declare global {
  interface Window {
    safari?: Partial<WindowSafari>;
  }
}

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosWebview", () => {
  beforeEach(() => {
    window.safari = {
      pushNotification: {},
    };
  });

  it("returns true for iOS webviews", () => {
    let key, ua;
    /* eslint-disable no-undefined */
    window.safari = undefined;

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

  it("returns true iPhone on version 15.5 in a webview", () => {
    /* eslint-disable no-undefined */
    window.safari = undefined;
    // This is a merchant-supplied user agent that exhibited the issue they have.
    // It appears that the user agent can return with `Safari` in it even if its a webview.
    // This broke our prev regex since it had 'Safari' after 'AppleWebKit' and is a webview
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
