import MainPage from '../pages/main.page.js';
import UserPage from '../pages/userpage.page.js';
import LogInPage from '../pages/login.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Login on telnyx.com (valid data)', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickLoginButton();  
    LogInPage.isPageOpened();
    LogInPage.fillinputEmailField('ag.klimov@gmail.com');
    LogInPage.fillinputPasswordField('Dja4125_000000');
    LogInPage.clickRememberMeCheckbox();
    LogInPage.clickLogInPageButton();
    UserPage.isPageOpened();
  });  
});