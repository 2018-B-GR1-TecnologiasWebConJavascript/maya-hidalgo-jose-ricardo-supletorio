import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGestionRolComponent } from './usuario-gestion-rol.component';

describe('UsuarioGestionRolComponent', () => {
  let component: UsuarioGestionRolComponent;
  let fixture: ComponentFixture<UsuarioGestionRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioGestionRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioGestionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
