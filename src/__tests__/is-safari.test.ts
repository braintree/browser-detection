import isSafari from "../is-safari";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isSafari", () => {
  it("returns true when safari", () => {
    expect(isSafari(AGENTS.macSafari7_0_2)).toBe(true);
    expect(isSafari(AGENTS.pcSafari5_1)).toBe(true);
  });

  it("returns false when iOS safari", () => {
    expect(isSafari(AGENTS.iPhone_9_3_1Safari)).toBe(false);
    expect(isSafari(AGENTS.iPhone_3_2Safari)).toBe(false);
    expect(isSafari(AGENTS.iPad3_2Safari)).toBe(false);
    expect(isSafari(AGENTS.iPad5_1Safari)).toBe(false);
    expect(isSafari(AGENTS.iPad9_3Safari)).toBe(false);
    expect(isSafari(AGENTS.iPodSafari)).toBe(false);
  });

  it("returns false for iOS Facebook", () => {
    expect(isSafari(AGENTS.iPhoneFacebookWebview)).toBe(false);
  });

  it("returns false when chrome", () => {
    expect(isSafari(AGENTS.pcChrome_27)).toBe(false);
    expect(isSafari(AGENTS.pcChrome_41)).toBe(false);
    expect(isSafari(AGENTS.pcChrome_60)).toBe(false);
    expect(isSafari(AGENTS.pcChrome_61)).toBe(false);
  });

  it("returns false when firefox", () => {
    expect(isSafari(AGENTS.pcFirefox)).toBe(false);
    expect(isSafari(AGENTS.macFirefox)).toBe(false);
    expect(isSafari(AGENTS.linuxFirefox)).toBe(false);
  });

  it("returns false when opera", () => {
    expect(isSafari(AGENTS.pcOpera)).toBe(false);
    expect(isSafari(AGENTS.macOpera)).toBe(false);
    expect(isSafari(AGENTS.linuxOpera)).toBe(false);
  });

  it("returns false when IE", () => {
    expect(isSafari(AGENTS.ie7)).toBe(false);
    expect(isSafari(AGENTS.ie8)).toBe(false);
    expect(isSafari(AGENTS.ie9)).toBe(false);
    expect(isSafari(AGENTS.ie10)).toBe(false);
    expect(isSafari(AGENTS.ie11)).toBe(false);
  });

  it("returns false when edge", () => {
    expect(isSafari(AGENTS.edge12)).toBe(false);
    expect(isSafari(AGENTS.edge13)).toBe(false);
  });

  it("returns false for all android browsers", () => {
    Object.keys(AGENTS).forEach((key) => {
      if (/Android/i.test(key)) {
        expect(isSafari(AGENTS[key])).toBe(false);
      }
    });
  });
});
