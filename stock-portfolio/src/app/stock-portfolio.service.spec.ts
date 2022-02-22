import { TestBed } from '@angular/core/testing';

import { StockPortfolioService } from './stock-portfolio.service';

describe('StockPortfolioService', () => {
  let service: StockPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
