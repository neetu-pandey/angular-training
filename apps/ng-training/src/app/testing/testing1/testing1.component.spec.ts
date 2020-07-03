import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Testing1Component } from './testing1.component';
import { NgTrainingService } from './../../services/ng-training.service';
import { StudentsServiceStub } from './service.mock';
import { By } from '@angular/platform-browser';

fdescribe('Testing1Component', () => {
  let component: Testing1Component;
  let fixture: ComponentFixture<Testing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing1Component ],
      imports: [ HttpClientModule ],
      providers: [{ provide: NgTrainingService, useClass: StudentsServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "students" populated ', () => {
    expect(component.students.length).toBeGreaterThan(0);
  });

  it('should call getStudents() of NgTrainingService on component Init', () => {
    spyOn(component.service, 'getStudents').and.callThrough();
    component.ngOnInit();
    expect(component.service.getStudents).toHaveBeenCalled();
  });

  it('should render Student List in HTML', () => {
    const ele = fixture.debugElement.query(By.css('.students-div')).nativeElement;
    // console.log(ele.childNodes[1].innerHTML)
    expect(ele.childNodes[1].innerHTML).not.toBeNull();
    expect(ele.childNodes[2].innerHTML).not.toBeNull();
    expect(ele.childNodes[3].innerHTML).not.toBeNull();
  });

  it('should call getDetails() with proper id when a value is selected from HTML', () => {
    spyOn(component, 'getDetails').and.callThrough();
    const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
    ele.click();
    expect(component.getDetails).toHaveBeenCalledWith(1);
  });

  fdescribe('should have User Board', () => {
    it('empty by default', () => {
      const ele = fixture.debugElement.nativeElement.querySelector('#board');
      expect(ele.innerHTML.trim()).toBe('paid : 0');
    });

    it('populated when a user name is clicked ', () => {
      const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
      ele.click();
      fixture.detectChanges(); // added to detect changes in HTML. Comment this try.
      const board_ele = fixture.debugElement.nativeElement.querySelector('#board');
      expect(board_ele.innerHTML.trim()).toBe('George Bluth paid : 1000');
      expect(component.selectedStudent.firstName).toBe('George');
    });
  });
});
