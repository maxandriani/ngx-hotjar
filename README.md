# Ngx Hotjar

![Build and Tests](https://github.com/maxandriani/ngx-hotjar/workflows/Build%20and%20Tests/badge.svg?branch=master)

An easy implementation to track hotjar on angular6+ apps. Feedbacks on https://github.com/maxandriani/ngx-hotjar

**@TODO:** 
* Create an Ng Router Helper;
* Create unit tests;

* [Setup](#setup)
* [Changelog](./CHANGELOG.md)

## Install

```
npm install ngx-hotjar
```


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

## Tag recordings

```ts
class component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    this.$hotjar.tagRecording(['tag1', 'tag2']);
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

## Send Form reports
```ts
class component implements OnInit {
  constructor(
    protected $hotjar: NgxHotjarService
  ) {}

  ngOnInit() {
    
    /* Validation code */
    
    if (valid) {
      /* Validation passed - continue... */
      this.$hotjar.formSubmitSuccessful();
      
    } else {
		  /* Validation not passed - halt */
      this.$hotjar.formSubmitFailed();
      
    }
  }
}
```

