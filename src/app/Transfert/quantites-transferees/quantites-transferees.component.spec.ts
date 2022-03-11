import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitesTransfereesComponent } from './quantites-transferees.component';

describe('QuantitesTransfereesComponent', () => {
  let component: QuantitesTransfereesComponent;
  let fixture: ComponentFixture<QuantitesTransfereesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitesTransfereesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitesTransfereesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
