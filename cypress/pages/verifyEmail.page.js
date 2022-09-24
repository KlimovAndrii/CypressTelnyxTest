import Page from "./page";

class VerifyEmailPage extends Page  {
    titleMessageLocator = `//main//h1[text()="We've sent you an email to activate your account"]`;
    
    // get titleMessage() {
    //     return cy.xpath(
    //         this.titleMessageLocator,
    //         {
    //             timeout: 30000,
    //             titleMessage: 'message not apear'
    //         }
    //     );
    // }

    isPageOpened() { super.isPageOpened(this.titleMessageLocator); }
}

export default new VerifyEmailPage();