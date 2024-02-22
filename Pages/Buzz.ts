import { expect, type Locator, type Page } from "@playwright/test";

export class Buzz {
  readonly page: Page;
  readonly buzz: Locator;
  readonly assertbuzz: Locator;
  readonly textarea: Locator;
  readonly postbutton: Locator;
  readonly post: Locator;
  readonly share: Locator;
  readonly cross: Locator;
  readonly likedpost: Locator;
  readonly commentpost: Locator;

  constructor(page) {
    this.page = page;
    //this.buzz = page.locator("text=Buzz");
    this.buzz = page.locator("span:text('Buzz')");
    this.assertbuzz = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.textarea = page.locator('textarea[class="oxd-buzz-post-input"]');
    this.postbutton = page.locator('text=" Post "');
    this.share = page.locator("button:text(' Share Photos')");
    this.likedpost = page.locator('button:text(" Most Liked Posts ")');
    this.commentpost = page.locator('button:text(" Most Commented Posts ")');

    this.cross = page.locator("button:text('×')");
  }

  async buzzPage(textarea) {
    await this.buzz.click();
    expect(this.assertbuzz).toHaveText("Buzz");
    await this.textarea.fill(textarea);
    await this.postbutton.click();
    await this.share.click();
    await this.cross.click();
    await this.likedpost.click();
    await this.commentpost.click();
  }
}
