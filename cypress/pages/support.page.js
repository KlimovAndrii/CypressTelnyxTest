import Page from "./page";

class SupportPage extends Page {
    supportHeaderLocator = `//h1[@class="header__headline"]`;
    supportSearchLocator = `//input[@type="text"]`;
    supportSearchResultsLocator = `//section[@class="section section__search_results"]//div[contains(@class, "search-results__row")]`;
    supportContacsLocator = `//a[@href="https://telnyx.com/contact-us" and contains(text(), "Support")]`;

    isPageOpened() { super.isPageOpened(this.supportHeaderLocator); }
    isSupportContacsVisible() { this.isElementVisible(this.supportContacsLocator); }

    clickSupportSearch() { this.clickElement(this.supportSearchLocator); }
    clickEnterSupportSearch() { this.clickKeyboardButton(this.supportSearchLocator, 'Enter'); }

    fillSupportSearch(searchText) { this.fillInput(this.supportSearchLocator, searchText); }

    isSupportSearchResultsGtExist() { this.isElementsGtExist(this.supportSearchResultsLocator); }

    scrollIntoSupportContacsView() { this.scrollIntoElementView(this.supportContacsLocator); }
}

export default new SupportPage();