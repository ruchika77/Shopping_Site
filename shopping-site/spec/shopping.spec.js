var home_page = require('./../pages/search.js');
var seachResult_page = require('./../pages/searchResult.js');
var shopping = require('./../pages/shopping.js')
var create_Account = require('./../pages/createAccount.js');


browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

describe('Buy a dress online', function () {
    beforeAll(function () {
        browser.get(browser.params.url.BASEURL);
    });

    it('should hover on a dress from home page and click on add to cart', function () {
        browser.actions().mouseMove(shopping.item).perform();
        // expect(shopping.addToCartButton.toExist())
        browser.sleep(1000);
    })

    it('should hover on a dress from home page and click on add to cart', function () {
        shopping.addToCartButton.click();
        browser.sleep(3000);
    
    })
    shopping.addToCartButton.click();
    // Expect that the sign
    /* browser.sleep(1000);
     shopping.proceedToCheckoutButton.click();
     browser.sleep(1000);
     shopping.proceedToCheckoutButton.click();
     browser.sleep(1000);
     create_Account.signInEmail.sendKeys(browser.params.REGISTRATION_PAGE.EMAIL)
 
     create_Account.signInPassword.sendKeys(browser.params.REGISTRATION_PAGE.PASSWORD)
     browser.sleep(1000);
     it('')
     create_Account.signinBtn.click()
     browser.sleep(1000);
     shopping.proceedToCheckoutBtn.click();
     browser.sleep(1000);
     shopping.tnc.click();
     shopping.proceedToCheckoutBtn.click();
     browser.sleep(1000);
 })
 
 it('should pay the payment by check', function () {
     shopping.payByCheck.click();
     browser.sleep(1000);
     shopping.confirmOrder.click();
     browser.sleep(2000);
 })
 */

})