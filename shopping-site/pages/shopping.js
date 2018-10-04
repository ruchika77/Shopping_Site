browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

var shop = function () {
    this.item = element(by.css('.ajax_block_product:nth-child(2)')) // home page items
    // this.addToCartButton = element(by.className('button ajax_add_to_cart_button btn btn-default'))
    this.addToCartButton = element(by.css('.ajax_block_product:nth-child(2) .btn'))
    this.proceedToCheckoutButton = element(by.linkText('Proceed to checkout'))
    this.proceedToCheckoutBtn = element(by.buttonText('Proceed to checkout')) //buttons which are not linkable
    this.tnc = element(by.id('cgv'))
    this.payByBankWire = element(by.className('bankwire'))
    this.payByCheck = element(by.className('cheque'))
    this.confirmOrder = element(by.buttonText('I confirm my order'))

}

module.exports = new shop();