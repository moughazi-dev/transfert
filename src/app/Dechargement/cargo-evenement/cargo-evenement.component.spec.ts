import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoEvenementComponent } from './cargo-evenement.component';

describe('CargoEvenementComponent', () => {
  let component: CargoEvenementComponent;
  let fixture: ComponentFixture<CargoEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
