import Page from "./page";

class UserPage extends Page {
    userPageHeaderLocator = `//div[@data-testid="flex" and @class="Flex__FlexComponent-fGtahC fmDnDf tx-2c709E"]`;

    isPageOpened() { super.isPageOpened(this.userPageHeaderLocator); }
}

export default new UserPage();