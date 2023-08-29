import { vi } from "vitest";
import { hasSoftwareKeyboard, isAndroid, isChromeOS, isIos } from "../";

vi.mock("../lib/is-android");
vi.mock("../lib/is-chrome-os");
vi.mock("../lib/is-ios");

describe("hasSoftwareKeyboard", () => {
  beforeEach(() => {
    vi.mocked(isIos).mockReturnValue(false);
    vi.mocked(isAndroid).mockReturnValue(false);
    vi.mocked(isChromeOS).mockReturnValue(false);
  });

  it("returns true for ios", () => {
    vi.mocked(isIos).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for android", () => {
    vi.mocked(isAndroid).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns true for Chrome OS", () => {
    vi.mocked(isChromeOS).mockReturnValue(true);

    expect(hasSoftwareKeyboard()).toBe(true);
  });

  it("returns false when all software browser agents return false", () => {
    expect(hasSoftwareKeyboard()).toBe(false);
  });
});
