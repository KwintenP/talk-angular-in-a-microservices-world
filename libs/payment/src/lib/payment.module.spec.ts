import { async, TestBed } from '@angular/core/testing';
import { PaymentModule } from './payment.module';

describe('PaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentModule).toBeDefined();
  });
});
