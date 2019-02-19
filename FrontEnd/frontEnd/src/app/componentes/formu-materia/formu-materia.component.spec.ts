import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuMateriaComponent } from './formu-materia.component';

describe('FormuMateriaComponent', () => {
  let component: FormuMateriaComponent;
  let fixture: ComponentFixture<FormuMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
