import MainPage from '../pages/main.page.js';
import CookiePolicyPage from '../pages/cookiepolicy.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Telnyx Cookie Policy', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntoCookiiePolicyButtonView();
    MainPage.clickCookiiePolicyButton();
    CookiePolicyPage.isPageOpened();
  });
});