class Page {
  /**
   * 
   * @param {key:selector} props
   * Example: {
   *  firstName: '#customer_firstname',
   *  lastName: '#customer_lastname'
   * }
   */
  constructor(props = {}) {
    for (const key in props) {
      // get the selector
      const selector = props[key];
      // create members as specified at key
      // assign element as specified as selectors at value
      this[key] = element(by.css(selector));
    }
  }
}

module.exports = Page;