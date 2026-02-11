/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      invokeLoginFromHomepage(): Chainable<void>
      loginDirectly(): Chainable<void>
    }
    interface Env {
      USERNAME: string
      PASSWORD: string
    }

  }
}

export {}
