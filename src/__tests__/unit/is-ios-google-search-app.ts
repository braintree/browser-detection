import { isIosGoogleSearchApp } from "../../is-ios-google-search-app";
import { restoreWindow } from "../helpers/restore-window";

import AGENTS from "../helpers/user-agents";

describe("isIosGoogleSearchApp", () => {
  restoreWindow();

  it("returns true for iphone GoogleSearchApp", () => {
    expect(isIosGoogleSearchApp(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(
      true,
    );
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.iPhoneGoogleSearchAppWebview,
      configurable: true,
    });
    expect(isIosGoogleSearchApp()).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/googlesearchapp/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosGoogleSearchApp(ua)).toBe(false);
      }
    });
  });
});
