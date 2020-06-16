import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { NgxHotjarService } from 'ngx-hotjar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-hotjar';
  log: Array<Array<any>>;

  constructor(
    public hjService: NgxHotjarService,
    private cdr: ChangeDetectorRef
  ) {
  }

  @HostListener('click')
  onClick() {
    try {
      console.log((window as any).hj.q);
      this.log = (window as any).hj.q;
      this.cdr.detectChanges();
    } catch (err) {
      console.error(err);
    }
  }

}
