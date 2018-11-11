
const HomePage = require('../HomePage/HomePage')
const SignInPage = require('../SignInPage/SignInPage')
const RegisterPage = require('./RegisterPage');
const registerPageSelectors = require('./registerPageSelectors');


browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

const EC = protractor.ExpectedConditions;

const sampleData = {
  signInData: {
    emailAddress: 'askdh-123@asdh.com'
  },
  textValues: {
    firstName: 'Qwerty',
    lastName: 'Asdfg',
    password: 'abc123',
    address: '123, Abc colony',
    city: 'Defghijk',
    mobileNo: '9423578641',
    postcode: 'N01 2AS',
  },
  dropdownValues: {
    selectState: 'Indiana',
    selectCountry: 'United States'
  }
}

fdescribe('Register Page >>', () => {

  let registerPage;

  beforeAll(async function () {
    // await browser.driver.manage().window().maximize();
    // 1 - open the base url/homepage in the browser
    await browser.get(browser.params.url.BASEURL);


    // 2 - open signIn page
    const homePage = new HomePage();
    await homePage.signInButton.click();

    // 3 - fill new email id & click on submit button
    const signInPage = new SignInPage();
    await signInPage.emailAddress.sendKeys(sampleData.signInData.emailAddress);
    await signInPage.createButton.click();

    // 4 - wait untill registration page gets opened
    await browser.wait(EC.visibilityOf(element(by.css(registerPageSelectors.firstName))), 60000);

    // 5 - create object for registerpage (internally we are creating objects for selectors)
    registerPage = new RegisterPage();
  });

  it('should enter all the values in the form', () => {
    
    // fill all the text values
    for (let key in sampleData.textValues) {
      browser.wait(EC.visibilityOf(registerPage[key]), 5000);
      registerPage[key].sendKeys(sampleData.textValues[key]);
    }

    // select the dropdown values
    for(let key in sampleData.dropdownValues){
      registerPage[key](sampleData.dropdownValues[key]);
    }
  });
});
