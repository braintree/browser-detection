import { isSamsung } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isSamsung", () => {
  it("returns true for Samsung browser", () => {
    expect(isSamsung(AGENTS.androidSamsung)).toBe(true);
  });

  it("returns false for old unsupported Samsung browsers", () => {
    expect(isSamsung(AGENTS.androidSamsungUnsupported)).toBe(false);
  });

  it("returns false for Samsung webviews", () => {
    expect(isSamsung(AGENTS.androidSamsungWebview)).toBe(false);
  });

  it("returns false for all other browsers", () => {
    Object.keys(AGENTS).forEach((key) => {
      if (!/samsung/i.test(key)) {
        const ua = AGENTS[key];
        expect(isSamsung(ua)).toBe(false);
      }
    });
  });
});
