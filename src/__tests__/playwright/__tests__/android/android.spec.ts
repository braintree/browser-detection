/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { test, expect, Page } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("on android devices", () => {
  let userAgent: string;

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await (await browser.newContext()).newPage();
    await page.goto(
      "http://localhost:8080/src/__tests__/playwright/scripts/homepage.html",
    );

    userAgent = (await page.getByTestId("agent").textContent()) ?? "";
  });

  test("isChrome matches browser", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isChrome(),
    );
    const expectChrome =
      userAgent.includes("Chrome") && !userAgent.includes("Edg");
    expect(result).toBe(expectChrome);
  });

  test("isFirefox matches browser", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isFirefox(),
    );
    const expectFirefox = userAgent.includes("Firefox");
    expect(result).toBe(expectFirefox);
  });

  test("isEdge matches browser", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isEdge(),
    );
    const expectEdge = userAgent.includes("Edg");
    expect(result).toBe(expectEdge);
  });

  test("isIosSafari is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosSafari(),
    );
    expect(result).toBe(false);
  });

  test("isSafari is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSafari(),
    );
    expect(result).toBe(false);
  });

  test("isAndroid is true", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isAndroid(),
    );
    expect(result).toBe(true);
  });

  test("isChromeOs is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isChromeOS(),
    );
    expect(result).toBe(false);
  });

  test("isDuckDuckGo is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isDuckDuckGo(),
    );
    expect(result).toBe(false);
  });

  test("isIe is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe(),
    );
    expect(result).toBe(false);
  });

  test("isIe9 is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe9(),
    );
    expect(result).toBe(false);
  });

  test("isIe10 is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe10(),
    );
    expect(result).toBe(false);
  });

  test("isIe11 is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIe11(),
    );
    expect(result).toBe(false);
  });

  test("isIos is false", async () => {
    const notCheckingIpad = await page.evaluate(() => {
      return (window as any).browserDetection.isIos(undefined, false);
    });
    expect(notCheckingIpad).toBe(false);

    const checkingIpad = await page.evaluate(() => {
      return (window as any).browserDetection.isIos(undefined, true);
    });
    expect(checkingIpad).toBe(false);
  });

  test("isIosFirefox is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosFirefox(),
    );
    expect(result).toBe(false);
  });

  test("isIosGoogleSearchApp is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosGoogleSearchApp(),
    );
    expect(result).toBe(false);
  });

  test("isIosWebview is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIosUIWebview is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosUIWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIosWKWebview is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIosWKWebview(),
    );
    expect(result).toBe(false);
  });

  test("isIpadOS is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isIpadOS(),
    );
    expect(result).toBe(false);
  });

  test("isMobileFirefox is true if on firefox", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isMobileFirefox(),
    );
    const expectFirefox = userAgent.includes("Firefox");
    expect(result).toBe(expectFirefox);
  });

  test("isOpera is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isOpera(),
    );
    expect(result).toBe(false);
  });

  test("isSamsungBrowser is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSamsungBrowser(),
    );
    expect(result).toBe(false);
  });

  test("isSilk is false", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.isSilk(),
    );
    expect(result).toBe(false);
  });

  test("hasSoftwareKeyboard is true", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.hasSoftwareKeyboard(),
    );
    expect(result).toBe(true);
  });

  test("supportsPaymentRequestApi returns true", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.supportsPaymentRequestApi(),
    );
    expect(result).toBe(true);
  });

  test("supportsPopups returns true", async () => {
    const result = await page.evaluate(() =>
      (window as any).browserDetection.supportsPopups(),
    );
    expect(result).toBe(true);
  });
});
