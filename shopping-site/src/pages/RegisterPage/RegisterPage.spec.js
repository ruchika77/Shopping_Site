// get a reference to Class
const RegisterPage = require('./RegisterPage');

const data = {
  firstName: 'Siva Kumar'
}

fdescribe('Register Page >>', () => {
  const registerPage = new RegisterPage();

  it('should enter details in registration form', () => {
    registerPage.emailAddress.sendKeys(data.firstName);
    registerPage.createButton.click();
  });
});
