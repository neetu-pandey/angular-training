import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flexbox1Component } from './flexbox1.component';

describe('Flexbox1Component', () => {
  let component: Flexbox1Component;
  let fixture: ComponentFixture<Flexbox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flexbox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flexbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
