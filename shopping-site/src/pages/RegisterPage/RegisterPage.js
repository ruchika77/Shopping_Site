const Page = require('../../core/Page');

const registerPageProperties = {
  // key & selector
  // following belongs to sigin page
  // signInButton: '.login',
  // emailAddress: '#email_create',
  // createButton: '#SubmitCreate',

  // following belongs to register page
  firstName: '#customer_firstname',
  lastName: '#customer_lastname',
  password: '#passwd',
  address: '#address1',
  city: 'city',
  state: 'id_state',
  zipCode: 'postcode',
  country: 'id_country',
  mobileNo: 'phone_mobile',
  registerButton: 'submitAccount',
  signInEmail: 'email',
  signInPassword: 'passwd',
  signInBtn: 'SubmitLogin'
};

class RegisterPage extends Page {

  constructor() {
    super(registerPageProperties);
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