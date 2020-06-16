import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHotjarModule } from '../ngx-hotjar.module';
import { NGX_HOTJAR_ROUTER_INITIALIZER_PROVIDER } from '../initializers/hotjar-router.initializer';

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
 *
 * This Module is just a sugar for:
 *
```typescript
constructor(private router: Router) {}
...
ngOnInit() {
  ...
  this.router
    .events
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(event => {
      if (event instanceof NavigationEnd) {
        hjService.pageView(event.urlAfterRedirects, undefined);
      }
    });
```
 */
@NgModule({
  imports: [
    CommonModule,
    NgxHotjarModule
  ],
  providers: [
    NGX_HOTJAR_ROUTER_INITIALIZER_PROVIDER
  ],
  declarations: []
})
export class NgxHotjarRouterModule { }
