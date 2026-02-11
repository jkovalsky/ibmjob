export class HomePage {

  openHomepage(): void {
    cy.visit('https://www.ibm.com/')
  }

  openProfileMenu(): void {
    cy.get('c4d-masthead-profile').click()
  }

  verifyLoginOption(): void {
    cy.contains('c4d-masthead-profile-item', 'Log in').should('be.visible')
  }
}
