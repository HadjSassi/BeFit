import { TestBed } from '@angular/core/testing';

import { AuthentificatoinService } from './authentificatoin.service';

describe('AuthentificatoinService', () => {
  let service: AuthentificatoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificatoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
