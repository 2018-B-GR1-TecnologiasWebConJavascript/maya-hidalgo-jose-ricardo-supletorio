import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuUsuarioComponent } from './formu-usuario.component';

describe('FormuUsuarioComponent', () => {
  let component: FormuUsuarioComponent;
  let fixture: ComponentFixture<FormuUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
