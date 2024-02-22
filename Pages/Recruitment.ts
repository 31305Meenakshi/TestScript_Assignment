import { expect, type Locator, type Page } from "@playwright/test";

export class Recruit {
  readonly page: Page;
  readonly recruit: Locator;
  readonly assertrecruit: Locator;
  readonly vacancies: Locator;
  readonly title: Locator;
  readonly vacancy: Locator;
  readonly hiring: Locator;
  readonly status: Locator;
  readonly assistant: Locator;
  readonly javadev: Locator;
  readonly hiredname: Locator;
  readonly active: Locator;
  readonly search: Locator;
  readonly reset: Locator;

  constructor(page) {
    this.page = page;
    this.recruit = page.locator("text=Recruitment");
    this.assertrecruit = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.vacancies = page.locator('a:text("Vacancies")');
    this.title = page.locator('div:text("-- Select --")').nth(0);
    this.assistant = page.locator("div[role=listbox]>div:nth-child(2)");

    this.javadev = page.locator("div[role=listbox]>div:nth-child(2)");

    this.hiredname = page.locator("div[role=listbox]>div:nth-child(2)");

    this.active = page.locator("div[role=listbox]>div:nth-child(2)");
    this.search = page.locator('button:text(" Search ")');
    this.reset = page.locator('button:text(" Reset ")');
  }

  async recruitPage() {
    await this.recruit.click();
    expect(this.assertrecruit).toHaveText("Recruitment");
    await this.vacancies.click();
    await this.title.click();
    await this.assistant.click();
    await this.title.click();
    await this.javadev.click();
    await this.title.click();
    await this.hiredname.click();
    await this.title.click();
    await this.active.click();
    await this.search.click();
    await this.reset.click();
  }
}
