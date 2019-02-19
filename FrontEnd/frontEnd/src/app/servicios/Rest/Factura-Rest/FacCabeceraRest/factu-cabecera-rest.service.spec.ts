import { TestBed } from '@angular/core/testing';

import { FactuCabeceraRestService } from './factu-cabecera-rest.service';

describe('FactuCabeceraRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactuCabeceraRestService = TestBed.get(FactuCabeceraRestService);
    expect(service).toBeTruthy();
  });
});
