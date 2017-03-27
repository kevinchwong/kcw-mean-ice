import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StockDetailsComponent } from './stocks/stock-details/stock-details.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
