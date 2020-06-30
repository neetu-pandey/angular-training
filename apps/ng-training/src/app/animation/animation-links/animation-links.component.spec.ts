import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLinksComponent } from './animation-links.component';

describe('AnimationLinksComponent', () => {
  let component: AnimationLinksComponent;
  let fixture: ComponentFixture<AnimationLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
