import isChromeOS from "../is-chrome-os";
const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isChromeOS", () => {
  it("returns true for ChromeOS Chrome", () => {
    expect(isChromeOS(AGENTS.chromeOsChrome)).toBe(true);
  });

  test.skip("returns true for ChromeOS [some other browser]", () => {
    // Currently any other browser for ChromeOS is actually a
    // questionably functional Android port. For example Firefox & Brave
    // have Android user agents, and Edge installs but doesn't actually
    // work.
  });

  it("returns false for non-ChromeOS browsers", () => {
    let ua;

    Object.keys(AGENTS).forEach((key) => {
      if (!/chromeOS/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isChromeOS(ua)).toBe(false);
        } catch (err) {
          throw new Error(`key: ${key}, ua: ${ua}. caused a failure`);
        }
      }
    });
  });
});
