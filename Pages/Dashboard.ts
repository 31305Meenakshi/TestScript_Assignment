import { expect, type Locator, type Page } from "@playwright/test";

export class Dashboard {
  readonly page: Page;
  readonly dashborad: Locator;
  readonly Assignleave: Locator;
  readonly timesheet: Locator;
  readonly assertDash: Locator;

  constructor(page) {
    this.page = page;
    this.dashborad = page.locator('text="Dashboard"');
    this.Assignleave = page.locator('button[title="Assign Leave"]');
    this.timesheet = page.locator('button[title="My Timesheet"]');
    this.assertDash = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
  }

  async dash() {
    expect(this.assertDash).toHaveText("Dashboard");
    await this.Assignleave.click();
    expect(this.assertDash).toHaveText("Leave");
    await this.dashborad.click();
    await this.timesheet.click();
    expect(this.assertDash).toHaveText("Time");
    await this.dashborad.click();
  }
}
