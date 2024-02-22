import { expect, type Locator, type Page } from "@playwright/test";

export class Admin {
  readonly page: Page;
  readonly admin: Locator;
  readonly assertadmin: Locator;
  readonly username: Locator;
  readonly userRoleSelect: Locator;
  readonly options: Locator;
  readonly employeeName: Locator;
  readonly statusSelect: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;
  readonly addBtn: Locator;

  constructor(page) {
    this.page = page;
    this.admin = page.locator('text="Admin"');
    this.assertadmin = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.username = page.locator(
      "div[class^=oxd-input-group]>div:nth-child(2)>input"
    );
    this.userRoleSelect = page.locator("div:text('-- Select --')").nth(0);
    this.options = page.locator("div[role=listbox]>div:nth-child(2)");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    // this.statusSelect = page.locator("div:text('-- Select --')");
    this.searchBtn = page.locator("button:text(' Search ')");
    this.resetBtn = page.locator("button:text(' Reset ')");
    this.addBtn = page.locator("button:text(' Add ')");
  }

  async adminPage(username, employeName) {
    await this.admin.click();
    expect(this.assertadmin).toHaveText("Admin");
    await this.username.fill(username);
    await this.userRoleSelect.click();
    await this.options.click();
    await this.employeeName.fill("Orange  Test");
    await this.page
      .getByRole("option", { name: employeName })
      .locator("span")
      .click();
    await this.userRoleSelect.click();
    await this.options.click();
    await this.searchBtn.click();
    await this.resetBtn.click();
    await this.addBtn.click();
  }
}

