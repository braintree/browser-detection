import isIe9 = require("../../is-ie9");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIe9", () => {
  restoreWindow();

  it("false when chrome", () => {
    expect(isIe9(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE9", () => {
    expect(isIe9(AGENTS.ie9)).toBe(true);
  });

  it("false when IE8", () => {
    expect(isIe9(AGENTS.ie8)).toBe(false);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.ie9,
      configurable: true,
    });
    expect(isIe9()).toBe(true);
  });
});
