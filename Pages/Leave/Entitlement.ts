import { expect, type Page } from "@playwright/test";
import { Leaveobj } from "../../pageobj/leaveobj";
export class Entitle {
  readonly page: Page;
  readonly obj;
  constructor(page) {
    this.page = page;
    this.obj = new Leaveobj(page);
  }

  async AddentitlePage(employeeName, leavetype) {
    await this.obj.Entitlement.click();
    await this.obj.addentitle.click();
    await this.obj.employeeName.fill(employeeName);
    await this.page
      .getByRole("option", { name: employeeName })
      .locator("span")
      .click();
    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == leavetype) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    // await this.obj.selectType.click();
    await this.obj.input.fill("2");

    await this.obj.save.click();
    await this.obj.confirm.click();
    // await this.page.pause();
  }
  async EmpentitlePage(employeeName, leavetype) {
    await this.obj.Entitlement.click();
    await this.obj.empentitle.click();
    await this.obj.employeeName.fill(employeeName);
    await this.page
      .getByRole("option", { name: employeeName })
      .locator("span")
      .click();
    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == leavetype) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    await this.obj.search.click();
  }

  async myentitlePage(leavetype) {
    await this.obj.Entitlement.click();
    await this.obj.myentitle.click();
    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == leavetype) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    // await this.obj.selectType.click();
    await this.obj.search.click();
  }
}
