import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitanteMainComponent } from './visitante-main.component';

describe('VisitanteMainComponent', () => {
  let component: VisitanteMainComponent;
  let fixture: ComponentFixture<VisitanteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
