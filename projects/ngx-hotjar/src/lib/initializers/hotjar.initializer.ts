import { APP_INITIALIZER, Provider } from '@angular/core';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';
import { NGX_HOTJAR_SETTINGS_TOKEN } from '../tokens/ngx-hotjar-settings.token';

export const NGX_HOTJAR_INITIALIZER_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: HotjarInitializer,
  deps: [
    NGX_HOTJAR_SETTINGS_TOKEN
  ]
};

export function HotjarInitializer(
  $settings: IHotjarSettings
) {
  return async () => {
    if ($settings.trackingCode === '') {
      console.error('Empty tracking-code. Maybe you forget to inject NGX_HOTJAT_SETTINGS_TOKEN on providers list');
    }

    (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments);
      };

      h._hjSettings = { hjid: $settings.trackingCode, hjsv: $settings.version || 6 };
      a = o.getElementsByTagName('head')[0];

      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;

      a.appendChild(r);

    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  };
}
