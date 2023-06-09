import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasPage } from './horas.page';

describe('HorasPage', () => {
  let component: HorasPage;
  let fixture: ComponentFixture<HorasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
