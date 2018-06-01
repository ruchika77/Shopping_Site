var create_Account = require('./../pages/createAccount.js');

browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

fdescribe('it should open shopping site page', function () {
    beforeAll(function () {
        browser.get(browser.params.url.BASEURL)
    })

    it('should click on Sign-in from home page', function(){
        create_Account.signInButton.click()
    })

    it('should enter details for registration page', function(){
        create_Account.emailAddress.sendKeys(browser.params.REGISTRATION_PAGE.EMAIL)
        create_Account.createButton.click()
        browser.sleep(4000);
    })

    it('should enter remaining details for registration page', function(){
        create_Account.firstName.sendKeys(browser.params.REGISTRATION_PAGE.FIRST_NAME)
        create_Account.lastName.sendKeys(browser.params.REGISTRATION_PAGE.LAST_NAME)
        create_Account.password.sendKeys(browser.params.REGISTRATION_PAGE.PASSWORD)
        create_Account.address.sendKeys(browser.params.REGISTRATION_PAGE.ADDRESS)
        create_Account.city.sendKeys(browser.params.REGISTRATION_PAGE.CITY)
        create_Account.selectState(browser.params.STATE.C)
        create_Account.zipCode.sendKeys(browser.params.REGISTRATION_PAGE.ZIPCODE)
        create_Account.selectCountry(browser.params.COUNTRY.A)
        create_Account.mobileNo.sendKeys(browser.params.REGISTRATION_PAGE.MOBILE)
        browser.sleep(5000)
        create_Account.registerButton.click()
        browser.sleep(1000)
        
        
    })
})