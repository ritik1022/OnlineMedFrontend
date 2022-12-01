import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPaymentComponent } from './real-payment.component';

describe('RealPaymentComponent', () => {
  let component: RealPaymentComponent;
  let fixture: ComponentFixture<RealPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
