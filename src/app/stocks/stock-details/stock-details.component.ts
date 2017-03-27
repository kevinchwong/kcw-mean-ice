import { Component, Input } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})

export class StockDetailsComponent {
  @Input()
  stock: Stock;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private stockService: StockService) {}

  createStock(stock: Stock) {
    this.stockService.createStock(stock).then((newStock: Stock) => {
      this.createHandler(newStock);
    });
  }

  updateStock(stock: Stock): void {
    this.stockService.updateStock(stock).then((updatedStock: Stock) => {
      this.updateHandler(updatedStock);
    });
  }

  deleteStock(stockId: String): void {
    this.stockService.deleteStock(stockId).then((deletedStockId: String) => {
      this.deleteHandler(deletedStockId);
    });
  }
}
