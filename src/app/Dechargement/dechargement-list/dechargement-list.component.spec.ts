import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementListComponent } from './dechargement-list.component';

describe('DechargementListComponent', () => {
  let component: DechargementListComponent;
  let fixture: ComponentFixture<DechargementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
