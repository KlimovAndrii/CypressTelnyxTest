import "cypress-real-events/support";

require('cypress-xpath');

const UsesCookiesForm = require('../forms/usesCookies.form');

class Page {
    testConfig;
		usesCookiesForm = new UsesCookiesForm();
		
		pageLogoLocator = '//*[@id="Logo-Dark_svg__Layer_1"]';

    constructor() {}

    visit(url = '/') {
        cy.visit(url);
    }

    isPageOpened(locator, timeout=30000) {
        cy.xpath(locator, { timeout: timeout })
          .should('be.visible');
    }

    clickElement(locator) {
        cy.xpath(locator)
					.click();
    }

		fillInput(locator, value) {
			cy.xpath(locator)
				.clear()
				.type(value);
		}

		isElementVisible(locator, timeout=10000) {
			cy.xpath(locator, { timeout: timeout })
				.should('be.visible');
		}

		hoverToPageLogo() {
			cy.xpath(this.pageLogoLocator)
				.realHover('mouse');
		}

		hoverToElement(locator) {
			this.hoverToPageLogo();
			cy.xpath(locator)
				.realHover('mouse');
		}

		scrollIntoElementView(locator) {
			cy.xpath(locator)
				.scrollIntoView();
		}

		clickKeyboardButton(locator, button) {
			cy.xpath(locator)
				.type(`{${button}}`);
		}

		isElementsGtExist(locator, numberOfElements=1) {
			cy.xpath(locator)
				.should('have.length.gt', numberOfElements);
		}

		changeElementCssAttributeValue(locator, attribute, value) {
			cy.xpath(locator)
				.then(el => {
					el.attr(attribute, value);
				});
		}
}

export default Page;