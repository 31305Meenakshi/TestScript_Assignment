import { expect, type Page } from "@playwright/test";
import { Leaveobj } from "../../pageobj/leaveobj";
export class Report {
  readonly page: Page;
  readonly obj;
  constructor(page) {
    this.page = page;
    this.obj = new Leaveobj(page);
  }

  async leavereportPage(leavereport, location, subUnit, jobTitle) {
    await this.obj.report.click();
    await this.obj.leavereport.click();
    await this.obj.reportLeaveType.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == leavereport) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }

    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == location) {
        await this.obj.selectType.nth(i).click();
      }
    }
    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == subUnit) {
        await this.obj.selectType.nth(i).click();
      }
    }
    await this.obj.Select.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == jobTitle) {
        await this.obj.selectType.nth(i).click();
      }
    }
    await this.obj.pastEmployee.click();
    // await this.obj.generateFor.click();
  }

  async myleavereportPage() {
    await this.obj.report.click();
    await this.obj.myleavereport.click();
  }
}
