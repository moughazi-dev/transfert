import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirCargoDataComponent } from './saisir-cargo-data.component';

describe('SaisirCargoDataComponent', () => {
  let component: SaisirCargoDataComponent;
  let fixture: ComponentFixture<SaisirCargoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirCargoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirCargoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
