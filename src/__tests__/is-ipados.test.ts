import isIpadOS from "../is-ipados";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

const DOCUMENT_OBJECT = {
  ontouchend: null,
};

const DOCUMENT_OBJECT_EMPTY = {};

describe("isIpadOS", () => {
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
