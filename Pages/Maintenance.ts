import { expect, type Locator, type Page } from "@playwright/test";

export class Maintenance {
  readonly page: Page;
  readonly main: Locator;
  readonly password: Locator;
  readonly confirm: Locator;
  readonly assertmain: Locator;
  readonly accessrecords: Locator;
  readonly empname: Locator;
  readonly search: Locator;
  readonly purerecords: Locator;
  readonly emprecords: Locator;
  readonly emprecname: Locator;
  readonly empsearch: Locator;
  readonly candidaterecords: Locator;
  readonly candidrecname: Locator;
  readonly candsearch: Locator;

  constructor(page) {
    this.page = page;
    this.main = page.locator("text=Maintenance");
    this.password = page.locator('input[name="password"]');
    this.confirm = page.locator('button[type="submit"]');

    this.accessrecords = page.locator('a:text("Access Records")');
    this.empname = page.locator('input[placeholder="Type for hints..."]');
    this.search = page.locator('button:text(" Search ")');
    this.assertmain = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );

    this.purerecords = page.locator('span:text("Purge Records ")');
    this.emprecords = page.locator('a:text("Employee Records")');
    this.emprecname = page.locator('input[placeholder="Type for hints..."]');
    this.empsearch = page.locator('button:text(" Search ")');
    this.candidaterecords = page.locator('a:text("Candidate Records")');
    this.candidrecname = page.locator('input[placeholder="Type for hints..."]');
    this.candsearch = page.locator('button:text(" Search ")');
  }

  async mainPage(password) {
    await this.main.click();
    await this.password.fill(password);
    await this.confirm.click();
    expect(this.assertmain).toHaveText("Maintenance");
    await this.purerecords.click();
    await this.emprecords.click();
    await this.emprecname.fill("Rahul  Das");
    await this.empsearch.click();
    await this.purerecords.click();
    await this.candidaterecords.click();
    await this.candidrecname.fill("Rahul  Das");
    await this.candsearch.click();
    await this.accessrecords.click();
    await this.empname.fill("Rahul  Das");
    // await this.page.pause();
    await this.search.click();
  }
}
