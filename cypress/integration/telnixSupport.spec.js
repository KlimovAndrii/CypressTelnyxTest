import MainPage from '../pages/main.page.js';
import SupportPage from '../pages/support.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Telnyx Support Contacs', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickSupportCentreLink();
    SupportPage.isPageOpened();
    SupportPage.scrollIntoSupportContacsView();
    SupportPage.isSupportContacsVisible();
  });  
});