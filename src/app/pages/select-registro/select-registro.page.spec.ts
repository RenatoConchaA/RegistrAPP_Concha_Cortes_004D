import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectRegistroPage } from './select-registro.page';

describe('SelectRegistroPage', () => {
  let component: SelectRegistroPage;
  let fixture: ComponentFixture<SelectRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
