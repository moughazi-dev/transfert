import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutDechargementComponent } from './debut-dechargement.component';

describe('DebutDechargementComponent', () => {
  let component: DebutDechargementComponent;
  let fixture: ComponentFixture<DebutDechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebutDechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebutDechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
