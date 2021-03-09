import { TestBed } from '@angular/core/testing';

import { EcSelectOptionService } from './ec-selectoption.service';

describe('EcSelectOptionService', () => {
  let service: EcSelectOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcSelectOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
