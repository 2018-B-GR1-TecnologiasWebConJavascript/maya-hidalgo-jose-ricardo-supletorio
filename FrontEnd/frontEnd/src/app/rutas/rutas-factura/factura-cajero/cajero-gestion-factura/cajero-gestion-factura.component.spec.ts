import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroGestionFacturaComponent } from './cajero-gestion-factura.component';

describe('CajeroGestionFacturaComponent', () => {
  let component: CajeroGestionFacturaComponent;
  let fixture: ComponentFixture<CajeroGestionFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeroGestionFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroGestionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
