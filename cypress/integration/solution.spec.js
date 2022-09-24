import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/main.page.js';
import SingUpPage from '../pages/singup.page.js';
import SolutionPage from '../pages/solution.page.js';

describe('Open Sign Up page from Solution page by clicked Tyr Free button', () => {
  before(() => { MainPage.visit(); });

  it('should be opened Sign Up page', () => {
    CookiesHelper.acceptCookies();
    MainPage.hoverToSolutionsMenu();
    MainPage.clickAllSolutioButton();
    SolutionPage.isPageOpened();
    SolutionPage.hoverToPageLogo();
    SolutionPage.scrollIntoTryFreeSolutionButtonView();
    SolutionPage.clickTryFreeSolutionButton();
    SingUpPage.isPageOpened();
  });
});