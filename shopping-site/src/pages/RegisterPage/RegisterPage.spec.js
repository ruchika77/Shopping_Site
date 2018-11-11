
const HomePage = require('../HomePage/HomePage')
const SignInPage = require('../SignInPage/SignInPage')
const RegisterPage = require('./RegisterPage');
const registerPageSelectors = require('./registerPageSelectors');


browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

const sampleSignInData = {
  emailAddress: 'askdh-123@asdh.com'
}
const sampleRegisterData = {
  // key & value
  firstName: 'Qwerty',
  lastName: 'Asdfg',
  password: 'abc123',
  address: '123, Abc colony',
  city: 'Defghijk',
  zipCode: 'N01 2AS',
  mobileNo: '9423578641',
  signInEmail: 'aa@ghgbghb.@gmail.com',
  signInPassword: 'abc123',
  state: 'Indiana',
  country: 'United States'
}


fdescribe('Register Page >>', () => {

  let registerPage;

  beforeAll(async function () {
    // 1 - open the base url/homepage in the browser
    await browser.get(browser.params.url.BASEURL);

    // 2 - open signIn page
    const homePage = new HomePage();
    await homePage.signInButton.click();

    // 3 - fill new email id & click on submit button
    const signInPage = new SignInPage();
    await signInPage.emailAddress.sendKeys(sampleSignInData.emailAddress);
    await signInPage.createButton.click();

    // 4 - wait untill registration page gets opened
    const EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.css(registerPageSelectors.firstName))), 60000);

    // 5 - create object for registerpage (internally we are creating objects for selectors)
    registerPage = new RegisterPage();
  });

  it('should enter details in registration form', async () => {
    /* for(let value in sampleData){
       registerPage[key].sendKeys(sampleData.value)
     }*/
    registerPage.firstName.sendKeys(sampleRegisterData.firstName)
    registerPage.lastName.sendKeys(sampleRegisterData.lastName);
    registerPage.password.sendKeys(sampleRegisterData.password);
    registerPage.address.sendKeys(sampleRegisterData.address);
    registerPage.city.sendKeys(sampleRegisterData.city);
    await registerPage.selectState(sampleRegisterData.state);
    // registerPage.zipCode.sendKeys(sampleRegisterData.zipCode);
    // registerPage.country.sendKeys(sampleRegisterData.country.A);
    // registerPage.mobileNo.sendKeys(sampleRegisterData.mobileNo);
    // registerPage.registerButton.click()

    browser.sleep(15 * 1000)

  });
});
