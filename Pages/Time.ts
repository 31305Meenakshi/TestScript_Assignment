import { expect, type Locator, type Page } from "@playwright/test";
import { Timeobj } from "../pageobj/timeobj";

export class Time {
  readonly page: Page;
  readonly obj;

  constructor(page) {
    this.page = page;
    this.obj = new Timeobj(page);
  }

  async timePage() {
    await this.obj.time.click();
  }

  async myTimesheets() {
    //   expect(this.obj.asserttime).toHaveText("Time");
    //expect(this.obj.assertText).toHaveText("Time");
    await this.obj.timesheet.click();
    await this.obj.myTimesheet.click();
    await this.obj.calenderBtn.click();
    await this.obj.date.click();
    if ((await this.obj.submitBtn.count()) == 1) {
      this.obj.submitBtn.click();
    } else {
      this.obj.EditBtn.click();
      // console.log("dfd");
    }
    await this.obj.save.click();
  }
  async employeeTimesheets(employeeName) {
    expect(this.obj.asserttime).toHaveText("Time");
    await this.obj.timesheet.click();
    await this.obj.employeeTimesheet.click();
    await this.obj.employeeName.fill(employeeName);
    await this.page
      .getByRole("option", { name: employeeName })
      .locator("span")
      .click();
    await this.obj.viewBtn.click();
  }
  async myRecords() {
    expect(this.obj.asserttime).toHaveText("Time");
    await this.obj.attendance.click();
    await this.obj.myRecord.click();
    await this.obj.calenderBtn.click();
    await this.obj.date.click();
  }
  async punchInOut() {
    expect(this.obj.asserttime).toHaveText("Time");
    await this.obj.attendance.click();
    await this.obj.punch.click();
    await this.obj.calenderBtn.click();
    await this.obj.date.click();
    await this.obj.clockBtn.click();
    await this.obj.hours.click();
    await this.obj.hours.press("Control+a");
    await this.obj.hours.fill("5");
    await this.obj.minutes.click();
    await this.obj.minutes.press("Control+a");
    await this.obj.minutes.fill("30");
    await this.obj.timePeriod.click();
    await this.obj.note.fill("Commited");
    await this.obj.outBtn.click();
  }
  async employeeRecords() {
    expect(this.obj.asserttime).toHaveText("Time");
    await this.obj.attendance.click();
    await this.obj.employeeRecord.click();
  }
}
