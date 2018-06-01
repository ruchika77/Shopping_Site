browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

var seachResult_page = function () {

    this.sortByLowestPrice = element(by.css('#selectProductSort > option:nth-child(2)'));
    this.sortByHighestPrice = element(by.css('#selectProductSort > option:nth-child(3)'));
    this.searchTextNavigation = element(by.css('.navigation_page'));
    this.sortBy = element(by.id('selectProductSort'));
    this.product = element(by.css('li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)'))
    this.moreButton = element(by.linkText('More'))
    this.differentColorDress1 = element(by.id('thumb_12'))
    this.differentColorDress2 = element(by.id('thumb_13'))
    this.differentColorDress3 = element(by.id('thumb_14'))
    this.differentColorDress4 = element(by.id('thumb_15'))
    this.twitterButton = element(by.className('btn btn-default btn-twitter')) 
    this.sendToFriend = element(by.id('send_friend_button'))
    this.friendName = element(by.id('friend_name'))
    this.friendEmail = element(by.id('friend_email'))
    this.sendEmail = element(by.id('sendEmail'))
    this.confirmationMsg = element(by.className('fancybox-inner'))
    this.okButton= element(by.buttonText('OK'))

    this.sortByDropdown = function (item) {
        this.sortBy.click()
        this.sortBy.element(By.cssContainingText('option', item)).click();
    }

    this.checkText = function () {
        expect(searchTextNavigation.getText()).toBe('Search');
    }


};

module.exports = new seachResult_page();