import { TestBed } from '@angular/core/testing';

import { FactuDetalleRestService } from './factu-detalle-rest.service';

describe('FactuDetalleRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactuDetalleRestService = TestBed.get(FactuDetalleRestService);
    expect(service).toBeTruthy();
  });
});
