import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuEventoComponent } from './formu-evento.component';

describe('FormuEventoComponent', () => {
  let component: FormuEventoComponent;
  let fixture: ComponentFixture<FormuEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
