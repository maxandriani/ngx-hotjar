import { InjectionToken, inject } from '@angular/core';
import { WINDOW } from './window-token';
import { HjFn } from '../types/hj';

/**
 * Check if there is some global function called gtag on Window object, or create an empty function to doesn't brake codes...
 */
export function getHjFn(window: Window & { hj?: HjFn }): HjFn {
  // // h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  return (window)
    ? window.hj = (window.hj || function() {
        (window.hj.q = window.hj.q || []).push(arguments);
      }) as HjFn
    : null;
}

/**
 * Provides an injection token to access Google Analytics Gtag Function
 */
export const NGX_HJ_FN = new InjectionToken<HjFn>('ngx-hj-fn', {
  providedIn: 'root',
  factory: () => getHjFn(inject(WINDOW))
});
