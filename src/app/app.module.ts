import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxHotjarRouterModule, NgxHotjarModule } from 'ngx-hotjar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxHotjarModule.forRoot(environment.hotjar),
    NgxHotjarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
