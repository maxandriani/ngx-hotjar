import { InjectionToken } from '@angular/core';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';

/**
 * Provides a token to override default settings. You can use this token to enhance our library
 * and configure multiple sites/app on the same environment.
 */
export const NGX_HOTJAR_SETTINGS_TOKEN = new InjectionToken<IHotjarSettings>('ngx-hotjar-settings', {
  factory: () => ({ trackingCode: '', version: 6, ennableTracing: false })
});
