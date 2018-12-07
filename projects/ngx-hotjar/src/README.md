# Ngx Hotjar

An easy implementation to track hotjar on angular6+ apps

## Install

```
npm install ngx-hotjar
```

## Configuration

```ts
import { NgxHotjarModule } from 'projects/ngx-hotjar/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHotjarModule.forRoot('traking-code')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Virtual Page Views

```ts
class component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    this.$hotjar.virtualPageView('/virtual/component/started');
  }
}
```