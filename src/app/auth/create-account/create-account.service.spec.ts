import {TestBed} from '@angular/core/testing';

import {CreateAccountService} from './create-account.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('CreateAccountService', () => {
  let service: CreateAccountService = null;
  let httpMock: HttpTestingController = null;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    service = TestBed.get(CreateAccountService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('validation', () => {
    let personalInfo;

    beforeEach(() => {
      personalInfo = {firstName: '', lastName: '', middleName: '', ssn: '', day: 0, month: 0, year: 0};
      spyOn(service, 'checkDobValid').and.returnValue(of(true));
      spyOn(service, 'checkSsnValid').and.returnValue(of(true));
    });
    it('should init', () => {
      expect(service.activated).toBeFalsy();
      service.init();
      expect(service.activated).toBeTruthy();
    });
    it('should validatePersonalInfo', async () => {
      const ssnDobValid = await service.validatePersonalInfo(personalInfo);
      expect(service.error).toBeFalsy();
      expect(ssnDobValid).toBeTruthy();
    });
  });
});
