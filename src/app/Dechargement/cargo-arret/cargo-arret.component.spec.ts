import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoArretComponent } from './cargo-arret.component';

describe('CargoArretComponent', () => {
  let component: CargoArretComponent;
  let fixture: ComponentFixture<CargoArretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoArretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoArretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
