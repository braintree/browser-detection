export {};

declare global {
  interface Window {
    // Disabling rule here because we don't really care is on the safari object.
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    safari: any;
  }
}
