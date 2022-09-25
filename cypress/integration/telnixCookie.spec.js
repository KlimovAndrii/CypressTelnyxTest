import MainPage from '../pages/main.page.js';
import CookiePolicyPage from '../pages/cookiepolicy.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Open Cookie Policy page from main page', () => {
  before(() => { MainPage.visit(); });

  it('should be opened Сookie Policy page', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntoCookiiePolicyButtonView();
    MainPage.clickCookiiePolicyButton();
    CookiePolicyPage.isPageOpened();
  });
});