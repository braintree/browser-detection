/**
 * Captures the jsdom default values of window properties that unit tests may
 * mutate via Object.defineProperty, and exposes a helper that restores them
 * in an afterEach hook. Call this at the top of any describe block whose
 * tests modify window.navigator.userAgent or window.statusbar, so that
 * mutations don't leak into subsequent tests in the same file.
 *
 * Usage:
 *   import { restoreWindow } from "../helpers/restore-window";
 *   describe("myModule", () => {
 *     restoreWindow();
 *     ...
 *   });
 */

const DEFAULT_UA = window.navigator.userAgent;

export function restoreWindow(): void {
  afterEach(() => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: DEFAULT_UA,
      configurable: true,
    });

    // window.statusbar does not exist in jsdom — delete it if a test added it.
    delete (window as unknown as Record<string, unknown>).statusbar;

    // window.document.ontouchend does not exist in jsdom — delete it if a test added it.
    delete (window.document as unknown as Record<string, unknown>).ontouchend;
  });
}
