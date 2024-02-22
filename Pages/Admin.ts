import { expect, type Locator, type Page } from "@playwright/test";

export class Admin {
  readonly page: Page;
  readonly admin: Locator;
  readonly assertadmin: Locator;
  readonly username: Locator;
  readonly userRoleSelect: Locator;
  readonly options: Locator;
  readonly employeeName: Locator;
  readonly statusSelect: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;
  readonly addBtn: Locator;

  constructor(page) {
    this.page = page;
    this.admin = page.locator('text="Admin"');
    this.assertadmin = page.locator(
      'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    );
    this.username = page.locator(
      "div[class^=oxd-input-group]>div:nth-child(2)>input"
    );
    this.userRoleSelect = page.locator("div:text('-- Select --')").nth(0);
    this.options = page.locator("div[role=listbox]>div:nth-child(2)");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    // this.statusSelect = page.locator("div:text('-- Select --')");
    this.searchBtn = page.locator("button:text(' Search ')");
    this.resetBtn = page.locator("button:text(' Reset ')");
    this.addBtn = page.locator("button:text(' Add ')");
  }

  async adminPage(username, employeName) {
    await this.admin.click();
    expect(this.assertadmin).toHaveText("Admin");
    await this.username.fill(username);
    await this.userRoleSelect.click();
    await this.options.click();
    await this.employeeName.fill("Orange  Test");
    await this.page
      .getByRole("option", { name: employeName })
      .locator("span")
      .click();
    await this.userRoleSelect.click();
    await this.options.click();
    await this.searchBtn.click();
    await this.resetBtn.click();
    await this.addBtn.click();
  }
}

// import { expect, type Page, type Locator } from "@playwright/test";

// export class AdminPage {
//   readonly page: Page;
//   readonly admin: Locator;
//   readonly assertText: Locator;
//   readonly username: Locator;
//   readonly select: Locator;
//   readonly options: Locator;
//   readonly employeeName: Locator;
//   readonly searchBtn: Locator;
//   readonly resetBtn: Locator;
//   readonly addBtn: Locator;

//   constructor(page) {
//     this.page = page;
//     this.admin = page.locator("a[href='/web/index.php/admin/viewAdminModule']");
//     this.assertText = page.locator(
//       "h6[class$=oxd-topbar-header-breadcrumb-module]"
//     );
//     this.username = page.locator(
//       "div[class^=oxd-input-group]>div:nth-child(2)>input"
//     );
//     this.select = page.locator("div:text('-- Select --')").nth(0);
//     this.options = page.locator("div[class='oxd-select-option']");
//     this.employeeName = page.locator("input[placeholder='Type for hints...']");
//     this.searchBtn = page.locator("button:text(' Search ')");
//     this.resetBtn = page.locator("button:text(' Reset ')");
//     this.addBtn = page.locator("button:text(' Add ')");
//   }

//   async adminActions(username, userRole, status, employeeName) {
//     await this.admin.click();
//     expect(this.assertText).toHaveText("Admin");
//     await this.username.fill(username);
//     await this.select.click();
//     for (let i = 0; i < (await this.options.count()); i++) {
//       if ((await this.options.nth(i).textContent()) == userRole) {
//         await this.options.nth(i).click();
//         break;
//       }
//     }
//     await this.employeeName.fill(employeeName);
//     await this.page
//       .getByRole("option", { name: employeeName })
//       .locator("span")
//       .click();
//     await this.select.click();
//     for (let i = 0; i < (await this.options.count()); i++) {
//       if ((await this.options.nth(i).textContent()) == status) {
//         await this.options.nth(i).click();
//         break;
//       }
//     }
//     await this.searchBtn.click();
//     // await this.resetBtn.click();
//     // await this.addBtn.click();
//   }
// }
