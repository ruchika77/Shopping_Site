var home_page = require('./../pages/search.js');
var searchResult_page = require('./../pages/searchResult.js');


browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

describe('Verify the home page', function () {
    beforeAll(function () {
        browser.get(browser.params.url.BASEURL);
    });

    it('should write a search field in search box', function () {
        home_page.enterName(browser.params.PRODUCT.EXISTING_PRODUCT);
        browser.sleep(1000);
        home_page.clickSearch();
    })

    it('should hover on the first item and select it', function () {
        browser.actions().mouseMove(searchResult_page.product).perform();
        browser.actions().mouseMove(searchResult_page.moreButton).click().perform();
        browser.sleep(1000);
    })

    it('should hover on all the images', function () {
        browser.actions().mouseMove(searchResult_page.differentColorDress1).perform();
        browser.sleep(500);
        browser.actions().mouseMove(searchResult_page.differentColorDress2).perform();
        browser.sleep(500);
        browser.actions().mouseMove(searchResult_page.differentColorDress3).perform();
        browser.sleep(500);
        browser.actions().mouseMove(searchResult_page.differentColorDress4).perform();
        browser.sleep(500);
    })

    it('should click on Twitter button', function () {
        searchResult_page.twitterButton.click();
        browser.sleep(3000);
        browser.driver.wait(function () {
            return browser.getAllWindowHandles().then((handles) => {
                browser.switchTo().window(handles[1])
                expect(browser.getCurrentUrl()).toContain('twitter')
                browser.close()
                browser.switchTo().window(handles[0])
                return true
            })
        });
    })

    it('should click on send to friend', function () {
        searchResult_page.sendToFriend.click();
        browser.sleep(1000);
        searchResult_page.friendName.sendKeys(browser.params.FRIEND_DETAILS.NAME)
        searchResult_page.friendEmail.isDisplayed()
        searchResult_page.friendEmail.sendKeys(browser.params.FRIEND_DETAILS.EMAIL)
        browser.sleep(1000)
        searchResult_page.sendEmail.click()
        browser.sleep(1000)
        expect(searchResult_page.confirmationMsg.getText()).toContain(browser.params.FRIEND_DETAILS.SENT_MSG)
        browser.sleep(1000)
        searchResult_page.okButton.click()
        browser.sleep(1000)
    })
});


