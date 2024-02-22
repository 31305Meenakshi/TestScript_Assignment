import { expect, type Locator, type Page } from "@playwright/test";

export class Timeobj {
  readonly page: Page;
  readonly time: Locator;
  readonly asserttime: Locator;
  readonly timesheet: Locator;
  readonly myTimesheet: Locator;
  readonly calenderBtn: Locator;
  readonly date: Locator;
  readonly submitBtn: Locator;
  readonly EditBtn: Locator;
  readonly save: Locator;
  readonly employeeTimesheet: Locator;
  readonly employeeName: Locator;
  readonly viewBtn: Locator;
  readonly attendance: Locator;
  readonly myRecord: Locator;
  readonly punch: Locator;
  readonly clockBtn: Locator;
  readonly hours: Locator;
  readonly minutes: Locator;
  readonly timePeriod: Locator;
  readonly note: Locator;
  readonly outBtn: Locator;
  readonly employeeRecord: Locator;

  constructor(page) {
    this.page = page;
    this.time = page.locator("a[href='/web/index.php/leave/viewLeaveModule']");
    this.asserttime = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );

    this.timesheet = page.locator("span:text('Timesheets ')");
    this.myTimesheet = page.locator("a:text('My Timesheets')");
    this.calenderBtn = page.locator("i[class$='oxd-date-input-icon']");
    this.date = page.getByText("12", { exact: true });
    this.submitBtn = page.locator("button:text(' Submit ')");
    this.EditBtn = page.locator("button:text(' Edit ')");
    this.save = page.locator("button:text(' Save ')");
    this.employeeTimesheet = page.locator("a:text('Employee Timesheets')");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    this.viewBtn = page.locator("button[class$='orangehrm-left-space']");
    this.attendance = page.locator("span:text('Attendance ')");
    this.myRecord = page.locator("a:text('My Records')");
    this.punch = page.locator("a:text('Punch In/Out')");
    this.clockBtn = page.locator("i[class$='oxd-time-input--clock']");
    this.hours = page.locator("input[class$='oxd-time-hour-input-text']");
    this.minutes = page.locator("input[class$='oxd-time-minute-input-text']");
    this.timePeriod = page.locator("input[name='am']");
    this.note = page.locator("textarea[placeholder='Type here']");
    this.outBtn = page.locator("button:text(' Out ')");
    this.employeeRecord = page.locator("a:text('Employee Records')");
  }
}
