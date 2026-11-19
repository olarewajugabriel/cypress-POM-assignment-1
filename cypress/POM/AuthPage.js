class AuthPage {
  visitHome() {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();
  }
  signup(name, email, password) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1', { timeout: 10000 }).check();
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1998');
    cy.get('[data-qa="first_name"]').type('John');
    cy.get('[data-qa="last_name"]').type('Doe');
    cy.get('[data-qa="address"]').type('123 Main St');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('CA');
    cy.get('[data-qa="city"]').type('LA');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('1234567890');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }
  logout() {
    cy.get('a[href="/logout"]').click();
  }
  login(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }
}
export default AuthPage;