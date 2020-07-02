import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { Rxjs4Component } from './rxjs4.component';

describe('Rxjs4Component', () => {
  let component: Rxjs4Component;
  let fixture: ComponentFixture<Rxjs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rxjs4Component ],
      imports: [FormsModule, ReactiveFormsModule,  HttpClientModule, MatAutocompleteModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
