import Page from "./page";

class ReleasePage extends Page {
	releaseNoteHeaderLocator = `//h1[text()="Release Notes"]`;

	isPageOpened() { super.isPageOpened(this.releaseNoteHeaderLocator); }
}

export default new ReleasePage();