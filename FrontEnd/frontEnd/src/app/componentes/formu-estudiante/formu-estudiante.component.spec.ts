import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuEstudianteComponent } from './formu-estudiante.component';

describe('FormuEstudianteComponent', () => {
  let component: FormuEstudianteComponent;
  let fixture: ComponentFixture<FormuEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
