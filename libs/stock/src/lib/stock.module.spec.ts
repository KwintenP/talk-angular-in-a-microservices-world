import { async, TestBed } from '@angular/core/testing';
import { StockModule } from './stock.module';

describe('StockModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StockModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StockModule).toBeDefined();
  });
});
