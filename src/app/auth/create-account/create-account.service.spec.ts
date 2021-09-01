import {TestBed} from '@angular/core/testing';

import {CreateAccountService} from './create-account.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreateAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CreateAccountService = TestBed.get(CreateAccountService);
    expect(service).toBeTruthy();
  });
});
