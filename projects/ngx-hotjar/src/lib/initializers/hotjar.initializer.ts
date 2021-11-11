import { APP_INITIALIZER, Provider, isDevMode } from '@angular/core';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';
import { NGX_HOTJAR_SETTINGS_TOKEN } from '../tokens/ngx-hotjar-settings.token';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window-token';
import { HjFn } from '../types/hj';

/**
 * Provides a TOKEN to manually configure Hotjar tracking code by angular way.
 */
export const NGX_HOTJAR_INITIALIZER_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: hotjarInitializer,
  deps: [
    NGX_HOTJAR_SETTINGS_TOKEN,
    DOCUMENT,
    WINDOW
  ]
};

/**
 * Configuration Factory to create hotjar install script tag and attache on DOM at angular initialization.
 */
export function hotjarInitializer(
  settings: IHotjarSettings,
  document: Document,
  window: Window & { hj?: HjFn, _hjSettings?: { hjid: string, hjsv: number } }
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

    Object.defineProperty(window, 'hj', { 
      value: (window.hj || function() {
        (window.hj.q = window.hj.q || []).push(arguments);
      }),
      configurable: true,
      writable: true
    });

    Object.defineProperty(
      window,
      '_hjSettings',
      { 
        value: { hjid: settings.trackingCode, hjsv: (settings.version || 6) },
        configurable: true,
        writable: true
      }
    );

    const head = document.querySelector('head'),
          script = document.createElement('script'),
          uri = `https://static.hotjar.com/c/hotjar-${window._hjSettings.hjid}.js?sv=${window._hjSettings.hjsv}`;

    script.async = true;
    script.src = (settings.uri || uri);

    head.appendChild(script);
  };
}
