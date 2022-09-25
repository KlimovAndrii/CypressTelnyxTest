import MainPage from '../pages/main.page.js';
import ApiDocsPage from '../pages/apidocs.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Open Telnix API page from main page', () => {
  before(() => { MainPage.visit(); });

  it('should be opened API Docs page in the same tab', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntokDeveloperDocsButtonView();
    MainPage.changeDeveloperDocsButtonCssTargetValueToSelf();
    MainPage.clickDeveloperDocsButton();
    ApiDocsPage.isPageOpened();
  });
});