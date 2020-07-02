import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18n1Component } from './i18n1.component';

describe('I18n1Component', () => {
  let component: I18n1Component;
  let fixture: ComponentFixture<I18n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
