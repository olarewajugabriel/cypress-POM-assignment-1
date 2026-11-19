import { faker } from "@faker-js/faker";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

describe("Automation Exercise - Registration and Login", () => {

  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    name: ${firstName} ${lastName},
    firstName: firstName,
    lastName: lastName,
    email: qa_${faker.string.alphanumeric(12).toLowerCase()}@example.com,
    password: "Test@12345"
  };

  it("should register a new user and successfully login", () => {

    // STEP 1: Visit homepage
    homePage.visit();

    homePage.verifyHomePage();

    // STEP 2: Navigate to Signup/Login
    homePage.clickSignupLogin();

    // STEP 3: Verify signup section
    loginPage.verifySignupSection();

    // STEP 4: Generate and enter random details
    loginPage.enterSignupDetails(
      user.name,
      user.email
    );

    // STEP 5: Click Signup
    loginPage.clickSignup();

    // STEP 6: Verify account information
    registrationPage.verifyAccountInformation();

    // STEP 7: Fill registration form
    registrationPage.fillAccountDetails(user);

    // STEP 8: Create account
    registrationPage.createAccount();

    // STEP 9: Verify account creation
    registrationPage.verifyAccountCreated();

    // STEP 10: Continue
    registrationPage.continue();

    // STEP 11: Verify successful registration
    registrationPage.verifyLoggedIn();

    // STEP 12: Logout
    registrationPage.logout();

    // STEP 13: Verify login page
    loginPage.verifyLoginSection();

    // STEP 14: Enter registered email and password
    loginPage.enterLoginDetails(
      user.email,
      user.password
    );

    // STEP 15: Login
    loginPage.clickLogin();

    // STEP 16: Verify successful login
    registrationPage.verifyLoggedIn();

    // STEP 17: Delete test account
    registrationPage.deleteAccount();

    // STEP 18: Verify account deletion
    registrationPage.verifyAccountDeleted();

    cy.log("Registration and Login Test Passed");

  });

});
