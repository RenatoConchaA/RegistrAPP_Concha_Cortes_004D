import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionalumnoPage } from './informacionalumno.page';

describe('InformacionalumnoPage', () => {
  let component: InformacionalumnoPage;
  let fixture: ComponentFixture<InformacionalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacionalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
