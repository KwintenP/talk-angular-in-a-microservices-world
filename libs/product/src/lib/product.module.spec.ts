import { async, TestBed } from '@angular/core/testing';
import { ProductModule } from './product.module';

describe('ProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductModule).toBeDefined();
  });
});
