import Page from "./page";

require('cypress-xpath');

class SingUpPage extends Page {
	emailFieldlocator = `//input[@id="email"]`;
	fullNameFieldLocator = `//input[@id="full_name"]`
	passwordFieldLocator = `//input[@id="password"]`
	agreeCheckboxLocator = `//input[@id='terms_and_conditions']//parent::div`;
	iWantCheckboxLocator = `//label[@for="subscription_opt_in"]`;
	createAccountButtonLocator = `//button[@type="submit"]`;
			
	isPageOpened() { super.isPageOpened(this.fullNameFieldLocator); }
	
	fillEmailField(email) { this.fillInput(this.emailFieldlocator, email); }
	fillFullNameField(fullName) { this.fillInput(this.fullNameFieldLocator, fullName); }
	fillPasswordField(password) { this.fillInput(this.passwordFieldLocator, password); }
	
	clickCreateAccountButton() { this.clickElement(this.createAccountButtonLocator); }
	clickAgreeCheckbox() { this.clickElement(this.agreeCheckboxLocator); }
	clickIWantCheckbox() { this.clickElement(this.iWantCheckboxLocator); }
}

export default new SingUpPage();