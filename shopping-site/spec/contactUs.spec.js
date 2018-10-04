var home_page = require('./../pages/search.js')
var create_Account = require('./../pages/createAccount.js')
var contactUs = require('./../pages/contactUs.js')

browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

describe('Verify contact us functionality', function () {
    beforeAll(function () {
        browser.get(browser.params.url.BASEURL);
        browser.sleep(2000)
    });

  /*  it('should click on contact us button', function () {
        contactUsButton.click()
        browser.sleep(2000)
    })

   /* it('should enter email address', function () {
        create_Account.emailAddress.sendKeys(browser.params.REGISTRATION_PAGE.EMAIL)
        browser.sleep(2000)
    })


    it('should enter order reference', function () {
       contactUs.orderReference.sendKeys(browser.params.ORDER_REFERENCE.NO)
       browser.sleep(2000);
    })

    it('should enter message', function(){
        contactUs.message.sendKeys(browser.params.MSG.TEXT)
        browser.sleep(2000);
    })

    it('should click on send button', function(){
        contactUs.sendButton.click()
        browser.sleep(2000)
    })
    */
});


