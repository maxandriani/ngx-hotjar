import { NgModule, ModuleWithProviders } from '@angular/core';
import { NGX_HOTJAR_INITIALIZER_PROVIDER } from './initializers/hotjar.initializer';
import { NGX_HOTJAR_SETTINGS_TOKEN } from './tokens/ngx-hotjar-settings.token';

/**
 * Install Hotjar scripts on Angular Startup life cycle if this environment is a Browser, otherwise just ignore this step.
 *
 * You shall add this module on the Gighest level module of your application, aka `AppModule`. When
 * setup this module, you also have to provide you hotjat tracking code and the version of script. The default version
 * is 6. We do not recoment to expose the tracking code in the repository, so please, use angular environment variable.
 *
 * ## Exemple of Use
 *
```typescript
\@NgModule({
  ...
  imports: [
    ...
    NgxHotjarModule.forRoot(envorinment.hj)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ]
})
```
 */
@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [],
  providers: [
  ]
})
export class NgxHotjarModule {
  /**
   * Setup global settings and provide Hotjar Services.
   *
   * You private tracking code. This tracking code is also known as the same number as `SITE ID` inside Hotjar Dashboard.
   */
  static forRoot(trackingCode: string, version: number = 6, uri?: string): ModuleWithProviders {
    return {
      ngModule: NgxHotjarModule,
      providers: [
        {
          provide: NGX_HOTJAR_SETTINGS_TOKEN,
          useValue: {
            trackingCode,
            version,
            uri
          }
        },
        NGX_HOTJAR_INITIALIZER_PROVIDER,
      ]
    };
  }
}
