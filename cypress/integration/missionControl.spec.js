require('cypress-xpath');

import CookiesHelper from "../helpers/cookies.helper";
import MainPage from '../pages/main.page.js';
import MissionControlPage from '../pages/missioncontrol.page.js';
import SingUpPage from '../pages/singup.page.js';

describe('Test telnyx.com', () => {
  before(() => {
    MainPage.visit();
  });

  it('Mission Control page', () => {
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