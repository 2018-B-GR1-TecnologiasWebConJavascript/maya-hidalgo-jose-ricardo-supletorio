import { TestBed } from '@angular/core/testing';

import { EstudianteRestService } from './estudiante-rest.service';

describe('EstudianteRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudianteRestService = TestBed.get(EstudianteRestService);
    expect(service).toBeTruthy();
  });
});
