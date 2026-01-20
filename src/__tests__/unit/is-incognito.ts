import isIncognito = require("../../is-incognito");
import detectIncognito = require("detectincognitojs");

jest.mock("detectincognitojs", () => ({
  detectIncognito: jest.fn(() => Promise.resolve()),
}));

describe("isIncognito", () => {
  it("should call detectIncognito", async () => {
    await isIncognito();
    expect(detectIncognito.detectIncognito).toHaveBeenCalled();
  });
});
