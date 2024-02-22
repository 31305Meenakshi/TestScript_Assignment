import { expect, type Page } from "@playwright/test";
import { Leaveobj } from "../../pageobj/leaveobj";
export class ApplyLeave {
  readonly page: Page;
  readonly obj;

  constructor(page) {
    this.page = page;
    this.obj = new Leaveobj(page);
  }

  async applyLeave(type, date, month, year, todate, tomonth, toyear) {
    expect(this.obj.assertleave).toHaveText("Leave");
    await this.obj.apply.click();
    await this.obj.Select.click();
    // await this.obj.selectType.click();
    for (let i = 0; i < (await this.obj.selectType.count()); i++) {
      if ((await this.obj.selectType.nth(i).textContent()) == type) {
        await this.obj.selectType.nth(i).click();
        break;
      }
    }
    await this.obj.fromDate.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == month) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }

    await this.obj.year.click();

    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == year) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }

    // await this.obj.date.click();
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == date) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.toDate.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == tomonth) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }
    await this.obj.year.click();
    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == toyear) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == todate) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.comment.fill("Sick Leave");
    await this.obj.applybutton.click();
  }
}
