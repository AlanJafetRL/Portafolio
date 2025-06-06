import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAppSemanaComponent } from './detalles-app-semana.component';

describe('DetallesAppSemanaComponent', () => {
  let component: DetallesAppSemanaComponent;
  let fixture: ComponentFixture<DetallesAppSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAppSemanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAppSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
