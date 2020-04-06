import isEdge from "../is-edge";
import AGENTS = require("./helpers/user-agents.json");

describe("isEdge", () => {
  it("returns false when chrome", () => {
    expect(isEdge(AGENTS.pcChrome_41)).toBe(false);
  });

  it("returns false when IE11", () => {
    expect(isEdge(AGENTS.ie11)).toBe(false);
  });

  it("returns false when IE9", () => {
    expect(isEdge(AGENTS.ie9)).toBe(false);
  });

  it("returns false when IE10", () => {
    expect(isEdge(AGENTS.ie10)).toBe(false);
  });

  it("returns true when Edge 12", () => {
    expect(isEdge(AGENTS.edge12)).toBe(true);
  });

  it("returns true when Edge 13", () => {
    expect(isEdge(AGENTS.edge13)).toBe(true);
  });
});
