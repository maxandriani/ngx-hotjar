# Ngx Hotjar

[![Board Status](https://dev.azure.com/maxandriani/b4e20ba0-b58b-4187-9f93-2306acb65b45/485fa029-d914-4b6b-aa2a-bf9605755025/_apis/work/boardbadge/352dfef0-ce60-4e58-b1df-e12399d92d0a)](https://dev.azure.com/maxandriani/b4e20ba0-b58b-4187-9f93-2306acb65b45/_boards/board/t/485fa029-d914-4b6b-aa2a-bf9605755025/Microsoft.RequirementCategory/)

An easy implementation to track hotjar on angular6+ apps.

**@TODO:** 
* Create an Ng Router Helper;
* Create unit tests;

## Install

```
npm install ngx-hotjar
```

## Feedbacks

https://github.com/maxandriani/ngx-hotjar

## Simple Configuration

```ts
import { NgxHotjarModule } from 'ngx-hotjar';

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
class Component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    this.$hotjar.virtualPageView('/virtual/component/started');
  }
}
```

## Trigger events

```ts
class component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    this.$hotjar.trigger('my-event');
  }
}
```

## Trigger Page Navigation

```ts
class component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    this.$hotjar.stateChange(`${$router.urlAlterRedirects}`);
  }
}
```
