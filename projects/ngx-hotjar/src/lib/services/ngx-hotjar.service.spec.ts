import { TestBed } from '@angular/core/testing';

import { NgxHotjarService } from './ngx-hotjar.service';
import { NgxHotjarModule } from '../ngx-hotjar.module';
import { WINDOW } from '../tokens/window-token';

describe('NgxHotjarService', () => {

  window['hj'] = function () {
    (window['hj']['q'] = window['hj']['q'] || []).push(arguments);
  };

  let spyOnHj: jasmine.Spy;

  beforeEach(() => {
    spyOnHj = spyOn(window as any, 'hj');
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgxHotjarModule.forRoot('0000')
    ]
  }));

  it('should be created', () => {
    const service: NgxHotjarService = TestBed.get(NgxHotjarService);
    expect(service).toBeTruthy();
  });

  it('should expose `hj()` function call interface', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService);

    hj.hj('test', 'test', 'test');

    expect(spyOnHj).toHaveBeenCalledWith('test', 'test', 'test');
  });

  it('should fires hj(`vpv`, path)', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService),
          page = 'test.html';

    hj.virtualPageView(page);

    expect(spyOnHj).toHaveBeenCalledWith('vpv', page);
  });

  it('should fires hj(`trigger`, path)', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService),
          path = '/test.html';

    hj.trigger(path);

    expect(spyOnHj).toHaveBeenCalledWith('trigger', path);
  });

  it('should fires hj(`tagRecording`, tags) w/ tags array', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService),
          tag1 = 'tag 1',
          tag2 = 'tag 2',
          tag3 = 'tag 3';

    hj.tagRecording([tag1, tag2, tag3]);

    expect(spyOnHj).toHaveBeenCalledWith('tagRecording', [tag1, tag2, tag3]);
  });

  it('should fires hj(`tagRecording`, tags) w/ tags arguments', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService),
          tag1 = 'tag 1',
          tag2 = 'tag 2',
          tag3 = 'tag 3';

    hj.tagRecording(tag1, tag2, tag3);

    expect(spyOnHj).toHaveBeenCalledWith('tagRecording', [tag1, tag2, tag3]);
  });

  it('should fires hj(`stateChange`, path)', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService),
          path = '/test.html';

    hj.stateChange(path);

    expect(spyOnHj).toHaveBeenCalledWith('stateChange', path);
  });

  it('should fires hj(`formSubmitSuccessful`)', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService);

    hj.formSubmitSuccessful();

    expect(spyOnHj).toHaveBeenCalledWith('formSubmitSuccessful');
  });

  it('should fires hj(`formSubmitFailed`)', () => {
    const hj: NgxHotjarService = TestBed.get(NgxHotjarService);

    hj.formSubmitFailed();

    expect(spyOnHj).toHaveBeenCalledWith('formSubmitFailed');
  });

});
