import isDuckDuckGo = require("../is-duckduckgo");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isDuckDuckGo", () => {
  it("returns true for android DuckDuckGo", () => {
    expect(isDuckDuckGo(AGENTS.androidDuckDuckGo)).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/duckduckgo/i.test(key)) {
        ua = AGENTS[key];
        expect(isDuckDuckGo(ua)).toBe(false);
      }
    });
  });
});
