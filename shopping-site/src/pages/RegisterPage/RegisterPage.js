const Page = require('../../core/Page');
const registerPageSelectors = require('./registerPageSelectors');

class RegisterPage extends Page {

  constructor() {
    super(registerPageSelectors);
  }

  selectState(item) {
    this.state.click();
    this.state.element(By.cssContainingText('option', item)).click();
  }

  selectCountry(item) {
    this.country.click();
    this.country.element(By.cssContainingText('option', item)).click();
  }

}

module.exports = RegisterPage;