import { TestBed } from '@angular/core/testing';

import { MateriaRestService } from './materia-rest.service';

describe('MateriaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaRestService = TestBed.get(MateriaRestService);
    expect(service).toBeTruthy();
  });
});
