import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18n2Component } from './i18n2.component';

describe('I18n2Component', () => {
  let component: I18n2Component;
  let fixture: ComponentFixture<I18n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
