import { test, expect } from "@playwright/test";
import data from "../Data/data.json";
import { LoginPage } from "../Pages/login";
import { Time } from "../Pages/Time";
import { NavigationPage } from "../Pages/navigation";

test.describe("Orange Test", () => {
  let page;
  let context;
  let Login;
  let TimePage;
  let navigate;

  test.beforeAll("OpenWeb", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);

    TimePage = new Time(page);
    navigate = new NavigationPage(page);

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  test("positivetest", async () => {
    await Login.login(data.username, data.password);
    await navigate.navigationActions("Time");
    await TimePage.timePage();
    await TimePage.myTimesheets();
    await TimePage.employeeTimesheets();
    await TimePage.myRecords();
    await TimePage.punchInOut();
    await TimePage.employeeRecords();
  });
});
