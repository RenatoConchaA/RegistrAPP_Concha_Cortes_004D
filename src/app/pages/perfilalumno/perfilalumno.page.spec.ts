import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilalumnoPage } from './perfilalumno.page';

describe('PerfilalumnoPage', () => {
  let component: PerfilalumnoPage;
  let fixture: ComponentFixture<PerfilalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
