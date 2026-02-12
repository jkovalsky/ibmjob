export class ProfilePage {

    openProfilePage(): void {
        cy.visit('https://www.ibm.com/ibmweb/myibm/us-en/profile')
    }

    changeDisplayName(name?: string) {
        cy.get('button[aria-label="Edit display name"]').click()
        cy.get('#pf-displayName').clear()
        if (name) {
            cy.get('#pf-displayName').type(name)
        }
        cy.get('button[aria-label="Update"]').click()
    }

    verifyDisplayNameChanged(name: string) {
        cy.contains('.bx--row', 'Display name').within(() => {
            cy.get('.bx--col-lg-12').should('have.text', name)
        })
    }

    acceptCookies() {
        cy.get('#truste-consent-button').click()
    }
}