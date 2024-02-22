import { expect, type Locator, type Page } from "@playwright/test";

export class PIM {
  readonly page: Page;
  readonly pim: Locator;
  readonly assertpim: Locator;

  constructor(page) {
    this.page = page;
    this.pim = page.locator('text="PIM"');
    this.assertpim = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
  }

  async pimPage() {
    await this.pim.click();
    expect(this.assertpim).toHaveText("PIM");
  }
}
