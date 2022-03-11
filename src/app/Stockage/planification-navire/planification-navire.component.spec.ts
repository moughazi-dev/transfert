import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationNavireComponent } from './planification-navire.component';

describe('PlanificationNavireComponent', () => {
  let component: PlanificationNavireComponent;
  let fixture: ComponentFixture<PlanificationNavireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificationNavireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationNavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
