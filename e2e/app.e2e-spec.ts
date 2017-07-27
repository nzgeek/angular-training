import { ExpensesAreaPage } from './app.po';

describe('expenses-area App', () => {
  let page: ExpensesAreaPage;

  beforeEach(() => {
    page = new ExpensesAreaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to exp!');
  });
});
