import isIe11 from "../is-ie11";
const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIe11", () => {
  it("returns false when chrome", () => {
    expect(isIe11(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns true when IE11", () => {
    expect(isIe11(AGENTS.ie11)).toBe(true);
  });

  it("returns false when IE9", () => {
    expect(isIe11(AGENTS.ie9)).toBe(false);
  });

  it("returns false when IE10", () => {
    expect(isIe11(AGENTS.ie10)).toBe(false);
  });
});
