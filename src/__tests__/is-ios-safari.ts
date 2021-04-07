import isIosSafari = require("../is-ios-safari");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosSafari", () => {
  it("returns true for iOS Safari", () => {
    expect(isIosSafari(AGENTS.iPhone_9_3_1Safari)).toBe(true);
    expect(isIosSafari(AGENTS.iPhone_3_2Safari)).toBe(true);
    expect(isIosSafari(AGENTS.iPad3_2Safari)).toBe(true);
    expect(isIosSafari(AGENTS.iPad5_1Safari)).toBe(true);
    expect(isIosSafari(AGENTS.iPad9_3Safari)).toBe(true);
    expect(isIosSafari(AGENTS.iPodSafari)).toBe(true);
  });

  it("returns false for iOS Chrome", () => {
    expect(isIosSafari(AGENTS.iPhoneUnsupportedChrome)).toBe(false);
    expect(isIosSafari(AGENTS.iPhoneSupportedChrome)).toBe(false);
  });

  it("returns false for iOS Firefox", () => {
    expect(isIosSafari(AGENTS.iPhoneFirefox)).toBe(false);
    expect(isIosSafari(AGENTS.iPadFirefox)).toBe(false);
    expect(isIosSafari(AGENTS.iPodFirefox)).toBe(false);
  });

  it("returns false for Android Chrome", () => {
    expect(isIosSafari(AGENTS.androidPhoneChrome)).toBe(false);
  });

  it("returns false for desktop Safari", () => {
    expect(isIosSafari(AGENTS.macSafari7_0_2)).toBe(false);
    expect(isIosSafari(AGENTS.pcSafari5_1)).toBe(false);
  });
});
