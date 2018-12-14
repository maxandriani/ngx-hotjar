import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHotjarModule } from 'projects/ngx-hotjar/src/public_api';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHotjarModule.forRoot(environment.hotjar)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
