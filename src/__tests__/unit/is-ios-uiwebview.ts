import { isIosUIWebview } from "../../is-ios-uiwebview";
import { restoreWindow } from "../helpers/restore-window";

import AGENTS from "../helpers/user-agents";

describe("isIosUIWebview", () => {
  restoreWindow();

  it("returns true for iOS webviews when statusbar.visible is false", () => {
    expect(isIosUIWebview(AGENTS.iPadWebview, false)).toBe(true);
    expect(isIosUIWebview(AGENTS.iPodWebview, false)).toBe(true);
    expect(isIosUIWebview(AGENTS.iPhoneWebview, false)).toBe(true);
    expect(isIosUIWebview(AGENTS.iPhoneGoogleSearchAppWebview, false)).toBe(
      true,
    );
  });

  it("returns false for iOS webviews when statusbar.visible is true", () => {
    expect(isIosUIWebview(AGENTS.iPadWebview, true)).toBe(false);
    expect(isIosUIWebview(AGENTS.iPodWebview, true)).toBe(false);
    expect(isIosUIWebview(AGENTS.iPhoneWebview, true)).toBe(false);
    expect(isIosUIWebview(AGENTS.iPhoneGoogleSearchAppWebview, true)).toBe(
      false,
    );
  });

  it("uses window.statusbar.visible when statusBarVisible is not provided", () => {
    Object.defineProperty(window, "statusbar", {
      value: { visible: false },
      configurable: true,
    });
    expect(isIosUIWebview(AGENTS.iPhoneWebview)).toBe(true);
  });
});
