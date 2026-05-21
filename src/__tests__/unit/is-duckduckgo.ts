import isDuckDuckGo = require("../../is-duckduckgo");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isDuckDuckGo", () => {
  restoreWindow();

  it("returns true for android DuckDuckGo", () => {
    expect(isDuckDuckGo(AGENTS.androidDuckDuckGo)).toBe(true);
  });

  it("returns true for iOS DuckDuckGo", () => {
    expect(isDuckDuckGo(AGENTS.iPhoneDuckDuckGo)).toBe(true);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.androidDuckDuckGo,
      configurable: true,
    });
    expect(isDuckDuckGo()).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/duckduckgo/i.test(key)) {
        ua = AGENTS[key];
        expect(isDuckDuckGo(ua)).toBe(false);
      }
    });
  });
});
