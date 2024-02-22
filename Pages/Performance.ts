import { expect, type Locator, type Page } from "@playwright/test";

export class Perform {
  readonly page: Page;
  readonly performance: Locator;
  readonly assertperform: Locator;
  readonly configure: Locator;
  readonly kpis: Locator;
  // readonly trackers: Locator;
  readonly review: Locator;
  readonly managereview: Locator;
  readonly myreview: Locator;
  readonly empreview: Locator;
  readonly mytracker: Locator;
  readonly view: Locator;
  readonly addlog: Locator;
  readonly typehere: Locator;
  readonly positive: Locator;
  readonly comment: Locator;
  readonly save: Locator;
  // readonly emptracker: Locator;

  constructor(page) {
    this.page = page;
    this.performance = page.locator("text=Performance");
    this.assertperform = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );

    this.configure = page.locator('span:text("Configure ")');
    this.kpis = page.locator('a:text("KPIs")');
    // this.trackers = page.locator('a:text("Trackers")');
    this.review = page.locator('span:text("Manage Reviews ")');
    this.managereview = page.locator('a:text("Manage Reviews")');
    this.myreview = page.locator('a:text("My Reviews")');
    this.empreview = page.locator('a:text("Employee Reviews")');
    this.mytracker = page.locator('a:text("My Trackers")');
    this.view = page.locator('button:text(" View ")');
    this.addlog = page.locator('button:text(" Add Log ")');
    this.typehere = page.locator('input[placeholder="Type here"]');
    this.positive = page.locator('button:text(" Positive ")');
    // this.emptracker = page.locator('a:text("Employee Trackers")');
    this.comment = page.locator('textarea[placeholder="Type here"]');
    this.save = page.locator('button:text(" Save ")');
  }

  async performPage() {
    await this.performance.click();
  }

  async configurePage() {
    expect(this.assertperform).toHaveText("Performance");
    await this.configure.click();
    await this.kpis.click();
  }

  async reviewPage() {
    expect(this.assertperform).toHaveText("Performance");
    await this.review.click();
    await this.managereview.click();
    await this.review.click();
    await this.myreview.click();
    await this.review.click();
    await this.empreview.click();
  }
  // await this.trackers.click();

  async trackerPage() {
    expect(this.assertperform).toHaveText("Performance");
    // await this.configure.click();
    // await this.kpis.click();
    await this.mytracker.click();
    await this.view.click();
    await this.addlog.click();
    await this.typehere.fill("trackerid");
    await this.positive.click();
    await this.comment.fill("confirm");
    await this.save.click();
    await this.mytracker.click();
  }
}
