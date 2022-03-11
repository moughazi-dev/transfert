import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementVerificationComponent } from './dechargement-verification.component';

describe('DechargementVerificationComponent', () => {
  let component: DechargementVerificationComponent;
  let fixture: ComponentFixture<DechargementVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargementVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
