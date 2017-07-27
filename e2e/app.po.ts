import { browser, by, element } from 'protractor';

export class ExpensesAreaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('exp-root h1')).getText();
  }
}
