import Page from "./page";

require('cypress-xpath');

class LogInPage extends Page {
    inputEmailFieldLocator = `//form[@aria-label="loginForm"]//input[@name="email" and @class="ui-reactv2-input"]`;
    inputPasswordFieldLocator = `//input[@name="password"]`;
    rememberMeCheckboxLocator = `//input[@type="checkbox"]//following-sibling::span`;
    logInPageButtonLocator = `//button[@type="submit" and contains(text(), 'Log in')]`;
    errorMessageLocator = `//div[@data-testid="login.signin.message"]//span[contains(@class, "Message")]`;

    isPageOpened() { super.isPageOpened(this.inputEmailFieldLocator); }
    isErrorMessageVisible() { this.isElementVisible(this.errorMessageLocator); }

    fillinputEmailField(email) { this.fillInput(this.inputEmailFieldLocator, email); }
    fillinputPasswordField(password) { this.fillInput(this.inputPasswordFieldLocator, password); }
    
    clickLogInPageButton() { this.clickElement(this.logInPageButtonLocator); }
    clickRememberMeCheckbox() { this.clickElement(this.rememberMeCheckboxLocator); }
}

export default new LogInPage(); 