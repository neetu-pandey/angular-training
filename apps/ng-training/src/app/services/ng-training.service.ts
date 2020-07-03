import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgTrainingService {

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get('/api/states');
  }

  getStudents() {
    return this.http.get('/api/students');
  }

  getStudentDetails(studentId) {
    return this.http.get(`/api/students/${studentId}`)
  }

}
