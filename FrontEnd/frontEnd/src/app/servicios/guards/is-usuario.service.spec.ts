import { TestBed } from '@angular/core/testing';

import { IsUsuarioService } from './is-usuario.service';

describe('IsUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsUsuarioService = TestBed.get(IsUsuarioService);
    expect(service).toBeTruthy();
  });
});
