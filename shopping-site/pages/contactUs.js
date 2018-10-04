browser.ignoreSynchronisation = true;
browser.waitForAngularEnabled(false);

var contactUs = function () {

    this.contactUsButton = element(by.id('contact-link'));
   
  /*  this.selectHeading = function (item) {
        this.heading.click()
        this.heading.element(By.cssContainingText('option', item)).click();
    }    
    this.orderReference = element(by.id('id_order'))

  //  this.message = element(by.className('form-control'))
  
   // this.sendButton = element(by.id('#submitMessage > span'))
*/
};

module.exports = new contactUs();