import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLinksComponent } from './i18n-links.component';

describe('I18nLinksComponent', () => {
  let component: I18nLinksComponent;
  let fixture: ComponentFixture<I18nLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
