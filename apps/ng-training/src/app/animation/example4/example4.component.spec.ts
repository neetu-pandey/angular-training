import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Example4Component } from './example4.component';

describe('Example4Component', () => {
  let component: Example4Component;
  let fixture: ComponentFixture<Example4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example4Component ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
