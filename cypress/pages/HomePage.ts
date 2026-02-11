export class HomePage {

  visit(): void {
    cy.visit('https://www.ibm.com/')
  }

  openProfileMenu(): void {
    cy.get('c4d-masthead-profile').click()
  }

  clickLogin(): void {
    cy.contains('c4d-masthead-profile-item', 'Log in')
      .click({ force: true })
  }

  navigateToLogin(): void {
    this.visit()
    this.openProfileMenu()
    this.clickLogin()
  }
}
