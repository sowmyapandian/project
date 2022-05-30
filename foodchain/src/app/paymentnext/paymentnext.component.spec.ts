import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentnextComponent } from './paymentnext.component';

describe('PaymentnextComponent', () => {
  let component: PaymentnextComponent;
  let fixture: ComponentFixture<PaymentnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentnextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
