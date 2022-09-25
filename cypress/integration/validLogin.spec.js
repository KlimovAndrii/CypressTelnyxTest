import MainPage from '../pages/main.page.js';
import UserPage from '../pages/userpage.page.js';
import LogInPage from '../pages/login.page.js';
import CookiesHelper from "../helpers/cookies.helper";

const testData = require("../fixtures/testData.json");

describe('Login on Telnyx from Login page with valid data', () => {
  before(() => { MainPage.visit(); });

  it('user page should open', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickLoginButton();  
    LogInPage.isPageOpened();
    LogInPage.fillinputEmailField(testData.validLogin);
    LogInPage.fillinputPasswordField(testData.validPass);
    LogInPage.clickRememberMeCheckbox();
    LogInPage.clickLogInPageButton();
    UserPage.isPageOpened();
  });  
});