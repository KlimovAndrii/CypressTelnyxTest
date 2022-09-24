import MainPage from '../pages/main.page.js';
import LogInPage from '../pages/login.page.js';
import VerifyEmailPage from '../pages/verifyEmail.page';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Registration on telnyx.com (invalid data)', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickLoginButton();  
    LogInPage.isPageOpened();
    LogInPage.fillinputEmailField('test_mail@gmail.com');
    LogInPage.fillinputPasswordField('test_password');
    LogInPage.clickRememberMeCheckbox();
    LogInPage.clickLogInPageButton();
    LogInPage.isErrorMessageVisible();
    });
});