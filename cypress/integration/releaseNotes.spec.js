import MainPage from '../pages/main.page.js';
import ReleasePage from '../pages/release.page.js';
import CookiesHelper from "../helpers/cookies.helper";

describe('Open Release Notes page from main page', () => {
  before(() => { MainPage.visit(); });

  it('Release Notes page should be open', () => {
    CookiesHelper.acceptCookies();
    MainPage.scrollIntoReleaseNotesButtonView();
    MainPage.clickReleaseNotesButton();
    ReleasePage.isPageOpened();
  });
});