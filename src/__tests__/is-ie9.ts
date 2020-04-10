import isIe9 from "../is-ie9";
const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIe9", () => {
  it("false when chrome", () => {
    expect(isIe9(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE9", () => {
    expect(isIe9(AGENTS.ie9)).toBe(true);
  });

  it("false when IE8", () => {
    expect(isIe9(AGENTS.ie8)).toBe(false);
  });
});
