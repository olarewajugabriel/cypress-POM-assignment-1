class LoginPage {

  verifySignupSection() {
    cy.contains("New User Signup!")
      .should("be.visible");
  }

  verifyLoginSection() {
    cy.contains("Login to your account")
      .should("be.visible");
  }

  enterSignupDetails(name, email) {
    cy.get('[data-qa="signup-name"]')
      .type(name);

    cy.get('[data-qa="signup-email"]')
      .type(email);
  }

  clickSignup() {
    cy.get('[data-qa="signup-button"]')
      .click();
  }

  enterLoginDetails(email, password) {
    cy.get('[data-qa="login-email"]')
      .type(email);

    cy.get('[data-qa="login-password"]')
      .type(password);
  }

  clickLogin() {
    cy.get('[data-qa="login-button"]')
      .click();
  }

  verifyLoginError() {
    cy.contains("Your email or password is incorrect!")
      .should("be.visible");
  }
}

export default LoginPage;