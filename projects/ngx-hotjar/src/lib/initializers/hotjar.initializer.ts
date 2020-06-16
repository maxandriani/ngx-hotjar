import { APP_INITIALIZER, Provider, isDevMode } from '@angular/core';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';
import { NGX_HOTJAR_SETTINGS_TOKEN } from '../tokens/ngx-hotjar-settings.token';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window-token';

/**
 * Provides a TOKEN to manually configure Hojtar tracking code by angular way.
 */
export const NGX_HOTJAR_INITIALIZER_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: HotjarInitializer,
  deps: [
    NGX_HOTJAR_SETTINGS_TOKEN,
    DOCUMENT,
    WINDOW
  ]
};

/**
 * Configuration Factory to create hotjar install script tag and attache on DOM at angular initialization.
 */
export function HotjarInitializer(
  settings: IHotjarSettings,
  document: Document,
  window: Window
) {
  return async () => {
    if (!settings.trackingCode) {
      if (isDevMode()) {
        console.error('Empty tracking code for Hotjar. Make sure to provide one when initializing NgxHotjarModule.');
      }

      return;
    }

    if (!document) {
      if (isDevMode()) {
        console.error('Was not possible to access `document` instance. Make shure this environment works on a Broser like API');
      }

      return;
    }

    if (!window) {
      if (isDevMode()) {
        console.error('Was not possible to access `window` api. Make sure this environment works like a browser.');
      }

      return;
    }

    // (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
    // h._hjSettings = { hjid: $settings.trackingCode, hjsv: $settings.version || 6 };
    const hjWindow = Object.defineProperty(
      window,
      '_hjSettings',
      { value: { hjid: settings.trackingCode, hjsv: settings.version || 6 } }
    );

    const head = document.querySelector('head'),
          script = document.createElement('script'),
          uri = `https://static.hotjar.com/c/hotjar-${hjWindow._hjSettings.hjid}.js?sv=${hjWindow._hjSettings.version}`;

    script.async = true;
    script.src = (settings.uri || uri);

    head.appendChild(script);
  };
}
