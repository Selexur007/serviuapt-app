import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizacionPage } from './actualizacion.page';

describe('ActualizacionPage', () => {
  let component: ActualizacionPage;
  let fixture: ComponentFixture<ActualizacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
