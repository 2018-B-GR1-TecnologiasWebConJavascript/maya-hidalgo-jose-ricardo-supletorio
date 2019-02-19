import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroFacturasComponent } from './cajero-facturas.component';

describe('CajeroFacturasComponent', () => {
  let component: CajeroFacturasComponent;
  let fixture: ComponentFixture<CajeroFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeroFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
