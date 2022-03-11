import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStockageComponent } from './plan-stockage.component';

describe('PlanStockageComponent', () => {
  let component: PlanStockageComponent;
  let fixture: ComponentFixture<PlanStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanStockageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
