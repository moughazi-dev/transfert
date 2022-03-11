import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommencerDechargementComponent } from './commencer-dechargement.component';

describe('CommencerDechargementComponent', () => {
  let component: CommencerDechargementComponent;
  let fixture: ComponentFixture<CommencerDechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommencerDechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommencerDechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
