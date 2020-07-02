import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nDemoComponent } from './i18n-demo.component';

describe('I18nDemoComponent', () => {
  let component: I18nDemoComponent;
  let fixture: ComponentFixture<I18nDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
