import { hotjarInitializer } from './hotjar.initializer';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window-token';

describe('HotjarInitializer()', () => {

  afterEach(() => {
    const head = document.getElementsByTagName('head')[0];
    const script = document.querySelector('script[src^="https://static.hotjar.com/c/hotjar"]');
    head.removeChild(script);
    script.remove();
  });

  beforeEach(() => {
    const head = document.getElementsByTagName('head')[0];
    const script = document.querySelector('script[src^="https://static.hotjar.com/c/hotjar"]');
    head.removeChild(script);
    script.remove();
  });

  it('should not initialize when trackingCode is empty', async () => {
    const settings = { trackingCode: '', version: 6, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW),
          spyOnConsole = spyOn(console, 'error');

    await hotjarInitializer(settings, document, window)();

    expect(spyOnConsole).toHaveBeenCalledWith('Empty tracking code for Hotjar. Make sure to provide one when initializing NgxHotjarModule.');
  });

  it('should not initialize when document is empty', async () => {
    const settings = { trackingCode: '222222', version: 6, ennableTracing: false },
          document = undefined,
          window = TestBed.get(WINDOW),
          spyOnConsole = spyOn(console, 'error');

    await hotjarInitializer(settings, document, window)();

    expect(spyOnConsole).toHaveBeenCalledWith('Was not possible to access `document` instance. Make shure this environment works on a Broser like API');
  });

  it('should not initialize when window is empty', async () => {
    const settings = { trackingCode: '222222', version: 6, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = undefined,
          spyOnConsole = spyOn(console, 'error');

    await hotjarInitializer(settings, document, window)();

    expect(spyOnConsole).toHaveBeenCalledWith('Was not possible to access `window` api. Make sure this environment works like a browser.');
  });

  it('should create a default hj() fn', async () => {
    const settings = { trackingCode: '222222', version: 6, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW);

    await hotjarInitializer(settings, document, window)();

    window.hj();

    expect(window.hj).toBeTruthy();
    expect((window.hj || {} as any).q).toBeTruthy();
  });

  it('should create a _hjSettings attribute', async () => {
    const settings = { trackingCode: '222222', version: 6, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW);

    await hotjarInitializer(settings, document, window)();

    expect(window._hjSettings).toBeTruthy();
    expect((window._hjSettings || {} as any).hjid).toEqual(settings.trackingCode);
    expect((window._hjSettings || {} as any).hjsv).toEqual(settings.version);
  });

  it('should create a script tag to load Hotjar', async () => {
    const settings = { trackingCode: '222222', version: 6, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW);

    await hotjarInitializer(settings, document, window)();

    const tag = document.querySelector('script[src^="https://static.hotjar.com/c/hotjar"]') as HTMLScriptElement,
          uri = (tag || {} as any).src;

    expect(tag).toBeTruthy();
    expect(uri).toEqual(`https://static.hotjar.com/c/hotjar-${settings.trackingCode}.js?sv=${settings.version}`);
  });

  it('should create a script tag to load Hotjar w/ custom version', async () => {
    const settings = { trackingCode: '222222', version: 20, ennableTracing: false },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW);

    await hotjarInitializer(settings, document, window)();

    const tag = document.querySelector(`script[src^="https://static.hotjar.com/c/hotjar-${settings.trackingCode}.js?sv=${settings.version}"]`) as HTMLScriptElement;

    expect(tag).toBeTruthy();
  });

  it('should create a script tag to load Hotjar w/ custom uri', async () => {
    const settings = { trackingCode: '222222', version: 20, ennableTracing: false, uri: 'https://jonas.brother/' },
          document = TestBed.get(DOCUMENT),
          window = TestBed.get(WINDOW);

    await hotjarInitializer(settings, document, window)();

    const tag = document.querySelector(`script[src^="${settings.uri}"]`) as HTMLScriptElement,
          uri = (tag || {} as any).src;

    expect(tag).toBeTruthy();
    expect(uri).toEqual(settings.uri);
  });

});
