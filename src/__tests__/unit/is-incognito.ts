import { isIncognito } from "../../is-incognito";
import { detectIncognito } from "detectincognitojs";

jest.mock("detectincognitojs", () => ({
  detectIncognito: jest.fn(() => Promise.resolve()),
}));

describe("isIncognito", () => {
  it("should call detectIncognito", async () => {
    await isIncognito();
    expect(detectIncognito).toHaveBeenCalled();
  });
});
