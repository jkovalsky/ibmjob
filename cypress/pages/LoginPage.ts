export class LoginPage {

  openLoginPage(): void {
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

  clickNotYou(): void {
    cy.contains('a', 'Not you?').click()
  }

  provideCredentials(username: string, password: string): void {
    this.typeUsername(username)
    this.clickContinue()
    this.typePassword(password)
    this.clickLogin()
  }

  provideAuthenticatorCode(secret: string): void {
    cy.task('generateTotp', secret).then((token) => {
      cy.get('#otp').type(token as string)
    })
    cy.contains('button', 'Verify').click()
  }

  selectAuthenticator2FAMethod() {
    cy.contains('p', 'Choose a method or device to verify your login.').should('be.visible')
    cy.get('#totp_0_item').click()
  }

  verifySuccessfulLogin() {
    cy.get('#usc--header-action__User').should('be.visible')
  }

  verifyLoginError() {
    cy.contains('div', 'Incorrect IBMid or password. Please try again!').should('be.visible')
  }
}