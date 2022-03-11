import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeHebdomadaireComponent } from './programme-hebdomadaire.component';

describe('ProgrammeHebdomadaireComponent', () => {
  let component: ProgrammeHebdomadaireComponent;
  let fixture: ComponentFixture<ProgrammeHebdomadaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeHebdomadaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeHebdomadaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
