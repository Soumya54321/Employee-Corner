import { TestBed } from '@angular/core/testing';

import { AuthRegistrationService } from './auth-registration.service';

describe('AuthRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRegistrationService = TestBed.get(AuthRegistrationService);
    expect(service).toBeTruthy();
  });
});
