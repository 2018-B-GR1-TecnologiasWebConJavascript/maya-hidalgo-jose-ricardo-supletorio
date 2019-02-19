import { TestBed } from '@angular/core/testing';

import { AutenticarUsuarioService } from './autenticar-usuario.service';

describe('AutenticarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticarUsuarioService = TestBed.get(AutenticarUsuarioService);
    expect(service).toBeTruthy();
  });
});
