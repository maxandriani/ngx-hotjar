import { InjectionToken } from '@angular/core';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';

export const NGX_HOTJAR_SETTINGS_TOKEN = new InjectionToken<IHotjarSettings>('ngx-hotjar-settings', {
  factory: () => ({ trackingCode: '', version: 6 })
});
