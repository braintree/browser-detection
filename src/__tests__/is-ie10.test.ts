import { isIE10 } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIE10", () => {
  it("false when chrome", () => {
    expect(isIE10(AGENTS.pcChrome_41)).toBe(false);
  });

  it("true when IE10", () => {
    expect(isIE10(AGENTS.ie10)).toBe(true);
  });

  it("false when IE9", () => {
    expect(isIE10(AGENTS.ie9)).toBe(false);
  });
});
