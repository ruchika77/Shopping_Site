browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

var home_page = function () {

    this.searchTextBox = element(by.css('#search_query_top'));
    this.searchButton = element(by.css('button.btn:nth-child(5)'));

    this.enterName = function (name) {
        this.searchTextBox.sendKeys(name);
    };

    this.clickSearch = function () {
        this.searchButton.click();
        return require('./searchResult.js');
    }
};

module.exports = new home_page();