import MainPage from '../pages/main.page.js';
import ApiDocsPage from '../pages/apidocs.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Telnyx API Documentation', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntokDeveloperDocsButtonView();
    MainPage.changeDeveloperDocsButtonCssTargetValueToSelf();
    MainPage.clickDeveloperDocsButton();
    ApiDocsPage.isPageOpened();
  });
});