import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncontradoMainComponent } from './no-encontrado-main.component';

describe('NoEncontradoMainComponent', () => {
  let component: NoEncontradoMainComponent;
  let fixture: ComponentFixture<NoEncontradoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEncontradoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEncontradoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
