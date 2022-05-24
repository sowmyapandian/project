import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerentryComponent } from './farmerentry.component';

describe('FarmerentryComponent', () => {
  let component: FarmerentryComponent;
  let fixture: ComponentFixture<FarmerentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
