import isIe = require("../../is-ie");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isIe", () => {
  restoreWindow();

  it("returns false when chrome", () => {
    expect(isIe(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns false when Edge 12", () => {
    expect(isIe(AGENTS.edge12)).toBe(false);
  });

  it("returns false when Edge 13", () => {
    expect(isIe(AGENTS.edge13)).toBe(false);
  });

  it("returns true when IE7", () => {
    expect(isIe(AGENTS.ie7)).toBe(true);
  });

  it("returns true when IE8", () => {
    expect(isIe(AGENTS.ie8)).toBe(true);
  });

  it("returns true when IE9", () => {
    expect(isIe(AGENTS.ie9)).toBe(true);
  });

  it("returns true when IE10", () => {
    expect(isIe(AGENTS.ie10)).toBe(true);
  });

  it("returns true when IE11", () => {
    expect(isIe(AGENTS.ie11)).toBe(true);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.ie11,
      configurable: true,
    });
    expect(isIe()).toBe(true);
  });
});
