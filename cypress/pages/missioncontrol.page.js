import Page from "./page";

require('cypress-xpath');

class MissionControlPage extends Page {
	missionControlHeaderLocator = `//h1//span[text()="Mission Control Portal"]`;
	missionControlSingUpButtonLocator = `//main//a[@href="/sign-up" and text()="Sign up"]`;

	isPageOpened() { super.isPageOpened(this.missionControlHeaderLocator) }

	clickMissionControlSingUpButton() { this.clickElement(this.missionControlSingUpButtonLocator); }

	scrollIntoMissionControlSingUpButtonView() { this.scrollIntoElementView(this.missionControlSingUpButtonLocator); }
}

export default new MissionControlPage();