import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLinksComponent } from './rxjs-links.component';

describe('RxjsLinksComponent', () => {
  let component: RxjsLinksComponent;
  let fixture: ComponentFixture<RxjsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
