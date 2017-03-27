import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { StockInfo } from './stockInfo';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuoteService {

    constructor (private http: Http) {}

    fillStocks(stocks:Stock[]):Observable<StockInfo[]> {

      if (stocks==null || stocks.length === 0) return null;
      let stocklist=stocks.map(s => s.symbol).join(',');

      let quoteUrl="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20"
      +"yahoo.finance.quote%20where%20symbol%20in%20(%22"
      +stocklist
      +"%22)&format=json&env=store://datatables.org/alltableswithkeys";
      
      return this.http.get(quoteUrl).map(
     	(response) => response.json().query.results.quote as StockInfo[]
      );
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}