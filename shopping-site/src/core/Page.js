class Page {
  /**
   * 
   * props is a JSON object which has {key:selector, key:selector}
   * Example: {
   *  firstName: '#customer_firstname',
   *  lastName: '#customer_lastname'
   * }
   */
  constructor(properties) {
    for (let key in properties) {
      // for 1st iteration
      // here key=firstname
      // selector = properties.firstname = #customer_firstname
      const selector = properties[key]; 
      // this[key]: create a member in dabba as specified key i.e. this.firstname
      // element(by.css(selector)): assigns element to the member i.e. element(by.css('#customer_firstname'))
      this[key] = element(by.css(selector));
    }
  }
}

module.exports = Page;