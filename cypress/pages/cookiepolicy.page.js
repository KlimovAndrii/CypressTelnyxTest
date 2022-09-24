import Page from "./page";

class CookiePolicyPage extends Page {
    cookiePolicyHeader = `//h1[text()="Telnyx Cookie Policy"]`;

    isPageOpened() { super.isPageOpened(this.cookiePolicyHeader); }
}

export default new CookiePolicyPage();