import isOpera = require("../../is-opera");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isOpera", () => {
  restoreWindow();

  it("returns true for android Opera", () => {
    expect(isOpera(AGENTS.androidOpera)).toBe(true);
  });

  it("returns true for iPhone Opera", () => {
    expect(isOpera(AGENTS.iPhoneOperaWebview)).toBe(true);
  });

  it("returns true for linux Opera", () => {
    expect(isOpera(AGENTS.linuxOpera)).toBe(true);
  });

  it("returns true for mac Opera", () => {
    expect(isOpera(AGENTS.macOpera)).toBe(true);
  });

  it("returns true for windows Opera", () => {
    expect(isOpera(AGENTS.pcOpera)).toBe(true);
  });

  it("uses window.navigator.userAgent when no argument is provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.androidOpera,
      configurable: true,
    });
    expect(isOpera()).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/opera/i.test(key)) {
        ua = AGENTS[key];
        expect(isOpera(ua)).toBe(false);
      }
    });
  });
});
