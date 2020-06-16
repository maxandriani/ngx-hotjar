import { Provider, APP_BOOTSTRAP_LISTENER, ComponentRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxHotjarService } from '../services/ngx-hotjar.service';

/**
 * Provide a DI Configuration to attach Hotjar Trigger to Router Events at Angular Startup Cycle.
 */
export const NGX_HOTJAR_ROUTER_INITIALIZER_PROVIDER: Provider = {
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  useFactory: HotjarRouterInitializer,
  deps: [
    NgxHotjarService
  ]
};

/**
 * Attach a listener to `NavigationEnd` Router event. So, every time Router finish the page resolution it should call `NavigationEnd` event.
 * We assume that NavigationEnd is the final page resolution and call Hotjar `stateChange` command.
 *
 * To avoid double binds, we also destroy the subscription when de Bootstrap Component is destroied. But, we don't know for sure
 * that this strategy does not cause double bind on multiple bootstrap components.
 *
 * We are using de component's injector reference to resolve Router, sou I hope there is no problem w/ double bing.
 *
 * If you have this problem, I encourage not Use NgxHotjarRouterModule and atach the listener on AppComponent initialization.
 */
export function HotjarRouterInitializer(
  hjService: NgxHotjarService
) {
  return async (c: ComponentRef<any>) => {
    const router = c.injector.get(Router);
    const subs = router
      .events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          hjService.stateChange(event.urlAfterRedirects);
        }
      });
    // Cleanup
    c.onDestroy(() => subs.unsubscribe());
  };
}
