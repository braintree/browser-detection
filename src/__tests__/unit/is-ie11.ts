import isIe11 = require("../../is-ie11");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIe11", () => {
  restoreWindow();

  it("returns false when chrome", () => {
    expect(isIe11(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns true when IE11", () => {
    expect(isIe11(AGENTS.ie11)).toBe(true);
  });

  it("returns false when IE9", () => {
    expect(isIe11(AGENTS.ie9)).toBe(false);
  });

  it("returns false when IE10", () => {
    expect(isIe11(AGENTS.ie10)).toBe(false);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.ie11,
      configurable: true,
    });
    expect(isIe11()).toBe(true);
  });
});
