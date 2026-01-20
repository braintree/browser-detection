import isSilk = require("../../is-silk");

const AGENTS: {
  [key: string]: string;
} = require("../helpers/user-agents.json");

describe("isSilk", () => {
  it("returns true for android Silk", () => {
    expect(isSilk(AGENTS.androidSilk)).toBe(true);
  });

  it("returns true for linux Silk", () => {
    expect(isSilk(AGENTS.linuxSilk)).toBe(true);
  });

  it("returns false for all other browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/silk/i.test(key)) {
        ua = AGENTS[key];
        expect(isSilk(ua)).toBe(false);
      }
    });
  });
});
