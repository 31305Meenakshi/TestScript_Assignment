import { test, expect } from "@playwright/test";
import data from "../Data/data.json";
import { LoginPage } from "../Pages/login";
import { Dashboard } from "../Pages/Dashboard";
import { Admin } from "../Pages/Admin";
import { PIM } from "../Pages/PIM";
import { Leave } from "../Pages/Leave/Leave";
import { ApplyLeave } from "../Pages/Leave/Applyleave";
import { LeaveList } from "../Pages/Leave/leavelist";
import { Entitle } from "../Pages/Leave/Entitlement";
import { Report } from "../Pages/Leave/Reports";
import { AssignLeave } from "../Pages/Leave/Assignleave";
///import { Time } from "../Pages/Time";
import { Recruit } from "../Pages/Recruitment";
import { MyInfo } from "../Pages/MyInfo";

import { Directory } from "../Pages/Directory";
import { Maintenance } from "../Pages/Maintenance";

import { Buzz } from "../Pages/Buzz";
import { NavigationPage } from "../Pages/navigation";

test.describe("Orange Test", () => {
  let page;
  let context;
  let Login;
  let DashB;
  let AdminPage;
  let PIMPage;
  let LeavePage;
  let Applyleave;
  let Leavelist;
  let Assignleave;
  let EntitlePage;
  let ReportPage;
  let RecruitPage;
  let MyInfoPage;

  let DirectoryPage;
  let MaintenancePage;

  let BuzzPage;
  let navigate;

  test.beforeAll("OpenWeb", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    DashB = new Dashboard(page);
    AdminPage = new Admin(page);
    PIMPage = new PIM(page);
    LeavePage = new Leave(page);
    Applyleave = new ApplyLeave(page);
    Leavelist = new LeaveList(page);
    EntitlePage = new Entitle(page);
    ReportPage = new Report(page);
    Assignleave = new AssignLeave(page);

    RecruitPage = new Recruit(page);
    MyInfoPage = new MyInfo(page);

    DirectoryPage = new Directory(page);
    MaintenancePage = new Maintenance(page);

    BuzzPage = new Buzz(page);
    navigate = new NavigationPage(page);

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  test("positivetest", async () => {
    await Login.login(data.username, data.password);

    // await DashB.dash();

    await navigate.navigationActions("Leave");

    /*****     Admin      *****/
    //await AdminPage.adminPage(data.username, "Orange  Test");

    /*****     PIM      *****/
    // await PIMPage.pimPage();

    /*****     Leave      *****/
    await Applyleave.applyLeave(
      data.type,
      data.date,
      data.month,
      data.year,
      data.todate,
      data.tomonth,
      data.toyear
    );
    await LeavePage.myLeave(
      data.date,
      data.month,
      data.year,
      data.todate,
      data.tomonth,
      data.toyear,
      data.status,
      data.type
    );

    await Leavelist.leaveList(
      data.month,
      data.year,
      data.date,
      data.tomonth,
      data.toyear,
      data.todate,
      data.status,
      data.type,
      data.employeeName,
      data.subUnit
    );

    await ReportPage.leavereportPage(
      data.leavereport,
      data.location,
      data.subUnit,
      data.jobTitle
    );

    // await ReportPage.myleavereportPage();

    await EntitlePage.AddentitlePage(data.employeeName, data.leavereport);
    await EntitlePage.EmpentitlePage(data.employeeName, data.leavereport);
    await EntitlePage.myentitlePage(data.leavereport);

    await Assignleave.assignleave(
      data.employeeName,
      data.leavereport,
      data.month,
      data.year,
      data.date,
      data.tomonth,
      data.toyear,
      data.todate,
      data.partialday,
      data.duration
    );

    /*****     Recruitment     *****/
    //await RecruitPage.recruitPage();

    /*****     Myinfo      *****/
    //await MyInfoPage.infoPage();

    /*****     Directory     *****/
    // await DirectoryPage.direPage("Rahul  Das");

    /*****        Maintenance        *****/
    //await MaintenancePage.mainPage(data.password);

    /*****        Buzz         *****/
    // await BuzzPage.buzzPage(data.textarea);

    // await Login.logout();
  });
});
