import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaAlumnoPage } from './alta-alumno.page';

describe('AltaAlumnoPage', () => {
  let component: AltaAlumnoPage;
  let fixture: ComponentFixture<AltaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AltaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
