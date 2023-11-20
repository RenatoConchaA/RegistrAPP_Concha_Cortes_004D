import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanearqrPage } from './scanearqr.page';

describe('ScanearqrPage', () => {
  let component: ScanearqrPage;
  let fixture: ComponentFixture<ScanearqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanearqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
