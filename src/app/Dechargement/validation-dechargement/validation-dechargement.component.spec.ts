import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDechargementComponent } from './validation-dechargement.component';

describe('ValidationDechargementComponent', () => {
  let component: ValidationDechargementComponent;
  let fixture: ComponentFixture<ValidationDechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
