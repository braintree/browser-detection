import isIpadOS = require("../../is-ipados");
import { restoreWindow } from "../helpers/restore-window";

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

const DOCUMENT_OBJECT = {
  ontouchend: null,
};

const DOCUMENT_OBJECT_EMPTY = {};

describe("isIpadOS", () => {
  restoreWindow();

  it("returns true for an iPad", () => {
    expect(isIpadOS(AGENTS.iPad3_2Safari, DOCUMENT_OBJECT)).toBe(true);
    expect(isIpadOS(AGENTS.iPad5_1Safari, DOCUMENT_OBJECT)).toBe(true);
    expect(isIpadOS(AGENTS.iPad9_3Safari, DOCUMENT_OBJECT)).toBe(true);
    expect(isIpadOS(AGENTS.iPad13_Safari, DOCUMENT_OBJECT)).toBe(true);
  });

  it("returns false when ontouchend is undefined", () => {
    expect(isIpadOS(AGENTS.iPad3_2Safari, DOCUMENT_OBJECT_EMPTY)).toBe(false);
    expect(isIpadOS(AGENTS.iPad5_1Safari, DOCUMENT_OBJECT_EMPTY)).toBe(false);
    expect(isIpadOS(AGENTS.iPad9_3Safari, DOCUMENT_OBJECT_EMPTY)).toBe(false);
    expect(isIpadOS(AGENTS.iPad13_Safari, DOCUMENT_OBJECT_EMPTY)).toBe(false);
  });

  it("returns true for ipad", () => {
    expect(isIpadOS(AGENTS.iPadChromeLowercase, DOCUMENT_OBJECT)).toBe(true);
  });

  it("uses window.navigator.userAgent and window.document when no arguments are provided", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: AGENTS.iPad13_Safari,
      configurable: true,
    });
    Object.defineProperty(window.document, "ontouchend", {
      value: null,
      configurable: true,
    });
    expect(isIpadOS()).toBe(true);
  });

  it("returns false for non-iOS browsers", () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/iPhone|iPad|iPod/.test(key)) {
        ua = AGENTS[key];
        expect(isIpadOS(ua)).toBe(false);
      }
    }
  });
});
