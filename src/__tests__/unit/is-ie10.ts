import isIe10 = require("../../is-ie10");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIe10", () => {
  restoreWindow();

  it("false when chrome", () => {
    expect(isIe10(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE10", () => {
    expect(isIe10(AGENTS.ie10)).toBe(true);
  });

  it("false when IE9", () => {
    expect(isIe10(AGENTS.ie9)).toBe(false);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.ie10,
      configurable: true,
    });
    expect(isIe10()).toBe(true);
  });
});
