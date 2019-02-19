import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteActualizarComponent } from './estudiante-actualizar.component';

describe('EstudianteActualizarComponent', () => {
  let component: EstudianteActualizarComponent;
  let fixture: ComponentFixture<EstudianteActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
