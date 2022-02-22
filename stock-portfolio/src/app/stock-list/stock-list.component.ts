import { Component, OnInit } from '@angular/core';
import { StockPorfolio } from '../stocks';
import { StockPortfolioService } from '../stock-portfolio.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockPortfolio: StockPorfolio[] = [];

  constructor(private stockPortfolioService: StockPortfolioService) { }

  ngOnInit(): void {
    this.getStockPortfolio();
  }

  getStockPortfolio(): void {
    this.stockPortfolioService.getStocksPortfolio()
      .subscribe(stockPorfolio => this.stockPortfolio = stockPorfolio);
  }

}
