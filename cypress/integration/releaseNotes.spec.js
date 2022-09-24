import MainPage from '../pages/main.page.js';
import ReleasePage from '../pages/release.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Test telnyx.com', () => {
  before(() => { MainPage.visit(); });

  it('Release Notes page', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntoReleaseNotesButtonView();
    MainPage.clickReleaseNotesButton();
    ReleasePage.isPageOpened();
  });
});