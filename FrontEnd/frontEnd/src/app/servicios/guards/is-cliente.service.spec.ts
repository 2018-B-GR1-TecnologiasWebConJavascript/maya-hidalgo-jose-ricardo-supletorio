import { TestBed } from '@angular/core/testing';

import { IsClienteService } from './is-cliente.service';

describe('IsClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsClienteService = TestBed.get(IsClienteService);
    expect(service).toBeTruthy();
  });
});
