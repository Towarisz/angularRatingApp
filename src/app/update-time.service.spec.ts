import { TestBed } from '@angular/core/testing';

import { UpdateTimeService } from './update-time.service';

describe('UpdateTimeService', () => {
  let service: UpdateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
