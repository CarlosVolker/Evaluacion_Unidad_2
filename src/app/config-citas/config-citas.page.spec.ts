import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ConfigCitasPage } from './config-citas.page';

describe('CitasPage', () => {
  let component: ConfigCitasPage;
  let fixture: ComponentFixture<ConfigCitasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
