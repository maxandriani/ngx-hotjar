import { NgModule, Provider, isDevMode } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NGX_HOTJAR_INITIALIZER_PROVIDER } from './initializers/hotjar.initializer';
import { NGX_HOTJAR_SETTINGS_TOKEN } from './tokens/ngx-hotjar-settings.token';

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [],
  providers: [
  ]
})
export class NgxHotjarModule {
  static forRoot(trackingCode: string, version: number = 6): ModuleWithProviders {
    return {
      ngModule: NgxHotjarModule,
      providers: [
        {
          provide: NGX_HOTJAR_SETTINGS_TOKEN,
          useValue: {
            trackingCode: trackingCode,
            version: version
          }
        },
        NGX_HOTJAR_INITIALIZER_PROVIDER,
      ]
    };
  }
}
