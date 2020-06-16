import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxHotjarModule } from 'projects/ngx-hotjar/src/public_api';
import { environment } from 'src/environments/environment';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { NgxHotjarRouterModule } from 'projects/ngx-hotjar/src/lib/ngx-hotjar-router/ngx-hotjar-router.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgxHotjarModule.forRoot(environment.hotjar),
    NgxHotjarRouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
