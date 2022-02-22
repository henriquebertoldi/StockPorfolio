import { Injectable } from '@angular/core';
import { StockPorfolio } from './stocks';
import { STOCKPORTFOLIO } from './mock-stocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPortfolioService {

  constructor() { }

  getStocksPortfolio(): Observable<StockPorfolio[]>  {
    const stockPorfolio = of(STOCKPORTFOLIO)
    return stockPorfolio;
  }
}
