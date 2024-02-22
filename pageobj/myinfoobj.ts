import { expect, type Locator, type Page } from "@playwright/test";

export class MyInfoobj {
  readonly info: Locator;
  readonly assertinfo: Locator;
  readonly save: Locator;

  constructor(page) {
    this.info = page.locator("text='My Info'");
    this.assertinfo = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.save = page.locator("button:text(' Save ')");
  }
}
