import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviQuantitesTransfereesComponent } from './suivi-quantites-transferees.component';

describe('SuiviQuantitesTransfereesComponent', () => {
  let component: SuiviQuantitesTransfereesComponent;
  let fixture: ComponentFixture<SuiviQuantitesTransfereesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviQuantitesTransfereesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviQuantitesTransfereesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
