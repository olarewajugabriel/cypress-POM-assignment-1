class HomePage {

  visit() {
    cy.visit("/");
  }

  verifyHomePage() {
    cy.get('a[href="/"]')
      .should("be.visible");
  }

  clickSignupLogin() {
    cy.contains("a", "Signup / Login")
      .click();
  }
}

export default HomePage;