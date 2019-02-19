import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCrearComponent } from './materia-crear.component';

describe('MateriaCrearComponent', () => {
  let component: MateriaCrearComponent;
  let fixture: ComponentFixture<MateriaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
