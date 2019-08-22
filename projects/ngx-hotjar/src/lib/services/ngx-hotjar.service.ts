import { Injectable } from '@angular/core';

declare var hj: Function;

@Injectable({
  providedIn: 'root'
})
export class NgxHotjarService {

  constructor() { }

  /**
   * Fires an PageView event to an virtual url path
   *
   * @param path virtual url
   */
  virtualPageView(path: string): void {
    try {
      hj('vpv', path);
    } catch (err) {
      this.error(err);
    }
  }

  /**
   * Fires an event on Hotjar. Use this method to trigger events on forms and start video recordings.
   *
   * @param path url
   */
  trigger(path: string): void {
    try {
      hj('trigger', path);
    } catch (err) {
      this.error(err);
    }
  }

  /**
   * Allows you to tag recordings on Hotjar of all visitors passing through a page.
   *
   * @param path tags
   */
  tagRecording(path: string[]): void {
    try {
      hj('tagRecording', path);
    } catch (err) {
      this.error(err);
    }
  }

  /**
   * This option is available in case you need to set up page change tracking manually
   * within your app's router.
   *
   * @param path Path
   */
  stateChange(path: string): void {
    try {
      hj('stateChange', path);
    } catch (err) {
      this.error(err);
    }
  }

  protected error(err): void {
    // window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    /** @todo Check typef for Hotjar */
    throw new Error('Hotjar is not loaded');
  }

}
