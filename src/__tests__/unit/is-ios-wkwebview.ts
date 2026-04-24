import isIosWKWebview = require("../../is-ios-wkwebview");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIosWKWebview", () => {
  restoreWindow();

  let key, ua;

  it("returns true for iOS webviews when statusbar.visible is true", () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWKWebview(ua, true)).toBe(true);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it("returns false for iOS webviews when statusbar.visible is false", () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWKWebview(ua, false)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it("uses window.statusbar.visible when statusBarVisible is not provided", () => {
    Object.defineProperty(window, "statusbar", {
      value: { visible: true },
      configurable: true,
    });
    expect(isIosWKWebview(AGENTS.iPhoneWebview)).toBe(true);
  });
});
