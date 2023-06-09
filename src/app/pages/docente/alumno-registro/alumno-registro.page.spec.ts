import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoRegistroPage } from './alumno-registro.page';

describe('AlumnoRegistroPage', () => {
  let component: AlumnoRegistroPage;
  let fixture: ComponentFixture<AlumnoRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
