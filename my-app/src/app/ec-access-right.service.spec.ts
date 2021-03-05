import { TestBed } from '@angular/core/testing';

import { EcAccessRightService } from './ec-access-right.service';

describe('EcAccessRightService', () => {
  let service: EcAccessRightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcAccessRightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
