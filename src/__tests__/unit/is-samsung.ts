import isSamsungBrowser = require("../../is-samsung");

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isSamsungBrowser", () => {
  it("returns true for Samsung browser", () => {
    expect(isSamsungBrowser(AGENTS.androidSamsung)).toBe(true);
  });

  it("returns false for old unsupported Samsung browsers", () => {
    expect(isSamsungBrowser(AGENTS.androidSamsungUnsupported)).toBe(false);
  });

  it("returns false for Samsung webviews", () => {
    expect(isSamsungBrowser(AGENTS.androidSamsungWebview)).toBe(false);
  });

  it("returns false for all other browsers", () => {
    Object.keys(AGENTS).forEach((key) => {
      if (!/samsung/i.test(key)) {
        const ua = AGENTS[key];
        expect(isSamsungBrowser(ua)).toBe(false);
      }
    });
  });
});
