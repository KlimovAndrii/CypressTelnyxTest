import Page from "./page";

class UserPage extends Page {
    userPageHeaderLocator = `//h4[text()="Welcome to your Mission Control Portal"]`;

    isPageOpened() { super.isPageOpened(this.userPageHeaderLocator); }
}

export default new UserPage();