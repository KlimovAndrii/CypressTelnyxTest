require('cypress-xpath');

import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/main.page.js';
import MissionControlPage from '../pages/missioncontrol.page.js';
import SingUpPage from '../pages/singup.page.js';

describe('Open Sign Up page from Mission Control page by clicked Sing Up button', () => {
  before(() => {
    MainPage.visit();
  });

  it('Sing Up page should be open', () => {
    CookiesHelper.acceptCookies();    
    MainPage.hoverToResourcesMenu();
    MainPage.clickMissionControlButton();
    MissionControlPage.isPageOpened();
    MissionControlPage.hoverToPageLogo();
    MissionControlPage.scrollIntoMissionControlSingUpButtonView();
    MissionControlPage.clickMissionControlSingUpButton();
    SingUpPage.isPageOpened();  
  });
});