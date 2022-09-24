import Page from "./page";

class SolutionPage extends Page {
  solutionHeaderLocator = `//h1[text()="Solutions for Your Business"]`;
  tryFreeSolutionButtonLocator = `//a[text()="Try it Free"]`;

  isPageOpened() { super.isPageOpened(this.solutionHeaderLocator); }
  
  scrollIntoTryFreeSolutionButtonView() { this.scrollIntoElementView(this.tryFreeSolutionButtonLocator); }

  clickTryFreeSolutionButton() { this.clickElement(this.tryFreeSolutionButtonLocator); }
}

export default new SolutionPage();