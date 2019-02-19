import { TestBed } from '@angular/core/testing';

import { IsCajeroService } from './is-cajero.service';

describe('IsCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsCajeroService = TestBed.get(IsCajeroService);
    expect(service).toBeTruthy();
  });
});
