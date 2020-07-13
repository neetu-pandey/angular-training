import { of } from 'rxjs';

export class StudentsServiceStub {
  getStudents() {
    return of({
      Students: [
        { id: 1, firstName: 'George', lastName: 'Bluth' },
        { id: 2, firstName: 'Janet', lastName: 'Weaver' },
        { id: 3, firstName: 'Emma', lastName: 'Wong' },
      ],
    });
  }

  getStudentDetails() {
    return of({
      id: 1,
      firstName: 'George',
      lastName: 'Bluth'
    });
  }
}
