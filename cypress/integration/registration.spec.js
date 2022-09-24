import MainPage from '../pages/main.page.js';
import SingUpPage from '../pages/singup.page.js';
import VerifyEmailPage from '../pages/verifyEmail.page';
import CookiesHelper from "../helpers/cookies.helper";

const randomstring = require("randomstring");
const testData = require("../fixtures/testData.json");

describe('Test telnyx.com', () => {
  before(() => {
    MainPage.visit();
  });

  it('Registration on telnyx.com', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickSingUpButton();
    SingUpPage.isPageOpened();
    SingUpPage.fillEmailField(`${randomstring.generate(10)}${testData.emailDomen}`);
    SingUpPage.fillFullNameField(testData.fullName);
    SingUpPage.fillPasswordField(testData.password);
    SingUpPage.clickAgreeCheckbox();
    SingUpPage.clickIWantCheckbox();
    SingUpPage.clickCreateAccountButton();
    VerifyEmailPage.isPageOpened();
  });
});