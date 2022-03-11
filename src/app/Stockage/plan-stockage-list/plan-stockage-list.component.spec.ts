import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStockageListComponent } from './plan-stockage-list.component';

describe('PlanStockageListComponent', () => {
  let component: PlanStockageListComponent;
  let fixture: ComponentFixture<PlanStockageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanStockageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanStockageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
