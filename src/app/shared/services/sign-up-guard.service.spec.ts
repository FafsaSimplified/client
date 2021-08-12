import { TestBed } from '@angular/core/testing';

import { SignUpGuardService } from './sign-up-guard.service';

describe('SignUpGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpGuardService = TestBed.get(SignUpGuardService);
    expect(service).toBeTruthy();
  });
});
