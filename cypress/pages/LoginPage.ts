export class LoginPage {

  visit(): void {
    cy.visit('https://login.ibm.com/')
  }

  typeUsername(username: string): void {
    cy.get('#username').type(username)
  }

  clickContinue(): void {
    cy.contains('button', 'Continue').click()
  }

  typePassword(password: string): void {
    cy.get('#password').type(password, { log: false })
  }

  clickLogin(): void {
    cy.contains('button', 'Log in').click()
  }

  verifyTwoFactorPage(): void {
    cy.contains('h1', 'Dvojí ověřování').should('be.visible')
  }

  selectEmailVerification(): void {
    cy.get('#email_0_item').click()
  }

  verifyEmailCodeField(): void {
    cy.contains('label', 'Enter email code').should('be.visible')
  }

  login(username: string, password: string): void {
    this.typeUsername(username)
    this.clickContinue()
    this.typePassword(password)
    this.clickLogin()
  }
}
