/// <reference types="cypress" />

import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

describe('IBM Account Login', () => {

  const homePage = new HomePage()
  const loginPage = new LoginPage()

  it('1. Login from IBM homepage is available', () => {
    homePage.openHomepage()
    homePage.openProfileMenu()
    homePage.clickLogin()
  })

  it('2. Login to IBMid account works', () => {
    loginPage.openLoginPage()
    loginPage.provideCredentials(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    loginPage.selectAuthenticator2FAMethod()
    loginPage.provideAuthenticatorCode(Cypress.env('SECRET'))
    loginPage.verifySuccessfulLogin()
  })

})
