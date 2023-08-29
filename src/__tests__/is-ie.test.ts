import { isIE } from "../";

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIE", () => {
  it("returns false when chrome", () => {
    expect(isIE(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns false when Edge 12", () => {
    expect(isIE(AGENTS.edge12)).toBe(false);
  });

  it("returns false when Edge 13", () => {
    expect(isIE(AGENTS.edge13)).toBe(false);
  });

  it("returns true when IE7", () => {
    expect(isIE(AGENTS.ie7)).toBe(true);
  });

  it("returns true when IE8", () => {
    expect(isIE(AGENTS.ie8)).toBe(true);
  });

  it("returns true when IE9", () => {
    expect(isIE(AGENTS.ie9)).toBe(true);
  });

  it("returns true when IE10", () => {
    expect(isIE(AGENTS.ie10)).toBe(true);
  });

  it("returns true when IE11", () => {
    expect(isIE(AGENTS.ie11)).toBe(true);
  });
});
