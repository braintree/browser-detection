import { isIE11 } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIE11", () => {
  it("returns false when chrome", () => {
    expect(isIE11(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns true when IE11", () => {
    expect(isIE11(AGENTS.ie11)).toBe(true);
  });

  it("returns false when IE9", () => {
    expect(isIE11(AGENTS.ie9)).toBe(false);
  });

  it("returns false when IE10", () => {
    expect(isIE11(AGENTS.ie10)).toBe(false);
  });
});
