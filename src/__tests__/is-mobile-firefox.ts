import isMobileFirefox = require("../is-mobile-firefox");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isMobileFirefox", () => {
  it("returns true for iPhone Firefox", () => {
    expect(isMobileFirefox(AGENTS.iPhoneFirefox)).toBe(true);
  });

  it("returns true for iPad Firefox", () => {
    expect(isMobileFirefox(AGENTS.iPadFirefox)).toBe(true);
  });

  it("returns true for iPod Firefox", () => {
    expect(isMobileFirefox(AGENTS.iPodFirefox)).toBe(true);
  });

  it("returns true for Android phone Firefox", () => {
    expect(isMobileFirefox(AGENTS.androidPhoneFirefox)).toBe(true);
  });

  it("returns true for Android tablet Firefox", () => {
    expect(isMobileFirefox(AGENTS.androidTabletFirefox)).toBe(true);
  });

  it("returns false for desktop Firefox", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).toBe(false);
      }
    });
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (
        !/iphone|ipad|ipod|phone|tablet/i.test(key) &&
        !/firefox/i.test(key)
      ) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).toBe(false);
      }
    });
  });
});
