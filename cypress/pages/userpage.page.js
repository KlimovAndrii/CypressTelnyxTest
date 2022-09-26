import Page from "./page";

class UserPage extends Page {
    userPageHeaderLocator = `//h1[text()="Numbers / Search & Buy Numbers"]`;

    isPageOpened() { super.isPageOpened(this.userPageHeaderLocator); }
}

export default new UserPage();