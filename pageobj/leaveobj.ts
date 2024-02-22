import { expect, type Locator, type Page } from "@playwright/test";

export class Leaveobj {
  readonly page: Page;
  readonly leave: Locator;
  readonly assertleave: Locator;
  readonly apply: Locator;
  readonly myleave: Locator;
  readonly leavelist: Locator;
  readonly assignleave: Locator;
  readonly fromDate: Locator;
  readonly toDate: Locator;
  readonly month: Locator;
  readonly selectMonth: Locator;
  readonly year: Locator;
  readonly selectYear: Locator;
  //readonly day: Locator;
  readonly leaveStatus: Locator;
  readonly selectStatus: Locator;
  readonly Select: Locator;
  readonly selectType: Locator;
  readonly searchBtn: Locator;
  readonly optionsIcon: Locator;
  // readonly addComment: Locator;
  readonly comment: Locator;
  readonly save: Locator;
  readonly date: Locator;
  readonly applybutton: Locator;
  readonly employeeName: Locator;
  readonly subunit: Locator;
  readonly subunitSelect: Locator;
  readonly pastEmployee: Locator;

  readonly Entitlement: Locator;
  readonly addentitle: Locator;
  readonly empentitle: Locator;
  readonly myentitle: Locator;
  readonly input: Locator;
  readonly confirm: Locator;
  readonly search: Locator;
  readonly assign: Locator;

  readonly report: Locator;
  readonly leavereport: Locator;
  readonly myleavereport: Locator;
  readonly generate: Locator;
  readonly reportLeaveType: Locator;

  constructor(page) {
    this.page = page;
    this.leave = page.locator('text="Leave"');
    this.assertleave = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );

    this.apply = page.locator("a:text('Apply')");
    // this.applyleave = page.locator("div:text('-- Select --')");

    this.myleave = page.locator("a:text('My Leave')");
    this.leavelist = page.locator("a:text('Leave List')");
    this.assignleave = page.locator("a:text('Assign Leave')");
    this.fromDate = page.locator("input[placeholder='dd-mm-yyyy']").nth(0);
    this.toDate = page.locator("input[placeholder='dd-mm-yyyy']").nth(1);
    this.month = page.locator("li[class$='month']");
    this.selectMonth = page.locator("ul[class='oxd-calendar-dropdown']>li");
    this.year = page.locator("li[class$='year']");
    this.selectYear = page.locator("ul[class='oxd-calendar-dropdown']>li");
    // this.day = page.locator("div:text('20')");
    this.date = page.locator("div[class='oxd-calendar-date']");
    this.leaveStatus = page.getByText("Select", { exact: true });
    // this.selectStatus = page.locator("span:text('Scheduled')");
    this.selectStatus = page.locator("div[class='oxd-select-option']>span");
    this.Select = page.getByText("-- Select --", { exact: true }).nth(0);
    this.selectType = page.locator(
      "div[class^='oxd-select-dropdown']>div>span"
    );
    this.searchBtn = page.locator("button[type=submit]");
    this.optionsIcon = page.locator(
      "i[class='oxd-icon bi-three-dots-vertical']"
    );
    this.comment = page.locator(
      "textarea[class$='oxd-textarea--resize-vertical']"
    );
    //  this.addComment = page.locator("p:text('Add Comment')");
    // this.comment = page.locator("textarea[placeholder='Comment here']");
    this.save = page.locator("button:text(' Save ')");
    this.applybutton = page.locator("button:text(' Apply ')");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    this.subunit = page.locator("div:text('-- Select --')");
    this.subunitSelect = page.locator("div[class^='oxd-select-option']>span");
    this.pastEmployee = page.locator("span[class^='oxd-switch-input']");

    ////*******   Entitlement    ****** */
    this.Entitlement = page.locator("span:text('Entitlements ')");
    this.addentitle = page.locator('a:text("Add Entitlements")');
    this.empentitle = page.locator('a:text("Employee Entitlements")');
    this.myentitle = page.locator('a:text("My Entitlements")');
    this.input = page.locator(
      'div[class="oxd-input-group oxd-input-field-bottom-space"]>div:nth-child(2)>input'
    );
    this.confirm = page.locator("button:text(' Confirm ')");
    this.search = page.locator("button:text(' Search ')");
    this.assign = page.locator("button:text(' Assign ')");

    this.report = page.locator("span:text('Reports ')");
    this.leavereport = page.getByText("Leave Entitlements and Usage Report", {
      exact: true,
    });
    this.myleavereport = page.locator(
      'a:text("My Leave Entitlements and Usage Report")'
    );
    //this.generateFor = page.locator("span[class$=oxd-radio-input]");
    this.generate = page.locator("button:text(' Generate ')");
    this.reportLeaveType = page.locator("div:text('CAN - Bereavement')");
  }
}
