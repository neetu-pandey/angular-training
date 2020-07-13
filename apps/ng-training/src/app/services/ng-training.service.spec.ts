import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NgTrainingService } from './ng-training.service';

fdescribe('NgTrainingService', () => {
  let service: NgTrainingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(NgTrainingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const mockStates = {
      "States": [
        {
          "letter": "A",
          "names": [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas"
          ]
        },
        {
          "letter": "C",
          "names": [
            "California",
            "Colorado",
            "Connecticut"
          ]
        }
      ]
    }
    service.getStates().subscribe(data => {
      expect(data['States'].length).toBe(2);
      expect(data['States']).toEqual(mockStates['States']);
    });
    const req = httpMock.expectOne(`/api/states`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStates);
  });
});
