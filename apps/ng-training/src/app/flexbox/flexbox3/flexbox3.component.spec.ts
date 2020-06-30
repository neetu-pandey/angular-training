import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flexbox3Component } from './flexbox3.component';

describe('Flexbox3Component', () => {
  let component: Flexbox3Component;
  let fixture: ComponentFixture<Flexbox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flexbox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flexbox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
