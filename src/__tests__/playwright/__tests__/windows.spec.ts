/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { test, expect } from "@playwright/test";

test.describe("on Windows devices", () => {
  let userAgent: string;

  test.beforeEach(async ({ page }) => {
    // check that the browser loads correctly
    await page.goto(
      "http://localhost:8080/src/__tests__/playwright/scripts/homepage.html",
    );

    userAgent = await page.getByTestId("agent").innerText();
  });

  test("isChrome matches browser", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isChrome(),
    );
    const expectChrome =
      userAgent.includes("Chrome") && !userAgent.includes("Edg");
    expect(result).toBe(expectChrome);
  });

  test("isFirefox matches browser", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isFirefox(),
    );
    const expectFirefox = userAgent.includes("Firefox");
    expect(result).toBe(expectFirefox);
  });

  test("isEdge matches browser", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isEdge(),
    );
    const expectEdge = userAgent.includes("Edg");
    expect(result).toBe(expectEdge);
  });

  test("isAndroid is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isAndroid(),
    );
    expect(result).toBe(false);
  });

  test("isChromeOs is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isChromeOS(),
    );
    expect(result).toBe(false);
  });

  test("isDuckDuckGo is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isDuckDuckGo(),
    );
    expect(result).toBe(false);
  });

  test("isSafari is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSafari(),
    );
    expect(result).toBe(false);
  });

  test("isIe is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe(),
    );
    expect(result).toBe(false);
  });

  test("isIe9 is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe9(),
    );
    expect(result).toBe(false);
  });

  test("isIe10 is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe10(),
    );
    expect(result).toBe(false);
  });

  test("isIe11 is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe11(),
    );
    expect(result).toBe(false);
  });

  test("isIos is false", async ({ page }) => {
    const notCheckingIpad = await page.evaluate(() => {
      return (window as any).browserDetection.isIos(undefined, false);
    });
    expect(notCheckingIpad).toBe(false);

    const checkingIpad = await page.evaluate(() => {
      return (window as any).browserDetection.isIos(undefined, true);
    });
    expect(checkingIpad).toBe(false);
  });

  test("isIosFirefox is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosFirefox(),
    );
    expect(result).toBe(false);
  });

  test("isIosGoogleSearchApp is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosGoogleSearchApp(),
    );
    expect(result).toBe(false);
  });

  test("isIosSafari is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosSafari(),
    );
    expect(result).toBe(false);
  });

  test("isIosWebview is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIosUIWebview is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosUIWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIosWKWebview is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosWKWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIpadOS is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIpadOS(),
    );
    expect(result).toBe(false);
  });

  test("isMobileFirefox is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isMobileFirefox(),
    );
    expect(result).toBe(false);
  });

  test("isOpera is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isOpera(),
    );
    expect(result).toBe(false);
  });

  test("isSamsungBrowser is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSamsungBrowser(),
    );
    expect(result).toBe(false);
  });

  test("isSilk is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSilk(),
    );
    expect(result).toBe(false);
  });

  test("hasSoftwareKeyboard is false", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.hasSoftwareKeyboard(),
    );
    expect(result).toBe(false);
  });

  test("supportsPaymentRequestApi returns expected", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.supportsPaymentRequestApi(),
    );
    const isFirefox = userAgent.includes("Firefox");
    expect(result).toBe(!isFirefox);
  });

  test("supportsPopups returns true", async ({ page }) => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.supportsPopups(),
    );
    expect(result).toBe(true);
  });
});
