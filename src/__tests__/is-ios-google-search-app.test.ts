import { isIosGoogleSearchApp } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosGoogleSearchApp", () => {
  it("returns true for iphone GoogleSearchApp", () => {
    expect(isIosGoogleSearchApp(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(
      true,
    );
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/googlesearchapp/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosGoogleSearchApp(ua)).toBe(false);
      }
    });
  });
});
