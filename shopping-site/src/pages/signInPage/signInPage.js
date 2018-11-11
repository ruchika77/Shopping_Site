const Page = require('../../core/Page')

const signInPageProperties = {
    // sign up block selectors
    emailAddress: '#email_create',
    createButton: '#SubmitCreate',

    // sign in block selectors
    signInEmail: 'email',
    signInPassword: 'passwd',
    signInBtn: 'SubmitLogin'
}
class SignInPage extends Page {
    constructor() {
        super(signInPageProperties);
    }
}
module.exports = SignInPage;