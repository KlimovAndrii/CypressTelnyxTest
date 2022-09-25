import MainPage from '../pages/main.page.js';
import SupportPage from '../pages/support.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Open Support page from main page and see contacts', () => {
  before(() => { MainPage.visit(); });

  it('contacts is displayed', () => {
    CookiesHelper.acceptCookies();
    MainPage.clickSupportCentreLink();
    SupportPage.isPageOpened();
    SupportPage.scrollIntoSupportContacsView();
    SupportPage.isSupportContacsVisible();
  });  
});