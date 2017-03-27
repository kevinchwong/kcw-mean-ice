import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Stock } from '../stock';
import { StockInfo } from '../stockInfo';
import { StockService } from '../stock.service';
import { QuoteService } from '../quote.service';
import { StockDetailsComponent } from '../stock-details/stock-details.component';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
  providers: [StockService,QuoteService]
})

export class StockListComponent implements OnInit {

  stocks: Stock[]
  selectedStock: Stock

  constructor(private stockService: StockService, private quoteService:QuoteService) { }

  ngOnInit() {
    this.portfolioInit();
    Observable.interval(5000)
          .subscribe(() => {
            this.quoteService
              .fillStocks(this.stocks)
              .subscribe(
                info => this.matchStockInfo(this.stocks,info),
                e => console.log('onError: %s', e),
                () => console.log('onCompleted')
              );
          });
  }

  selectStock(stock: Stock) {
    this.selectedStock = stock
  }

  over5Buttons = () =>{
      if(this.stocks==null)
        return true;
      if(this.stocks.length>=5)
        return true;
      return false;
  }

  createNewStock() {
    var stock: Stock = {
      symbol: '',
      company: '',
      quantity: 0,
      price: 0,
      oldprice: 0,
      subtotal: 0
    };

    // By default, a newly-created stock will have the selected state.
    this.selectStock(stock);
  }

  deleteStock = (stockId: String) => {
    var idx = this.getIndexOfStock(stockId);
    if (idx !== -1) {
      this.stocks.splice(idx, 1);
      this.selectStock(null);
    }
    return this.stocks;
  }

  addStock = (stock: Stock) => {
    this.stocks.push(stock);
    this.selectStock(stock);
    return this.stocks;
  }

  updateStock = (stock: Stock) => {
    var idx = this.getIndexOfStock(stock.id);
    if (idx !== -1) {
      this.stocks[idx] = stock;
      this.selectStock(stock);
    }
    return this.stocks;
  }

  private matchStockInfo = (stocks:Stock[], sinfos:StockInfo[]) =>{
      var hashmap=[];
      sinfos.map(s=>{
        if(s!=null)
          hashmap[s.Symbol]=s;
      });
      this.stocks=stocks.map(s=>{
        s.oldprice=s.price;
        var sinfo=hashmap[s.symbol];
        if(sinfo!=null){
          s.price=sinfo.LastTradePriceOnly;
          s.company=sinfo.Name;
        }
        return s;
      });
  }

  private portfolioInit() {
    this.stockService
      .getStocks()
      .then((stocks: Stock[]) => {
        this.stocks = stocks.map((stock) => {
          return stock;
        });
        this.quoteService
          .fillStocks(this.stocks)
          .subscribe(
            info => this.matchStockInfo(this.stocks,info),
            e => console.log('onError: %s', e),
            () => console.log('onCompleted')
          );
      });
  }

  private getIndexOfStock = (stockId: String) => {
    return this.stocks.findIndex((stock) => {
      return stock.id.toString() === stockId;
    });
  }

}
