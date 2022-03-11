import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDechargementComponent } from './fin-dechargement.component';

describe('FinDechargementComponent', () => {
  let component: FinDechargementComponent;
  let fixture: ComponentFixture<FinDechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinDechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinDechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
