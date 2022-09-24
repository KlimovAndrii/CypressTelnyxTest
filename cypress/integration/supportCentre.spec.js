
import MainPage from '../pages/main.page.js';
import SupportPage from '../pages/support.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Open Support Centre Search', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickSupportCentreLink();
    SupportPage.isPageOpened();
    SupportPage.clickSupportSearch();
    SupportPage.fillSupportSearch('telnex');
    SupportPage.clickEnterSupportSearch();
    SupportPage.isSupportSearchResultsGtExist();
  });
});