import { Injectable, Inject, isDevMode } from '@angular/core';
import { NGX_HJ_FN } from '../tokens/ngx-hj-token';
import { NGX_HOTJAR_SETTINGS_TOKEN } from '../tokens/ngx-hotjar-settings.token';
import { IHotjarSettings } from '../interfaces/i-hotjar-settings';
import { HjFn } from '../types/hj';

@Injectable({
  providedIn: 'root'
})
export class NgxHotjarService {

  /**
   * Provide direct access to the `hj.*` static functions. If the desired function is not available on type definition, you can cast to `any` as following.
   *
```typescript
(hjService.lib as any).myBrandNewStaticFn()
```
   */
  get lib(): HjFn {
    return this._hj;
  }

  /** @ignore */
  constructor(
    /** @ignore */
    @Inject(NGX_HJ_FN) private _hj: HjFn,
    /** @ignore */
    @Inject(NGX_HOTJAR_SETTINGS_TOKEN) private settings: IHotjarSettings
  ) { }

  /** Expose Hotjar Function calls */
  hj(...args: Array<any>) {
    try {
      this._hj(...args);
    } catch (err) {
      if (isDevMode() || this.settings.ennableTracing) {
        console.error(err.message);
      }
    }
  }

  /**
   * Fires an PageView event on Hotjar. Use this method to trigger an virtual url path. The same as
   *
```typescript
hj('vpv', path)
```
   */
  virtualPageView(path: string): void {
    this.hj('vpv', path);
  }

  /**
   * Fires an event on Hotjar. Use this method to trigger events on forms and start video recordings. Same as
   *
```typescript
hj('trigger', path)
```
   */
  trigger(path: string): void {
    this.hj('trigger', path);
  }

  /**
   * Allows you to tag recordings on Hotjar of all visitors passing through a page.
   *
   * You can create multiple tags by providing aditional arguments
   *
   * @deprecated
   *
```typescript
hjService.tagRecording(['tag1', 'tag2', 'tag3', ...]);
hj('tagRecording', ['tag1', 'tag2', 'tag3', ...])
```
   */
  tagRecording(tagOrCollection: string[]): void;
  /**
   * Allows you to tag recordings on Hotjar of all visitors passing through a page.
   *
   * You can create multiple tags by providing aditional arguments
   *
```typescript
hjService.tagRecording('tag1', 'tag2', 'tag3', ...);
hj('tagRecording', ['tag1', 'tag2', 'tag3', ...])
```
   */
  tagRecording(tagOrCollection: string, ...tags: Array<string>): void;
  tagRecording(tagOrCollection: string | Array<string>, ...tags: Array<string>): void {
    // Retrocompatibility
    if (!Array.isArray(tagOrCollection)) {
      tagOrCollection = [tagOrCollection];
    }
    this.hj('tagRecording', tagOrCollection.concat(...tags));
  }

  /**
   * This option is available in case you need to set up page change tracking manually
   * within your app's router.
   *
```typescript
hj('stateChange', path)
```
   */
  stateChange(path: string): void {
    this.hj('stateChange', path);
  }

  /**
   * Signals form submission success
   *
```typescript
hj('formSubmitSuccessful');
```
   */
  formSubmitSuccessful(): void {
    this.hj('formSubmitSuccessful');
  }

  /**
   * Signals form submission failure
   *
```typescript
hj('formSubmitFailed');
```
   */
  formSubmitFailed(): void {
    this.hj('formSubmitFailed');
  }

}
