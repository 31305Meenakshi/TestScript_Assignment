import { expect, type Locator, type Page } from "@playwright/test";

export class Directory {
  readonly page: Page;
  readonly direct: Locator;
  readonly assertdirec: Locator;
  readonly empname: Locator;
  readonly jobtitle: Locator;
  readonly accountAssis: Locator;
  readonly location: Locator;
  readonly newyork: Locator;
  readonly search: Locator;
  readonly reset: Locator;

  constructor(page) {
    this.page = page; //4
    this.direct = page.locator("text=Directory");
    this.assertdirec = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.empname = page.locator('input[placeholder="Type for hints..."]');
    this.jobtitle = page.locator('div:text("-- Select --")').nth(0);
    this.accountAssis = page.locator("div[role=listbox]>div:nth-child(2)");
    // this.location = page.locator('div:text("-- Select --")');
    this.newyork = page.locator("div[role=listbox]>div:nth-child(2)");
    this.search = page.locator('button:text(" Search ")');
    this.reset = page.locator('button:text(" Reset ")');
  }

  async direPage(employeName) {
    await this.direct.click();
    expect(this.assertdirec).toHaveText("Directory");
    //  await this.empname.fill("Tony  Stark");
    // await this.page
    //   .getByRole("option", { name: employeName })
    //   .locator("span")
    //   .click();
    await this.jobtitle.click();
    await this.accountAssis.click();
    await this.jobtitle.click();
    await this.newyork.click();
    await this.search.click();
    await this.reset.click();
    //Orange  Test
  }
}
