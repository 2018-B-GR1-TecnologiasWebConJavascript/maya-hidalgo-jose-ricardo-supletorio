import { TestBed } from '@angular/core/testing';

import { RolRestService } from './rol-rest.service';

describe('RolRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolRestService = TestBed.get(RolRestService);
    expect(service).toBeTruthy();
  });
});
