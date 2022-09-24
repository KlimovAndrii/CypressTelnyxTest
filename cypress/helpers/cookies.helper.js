import MainPage from '../pages/main.page';

class CookiesHelper {
    acceptCookies() {
        if (MainPage.usesCookiesForm.isFormOpened()) {
            MainPage.usesCookiesForm.clickAcceptAndCLoseButton();
        }
    }
}

export default new CookiesHelper();