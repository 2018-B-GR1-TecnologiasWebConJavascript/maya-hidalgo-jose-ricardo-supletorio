import { TestBed } from '@angular/core/testing';

import { EventoMateriaRestService } from './evento-materia-rest.service';

describe('EventoMateriaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoMateriaRestService = TestBed.get(EventoMateriaRestService);
    expect(service).toBeTruthy();
  });
});
