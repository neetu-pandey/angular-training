import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxLinksComponent } from './flexbox-links.component';

describe('FlexboxLinksComponent', () => {
  let component: FlexboxLinksComponent;
  let fixture: ComponentFixture<FlexboxLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
