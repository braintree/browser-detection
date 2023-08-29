import { isIE9 } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIE9", () => {
  it("false when chrome", () => {
    expect(isIE9(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE9", () => {
    expect(isIE9(AGENTS.ie9)).toBe(true);
  });

  it("false when IE8", () => {
    expect(isIE9(AGENTS.ie8)).toBe(false);
  });
});
