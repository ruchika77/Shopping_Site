// get a reference to Class
const RegisterPage = require('./RegisterPage');
const signInPage = require('./signInPage')

const sampleData = {
  // key & value
  firstName: 'Siva Kumar',
  lastName: 'Pala',
  password: 'abc123',
  address: '411, Cutmore Ropeworks',
  city: 'London',
  state: 'England',
  zipCode: 'IG11 7GS',
  country: 'United Kingdom',
  mobileNo: '7423578641',
  signInEmail: 'siva.kumar@gmail.com',
  signInPassword: 'abc123'
}

fdescribe('Register Page >>', () => {
  beforeAll(function () {
    browser.get(browser.params.url.BASEURL)
    let registerPage = new RegisterPage();
  })

  it('should enter details in registration form', () => {
    /* for(let value in sampleData){
       registerPage[key].sendKeys(sampleData.value)
     }*/
    create_Account.signInButton.click();
    create_Account.emailAddress.sendKeys(browser.params.REGISTRATION_PAGE.EMAIL)
    create_Account.createButton.click()
    registerPage.firstName.sendKeys(sampleData.firstName);
    registerPage.lastName.sendKeys(sampleData.lastName);
    registerPage.password.sendKeys(sampleData.password);
    registerPage.address.sendKeys(sampleData.address);
    registerPage.city.sendKeys(sampleData.city);
    registerPage.selectState(sampleData.state);
    registerPage.zipCode.sendKeys(sampleData.zipCode);
    registerPage.sendCountry(sampleData.country);
    registerPage.mobileNo.sendKeys(sampleData.mobileNo);
    registerPage.registerButton.click()

  });
});
