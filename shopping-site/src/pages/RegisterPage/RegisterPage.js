const Page = require('../../core/Page');
const registerPageSelectors = require('./registerPageSelectors');

class RegisterPage extends Page {

  constructor() {
    super(registerPageSelectors);
  }

  async selectState(item) {
    console.log('selectState>>>');
    this.state.element(by.css('option[value="1"]')).getText().then(a => {
      console.log('a >>>', a);
    });
    const text = await element(By.cssContainingText('#id_state > option', item)).getText();
    console.log('text>>>', text);
    await this.state.all(By.cssContainingText('option', item)).click();
  }

  selectCountry(item) {
    this.country.click()
    this.country.element(By.cssContainingText('option', item)).click();
  }

}

module.exports = RegisterPage;