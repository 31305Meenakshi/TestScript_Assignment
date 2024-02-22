import { expect, type Locator, type Page } from "@playwright/test";

export class Claim {
  readonly page: Page;
  readonly claim: Locator;
  readonly assertclaim: Locator;
  readonly configure: Locator;
  readonly events: Locator;
  readonly eventname: Locator;
  readonly status: Locator;
  readonly active: Locator;
  readonly search: Locator;
  readonly reset: Locator;
  readonly expense: Locator;
  readonly expensename: Locator;
  readonly expstatus: Locator;
  readonly expactive: Locator;
  readonly expsearch: Locator;
  readonly expreset: Locator;
  readonly submitclaim: Locator;
  readonly myclaim: Locator;
  readonly assignclaim: Locator;
  constructor(page) {
    this.page = page;
    this.claim = page.locator("text=Claim");
    this.assertclaim = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.configure = page.locator('span:text("Configuration ")');
    this.events = page.locator('a:text("Events")');
    this.eventname = page.locator('input[placeholder="Type for hints..."]');
    this.status = page.locator('div:text("-- Select --")');
    this.active = page.locator("div[role=listbox]>div:nth-child(2)");
    this.search = page.locator('button:text(" Search ")');
    this.reset = page.locator('button:text(" Reset ")');
    this.expense = page.locator('a:text("Expense Types")');
    this.expensename = page.locator('input[placeholder="Type for hints..."]');
    this.expstatus = page.locator('div:text("-- Select --")');
    this.expactive = page.locator("div[role=listbox]>div:nth-child(2)");
    this.expsearch = page.locator('button:text(" Search ")');
    this.expreset = page.locator('button:text(" Reset ")');
    this.submitclaim = page.locator('a:text("Submit Claim")');
    this.myclaim = page.locator('a:text("My Claims")');
    this.assignclaim = page.locator('a:text("Assign Claim")');
  }

  async claimPage() {
    await this.claim.click();
    // await this.submitclaim.click();
    // await this.myclaim.click();
    // await this.assignclaim.click();
  }

  async event(eventname) {
    await this.configure.click();
    expect(this.assertclaim).toHaveText("Claim");
    await this.events.click();
    await this.eventname.fill(eventname);
    await this.status.click();
    await this.active.click();
    await this.search.click();
    await this.reset.click();
  }

  async expensemethod(expensename) {
    await this.configure.click();
    await this.expense.click();
    await this.expensename.fill(expensename);
    await this.expstatus.click();
    await this.expactive.click();
    await this.expsearch.click();
    await this.expreset.click();
  }
}
