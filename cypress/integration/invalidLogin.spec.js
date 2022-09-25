import MainPage from '../pages/main.page.js';
import LogInPage from '../pages/login.page.js';
import CookiesHelper from "../helpers/cookies.helper";

const testData = require("../fixtures/testData.json");

describe('Login on Telnyx from Login page with invalid data', () => {
  before(() => { MainPage.visit(); });

  it('should appear error message', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickLoginButton();  
    LogInPage.isPageOpened();
    LogInPage.fillinputEmailField(testData.invalidLogin);
    LogInPage.fillinputPasswordField(testData.invalidPass);
    LogInPage.clickRememberMeCheckbox();
    LogInPage.clickLogInPageButton();
    LogInPage.isErrorMessageVisible();
    });
});