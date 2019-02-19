import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroItemFacturaComponent } from './cajero-item-factura.component';

describe('CajeroItemFacturaComponent', () => {
  let component: CajeroItemFacturaComponent;
  let fixture: ComponentFixture<CajeroItemFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeroItemFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroItemFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
