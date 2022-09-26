import Page from "./page";

class VerifyEmailPage extends Page  {
    titleMessageLocator = `//main//h1[text()="We've sent you an email to activate your account"]`;
    
    isPageOpened() { super.isPageOpened(this.titleMessageLocator); }
}

export default new VerifyEmailPage();