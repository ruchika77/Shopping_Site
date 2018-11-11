const Page = require('../../core/Page')
const homePageProperties ={
  signInButton : '.login'
}

class HomePage extends Page{
  constructor(){
    super(homePageProperties);
  }
}
module.exports = HomePage;