import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteVisualizarComponent } from './estudiante-visualizar.component';

describe('EstudianteVisualizarComponent', () => {
  let component: EstudianteVisualizarComponent;
  let fixture: ComponentFixture<EstudianteVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
