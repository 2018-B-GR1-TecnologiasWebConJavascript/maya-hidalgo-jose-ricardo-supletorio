import { TestBed } from '@angular/core/testing';

import { IsAdministradorService } from './is-administrador.service';

describe('IsAdministradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAdministradorService = TestBed.get(IsAdministradorService);
    expect(service).toBeTruthy();
  });
});
