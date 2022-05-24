import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orger2Component } from './orger2.component';

describe('Orger2Component', () => {
  let component: Orger2Component;
  let fixture: ComponentFixture<Orger2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orger2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
