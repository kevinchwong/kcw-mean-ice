import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StockService {
    private stocksUrl = '/api/stocks';

    constructor (private http: Http) {}

    // get("/api/stocks")
    getStocks(): Promise<Stock[]> {
      return this.http.get(this.stocksUrl)
                 .toPromise()
                 .then(response => response.json() as Stock[])
                 .catch(this.handleError);
    }

    // post("/api/stocks")
    createStock(newStock: Stock): Promise<Stock> {
      return this.http.post(this.stocksUrl, newStock)
                 .toPromise()
                 .then(response => response.json() as Stock)
                 .catch(this.handleError);
    }

    // get("/api/stocks/:id") endpoint not used by Angular app

    // delete("/api/stocks/:id")
    deleteStock(delStockId: String): Promise<String> {
      return this.http.delete(this.stocksUrl + '/' + delStockId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/stocks/:id")
    updateStock(putStock: Stock): Promise<Stock> {
      var putUrl = this.stocksUrl + '/' + putStock.id;
      return this.http.put(putUrl, putStock)
                 .toPromise()
                 .then(response => response.json() as Stock)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}