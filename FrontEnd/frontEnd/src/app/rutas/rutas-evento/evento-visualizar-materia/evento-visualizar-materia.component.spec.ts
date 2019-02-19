import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoVisualizarMateriaComponent } from './evento-visualizar-materia.component';

describe('EventoVisualizarMateriaComponent', () => {
  let component: EventoVisualizarMateriaComponent;
  let fixture: ComponentFixture<EventoVisualizarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoVisualizarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoVisualizarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
