import { TestBed } from '@angular/core/testing';

import { DechargementService } from './dechargement.service';

describe('DechargementService', () => {
  let service: DechargementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DechargementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
