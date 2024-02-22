import { expect, type Page } from "@playwright/test";
import { Leaveobj } from "../../pageobj/leaveobj";
export class LeaveList {
  readonly page: Page;
  readonly obj;
  constructor(page) {
    this.page = page;
    this.obj = new Leaveobj(page);
  }
  async leaveList(
    fromMonth,
    fromYear,
    fromDate,
    toMonth,
    toYear,
    toDate,
    status,
    type,
    employeeName,
    subUnit
  ) {
    expect(this.obj.assertleave).toHaveText("Leave");
    await this.obj.leavelist.click();
    await this.obj.fromDate.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == fromMonth) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }
    await this.obj.year.click();
    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == fromYear) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == fromDate) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.toDate.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == toMonth) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }
    await this.obj.year.click();
    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == toYear) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == toDate) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.leaveStatus.click();
    // await this.obj.selectStatus.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == status) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    await this.obj.Select.click();
    // await this.obj.selectType.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == type) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    await this.obj.employeeName.fill(employeeName);
    await this.page
      .getByRole("option", { name: employeeName })
      .locator("span")
      .click();
    await this.obj.subunit.click();
    for (let i = 0; i < (await this.obj.subunitSelect.count()); i++) {
      if ((await this.obj.subunitSelect.nth(i).textContent()) == subUnit) {
        await this.obj.subunitSelect.nth(i).click();
        break;
      }
    }
    await this.obj.pastEmployee.click();
    await this.obj.searchBtn.click();
  }
}
