import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuFacturaComponent } from './formu-factura.component';

describe('FormuFacturaComponent', () => {
  let component: FormuFacturaComponent;
  let fixture: ComponentFixture<FormuFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
