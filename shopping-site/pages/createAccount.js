browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

var create_Account = function () {

    this.signInButton = element(by.className('login')) // home page sign-in button 
    this.emailAddress = element(by.id('email_create'));
    this.createButton = element(by.id('SubmitCreate'));
    this.firstName = element(by.id('customer_firstname'))
    this.lastName = element(by.id('customer_lastname'))
    this.password = element(by.id('passwd'))
    this.address = element(by.id('address1'))
    this.city = element(by.id('city'))
    this.state = element(by.id('id_state'))
    this.zipCode = element(by.id('postcode'))
    this.country = element(by.id('id_country'))
    this.mobileNo = element(by.id('phone_mobile'))
    this.registerButton = element(by.id('submitAccount'))
    this.signInEmail = element(by.id('email'))
    this.signInPassword = element(by.id('passwd'))
    this.signinBtn = element(by.id('SubmitLogin')) // sign-in page


    this.selectState = function (item) {
        this.state.click()
        this.state.element(By.cssContainingText('option', item)).click();
    }

    this.selectCountry = function (item) {
        this.country.click()
        this.country.element(By.cssContainingText('option', item)).click();
    }

};

module.exports = new create_Account();