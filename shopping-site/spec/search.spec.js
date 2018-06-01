var home_page = require('./../pages/search.js');
var seachResult_page = require('./../pages/searchResult.js');


browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

describe('Verify the home page', function () {
    beforeAll(function () {
        browser.get(browser.params.url.BASEURL);
    });

    it('should write a search field in search box', function () {
        home_page.enterName(browser.params.PRODUCT.EXISTING_PRODUCT);
        browser.sleep(2000);
        home_page.clickSearch();
    })

    it('should check the navigation', function () {
        expect(browser.params.url.SIGNINURL).toContain('controller')
    })

    it('should sort items', function () {
       seachResult_page.sortByDropdown(browser.params.SORT.DSC)
       browser.sleep(2000);
    })

    
});


