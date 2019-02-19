import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaActualizarComponent } from './materia-actualizar.component';

describe('MateriaActualizarComponent', () => {
  let component: MateriaActualizarComponent;
  let fixture: ComponentFixture<MateriaActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
