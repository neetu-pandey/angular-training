import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Example2Component } from './example2.component';

describe('Example2Component', () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2Component ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
