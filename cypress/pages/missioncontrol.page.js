import Page from "./page";

require('cypress-xpath');

class MissionControlPage extends Page {
	missionControlHeaderLocator = `//span[@class="sc-7b3980dc-1 dlshfZ" and text()="Mission Control"]`;
	missionControlSingUpButtonLocator = `//main//a[@href="/sign-up" and text()="Sign up"]`;

	isPageOpened() { super.isPageOpened(this.missionControlHeaderLocator) }

	clickMissionControlSingUpButton() { this.clickElement(this.missionControlSingUpButtonLocator); }

	scrollIntoMissionControlSingUpButtonView() { this.scrollIntoElementView(this.missionControlSingUpButtonLocator); }
}

export default new MissionControlPage();