import MainPage from '../pages/main.page.js';
import SupportPage from '../pages/support.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Open Support page from main page and enter search request', () => {
  before(() => { MainPage.visit(); });

  it('should appear search results', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickSupportCentreLink();
    SupportPage.isPageOpened();
    SupportPage.clickSupportSearch();
    SupportPage.fillSupportSearch('telnyx');
    SupportPage.clickEnterSupportSearch();
    SupportPage.isSupportSearchResultsGtExist();
  });
});