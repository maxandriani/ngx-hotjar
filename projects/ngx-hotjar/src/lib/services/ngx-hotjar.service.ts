import { Injectable } from '@angular/core';

declare var hj: Function;

@Injectable({
  providedIn: 'root'
})
export class NgxHotjarService {

  constructor() { }

  virtualPageView(path: string) {
    /** @todo Check typef for Hotjar */
    if (typeof window['hj'] === 'undefined') {
      throw new Error('Hotjar is not loaded');
    }
    hj('vpv', path);
  }

}
