import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHotjarModule } from 'projects/ngx-hotjar/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHotjarModule.forRoot('1061434')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
