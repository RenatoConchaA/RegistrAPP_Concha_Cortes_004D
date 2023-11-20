import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizaralumnoPage } from './actualizaralumno.page';

describe('ActualizaralumnoPage', () => {
  let component: ActualizaralumnoPage;
  let fixture: ComponentFixture<ActualizaralumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizaralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
