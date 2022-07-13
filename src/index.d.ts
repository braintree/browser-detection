export {};

type WindowSafari = {
  // Disabling rule here because we don't really care is on the safari object beyond 'pushNotifications'.
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  pushNotifications: any;
  [key: string]: any;
};
declare global {
  interface Window {
    safari?: Partial<WindowSafari>;
  }
}
