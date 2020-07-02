import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Example3Component } from './example3.component';

describe('Example3Component', () => {
  let component: Example3Component;
  let fixture: ComponentFixture<Example3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example3Component ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
