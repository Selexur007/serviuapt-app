import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaRegistrosPage } from './vista-registros.page';

describe('VistaRegistrosPage', () => {
  let component: VistaRegistrosPage;
  let fixture: ComponentFixture<VistaRegistrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
