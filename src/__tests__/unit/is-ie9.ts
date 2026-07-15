import { isIe9 } from "../../is-ie9";
import { restoreWindow } from "../helpers/restore-window";

import AGENTS from "../helpers/user-agents";

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
