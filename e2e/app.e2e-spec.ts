import { StockPortfolioAngular2Page } from './app.po';

describe('kcw-stocks-angular2 App', function() {
  let page: StockPortfolioAngular2Page;

  beforeEach(() => {
    page = new StockPortfolioAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
