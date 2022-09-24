import Page from "./page";

class MainPage extends Page {
	singUpButtonLocator = `//ul/li/div/a[@href="/sign-up"]`;
	logInButtonLocator = `//audio[@id='dialogAudio']//following-sibling::a[text()='Log In'][1]`;
	supportCentreLinkLocator = `//audio[@id='dialogAudio']//following-sibling::a[text()='Support Center'][1]`;
	allSolutionButtonLocator = `//a[@href="/solutions"]`;
	releaseNotesButtonLocator = `//a[@href="/release-notes"]`;
	developerDocsButtonLocator = `//a[@href="https://developers.telnyx.com/docs/v2" and @rel="noopener noreferrer"]`;
	cookiiePolicyButtonLocator = `//a[@href="/cookie-policy"]`;
	missionControlButtonLocator = `//a[@href="/use-cases/mission-control"]//span`;
	resourcesMenuLocator = `//li//span[text()="Resources"]`;
	solutionsMenuLocator = `//li//span[text()="Solutions"]`;
	supportCenterLink = '//audio[@id="dialogAudio"]//following-sibling::a[@href="https://support.telnyx.com/en/"][1]'

	isPageOpened() { super.isPageOpened(this.logInButtonLocator); }

	clickSingUpButton() { this.clickElement(this.singUpButtonLocator); }
	clickLoginButton() { this.clickElement(this.logInButtonLocator); }
	clickSupportCentreLink() { this.clickElement(this.supportCentreLinkLocator); }
	clickAllSolutioButton() { this.clickElement(this.allSolutionButtonLocator); }
	clickReleaseNotesButton() { this.clickElement(this.releaseNotesButtonLocator); }
	clickDeveloperDocsButton() { this.clickElement(this.developerDocsButtonLocator); }
	clickCookiiePolicyButton() { this.clickElement(this.cookiiePolicyButtonLocator); }
	clickMissionControlButton() { this.clickElement(this.missionControlButtonLocator); }

	hoverToResourcesMenu() { this.hoverToElement(this.resourcesMenuLocator); }
	hoverToSolutionsMenu() { this.hoverToElement(this.solutionsMenuLocator); }

	scrollIntoReleaseNotesButtonView() { this.scrollIntoElementView(this.releaseNotesButtonLocator); }
	scrollIntokDeveloperDocsButtonView() { this.scrollIntoElementView(this.developerDocsButtonLocator); }
	scrollIntoCookiiePolicyButtonView() { this.scrollIntoElementView(this.cookiiePolicyButtonLocator); }

	changeDeveloperDocsButtonCssTargetValueToSelf() {
		this.changeElementCssAttributeValue(this.developerDocsButtonLocator, 'target', '_self');
	}
}
    
export default new MainPage();