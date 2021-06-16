# Ngx Hotjar

![Build and Tests](https://github.com/maxandriani/ngx-hotjar/workflows/Build%20and%20Tests/badge.svg?branch=master)

An easy implementation to track hotjar on angular6+ apps. Feedbacks on https://github.com/maxandriani/ngx-hotjar

* [Setup](#setup)
* [NgxHotjarService](#ngxhotjarservice)
* [Changelog](./CHANGELOG.md)

## Setup

### NPM 

First, you should add ngx-hotjar as a package dependency.

```
npm install ngx-hotjar
```

### Angular Setup

After install `ngx-hotjar` package, you must add `NgxHotjarModule` on import list of your highest level application module, aka, AppModule. Please pay attention to provide a valid Hotjar Tracking Code (Site ID).

```typescript
\@NgModule({
  ...
  imports: [
    ...
    NgxHotjarModule.forRoot(envorinment.hj)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ]
})
```

### Angular Router Setup

We also provide a helper module to easy setup Hotjar navigation triggers on `Router` events. We just add an event listener on `Router`'s `NavigationEnd` event. But, if you feel that to over complicated, we provided an easy setup for you.

```typescript
\@NgModule({
  ...
  imports: [
    ...
    NgxHotjarModule.forRoot(envorinment.hj),
    NgxHotjarRouterModule
// ^^^^^^^^^^^^^^^^^^^^^^^
  ]
})
```

## NgxHotjarService

We also provide a Angular Service to wrap `hj()` function and avoid deal with/ typescript annoying warning when use unknown global functions.

### Hotjar Library Access

Provide direct access to the `hj.*` static functions. If the desired function is not available on type definition, you can cast to `any` as following.

```typescript
(hjService.lib as any).myBrandNewStaticFn()
```

### Hotjar Direct Fn Calls

Expose Hotjar Function calls.

```typescript
hjService.hj(... my args);
```

### Virtual Page View

Fires an PageView event on Hotjar. Use this method to trigger an virtual url path.

```typescript
hjService.virtualPageView(path: string): void
```

### Trigger Hotjar Events

Fires an event on Hotjar. Use this method to trigger events on forms and start video recordings.

```typescript
hjService.trigger(path: string): void;
```

### Tag Recording

Allows you to tag recordings on Hotjar of all visitors passing through a page.

```typescript
hjService.tagRecording('tag1', 'tag2', 'tag3', ...);
```

### State Change

This option is available in case you need to set up page change tracking manually.

```typescript
hjService.stateChange(path: string): void
```

### Form Events

Signals form submission status.

```typescript
hjService.formSubmitSuccessful();
hjService.formSubmitFailed();
```
