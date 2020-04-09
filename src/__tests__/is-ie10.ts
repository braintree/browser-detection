import isIe10 from "../is-ie10";
import AGENTS = require("./helpers/user-agents.json");

describe("isIe10", () => {
  it("false when chrome", () => {
    expect(isIe10(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE10", () => {
    expect(isIe10(AGENTS.ie10)).toBe(true);
  });

  it("false when IE9", () => {
    expect(isIe10(AGENTS.ie9)).toBe(false);
  });
});
