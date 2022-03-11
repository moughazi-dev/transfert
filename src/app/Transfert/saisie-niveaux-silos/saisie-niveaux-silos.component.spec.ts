import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieNiveauxSilosComponent } from './saisie-niveaux-silos.component';

describe('SaisieNiveauxSilosComponent', () => {
  let component: SaisieNiveauxSilosComponent;
  let fixture: ComponentFixture<SaisieNiveauxSilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieNiveauxSilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieNiveauxSilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
