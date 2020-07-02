import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLinksComponent } from './pipe-links.component';

describe('PipeLinksComponent', () => {
  let component: PipeLinksComponent;
  let fixture: ComponentFixture<PipeLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
