const Page = require('../../core/Page');

class RegisterPage extends Page {

  constructor() {
    super({
      firstName: '#customer_firstname',
      lastName: '#customer_lastname',
    });
  }

  selectState(item) {
    this.selectState.click();
    this.state.element(By.cssContainingText('option', item)).click();
  }

  selectCountry(item) {
    this.country.click()
    this.country.element(By.cssContainingText('option', item)).click();
  }

}

module.exports = RegisterPage;