import { expect, type Locator, type Page } from "@playwright/test";
import { MyInfoobj } from "../pageobj/myinfoobj";

export class MyInfo {
  readonly page: Page;
  readonly obj;

  constructor(page) {
    this.page = page;
    this.obj = new MyInfoobj(page);
  }

  async infoPage() {
    await this.obj.info.click();
    expect(this.obj.assertinfo).toHaveText("PIM");
    await this.obj.save.click();
  }
}
