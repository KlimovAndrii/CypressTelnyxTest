import Page from "./page";

class ApiDocsPage extends Page {
    apiDocsHeaderLocator = `//h1[text()="Telnyx API Documentation"]`;

    isPageOpened() { super.isPageOpened(this.apiDocsHeaderLocator); }
}

export default new ApiDocsPage();