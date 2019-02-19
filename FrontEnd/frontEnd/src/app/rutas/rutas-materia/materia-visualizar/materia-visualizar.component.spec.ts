import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaVisualizarComponent } from './materia-visualizar.component';

describe('MateriaVisualizarComponent', () => {
  let component: MateriaVisualizarComponent;
  let fixture: ComponentFixture<MateriaVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
