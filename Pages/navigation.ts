import { expect, type Page, type Locator } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly links: Locator;

  constructor(page) {
    this.page = page;
    this.links = page.locator("span[class$='oxd-main-menu-item--name']");
  }

  async navigationActions(navigationLink) {
    const navlink = await this.links.count();
    for (let i = 0; i < navlink; i++) {
      const element = await this.links.nth(i);
      if ((await element.textContent()) == navigationLink) {
        await this.links.nth(i).click();
      }
    }
  }
}
