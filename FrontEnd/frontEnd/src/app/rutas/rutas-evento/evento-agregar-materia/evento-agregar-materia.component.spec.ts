import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAgregarMateriaComponent } from './evento-agregar-materia.component';

describe('EventoAgregarMateriaComponent', () => {
  let component: EventoAgregarMateriaComponent;
  let fixture: ComponentFixture<EventoAgregarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoAgregarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoAgregarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
