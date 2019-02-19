import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVerFacturaComponent } from './cliente-ver-factura.component';

describe('ClienteVerFacturaComponent', () => {
  let component: ClienteVerFacturaComponent;
  let fixture: ComponentFixture<ClienteVerFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteVerFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVerFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
