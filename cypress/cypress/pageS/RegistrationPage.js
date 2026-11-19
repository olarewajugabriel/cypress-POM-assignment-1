class RegistrationPage {

  verifyAccountInformation() {
    cy.contains("ENTER ACCOUNT INFORMATION")
      .should("be.visible");
  }

  fillAccountDetails(user) {

    cy.get("#id_gender1").check();

    cy.get("#password").type(user.password);

    cy.get("#days").select("10");

    cy.get("#months").select("5");

    cy.get("#years").select("1998");

    cy.get("#newsletter").check();

    cy.get("#optin").check();

    cy.get("#first_name").type(user.firstName);

    cy.get("#last_name").type(user.lastName);

    cy.get("#company").type("QA Testing");

    cy.get("#address1").type("10 Test Street");

    cy.get("#address2").type("Ikeja");

    cy.get("#country").select("India");

    cy.get("#state").type("Lagos");

    cy.get("#city").type("Ikeja");

    cy.get("#zipcode").type("100001");

    cy.get("#mobile_number").type("08012345678");

  }

  createAccount() {
    cy.get('[data-qa="create-account"]')
      .click();
  }

  verifyAccountCreated() {
    cy.contains("ACCOUNT CREATED!")
      .should("be.visible");
  }

  continue() {
    cy.get('[data-qa="continue-button"]')
      .click();
  }

  verifyLoggedIn() {
    cy.contains("Logged in as")
      .should("be.visible");
  }

  logout() {
    cy.contains("a", "Logout")
      .click();
  }

  deleteAccount() {
    cy.contains("a", "Delete Account")
      .click();
  }

  verifyAccountDeleted() {
    cy.contains("ACCOUNT DELETED!")
      .should("be.visible");
  }
}

export default RegistrationPage;