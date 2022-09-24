require('cypress-xpath');

const titleCookies = 'button[aria-label="close and deny"] + p';
const title = "//p[text()='This site uses cookies.']//parent::div";
const acceptAndCloseButton = "//p[text()='This site uses cookies.']//parent::div//button[text()='Accept and close']";

class UsesCookiesForm {
    isFormOpened() { return cy.$$(titleCookies).length > 0; }
    clickAcceptAndCLoseButton() { cy.xpath(acceptAndCloseButton).click(); }
}

export default UsesCookiesForm;