import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirPlanStockageComponent } from './saisir-plan-stockage.component';

describe('SaisirPlanStockageComponent', () => {
  let component: SaisirPlanStockageComponent;
  let fixture: ComponentFixture<SaisirPlanStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirPlanStockageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirPlanStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
