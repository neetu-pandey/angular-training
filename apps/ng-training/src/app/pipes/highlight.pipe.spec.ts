import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [HighlightPipe],
      providers: [
        HighlightPipe,
        { provide: DomSanitizer, useValue: { bypassSecurityTrustResourceUrl(){} } }
      ]
    });
  });

  it('create an instance', () => {
    const pipe = TestBed.inject(HighlightPipe)
    expect(pipe).toBeTruthy();
  });
});
