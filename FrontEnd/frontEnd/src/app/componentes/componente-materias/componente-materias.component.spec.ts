import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMateriasComponent } from './componente-materias.component';

describe('ComponenteMateriasComponent', () => {
  let component: ComponenteMateriasComponent;
  let fixture: ComponentFixture<ComponenteMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
