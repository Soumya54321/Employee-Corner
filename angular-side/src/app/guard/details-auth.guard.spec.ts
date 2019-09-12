import { TestBed, async, inject } from '@angular/core/testing';

import { DetailsAuthGuard } from './details-auth.guard';

describe('DetailsAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsAuthGuard]
    });
  });

  it('should ...', inject([DetailsAuthGuard], (guard: DetailsAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
