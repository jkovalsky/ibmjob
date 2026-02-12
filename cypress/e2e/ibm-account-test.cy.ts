/// <reference types="cypress" />

import { LoginPage } from '../pages/LoginPage'
import { ProfilePage } from '../pages/ProfilePage'

describe('IBM Account Login', () => {

  const loginPage = new LoginPage()
  const profilePage = new ProfilePage()

  it('1. Login to IBMid account works', () => {
    loginPage.openLoginPage()
    loginPage.typeUsername(Cypress.env('USERNAME'))
    loginPage.clickContinue()
    loginPage.typePassword(Cypress.env('PASSWORD'))
    loginPage.clickLogin()
    loginPage.selectAuthenticator2FAMethod()
    loginPage.provideAuthenticatorCode(Cypress.env('SECRET'))
    loginPage.verifySuccessfulLogin()
  })

  it('2. Login to IBMid account with wrong credentials fails', () => {
    loginPage.openLoginPage()
    loginPage.typeUsername(Cypress.env('USERNAME'))
    loginPage.clickContinue()
    loginPage.typePassword('wrong_password')
    loginPage.clickLogin()
    loginPage.verifyLoginError()
    loginPage.clickNotYou()
    loginPage.typeUsername('wrong_username')
    loginPage.clickContinue()
    loginPage.typePassword(Cypress.env('PASSWORD'))
    loginPage.clickLogin()
    loginPage.verifyLoginError()
    loginPage.clickNotYou()
    loginPage.typeUsername('wrong@username.com')
    loginPage.clickContinue()
    loginPage.typePassword('wrong_password')
    loginPage.clickLogin()
    loginPage.verifyLoginError()
  })

  it('3. Display name in IBMid account can be changed and reset', () => {
    profilePage.openProfilePage()

    loginPage.typeUsername(Cypress.env('USERNAME'))
    loginPage.clickContinue()
    loginPage.typePassword(Cypress.env('PASSWORD'))
    loginPage.clickLogin()
    loginPage.selectAuthenticator2FAMethod()
    loginPage.provideAuthenticatorCode(Cypress.env('SECRET'))

    cy.origin('https://www.ibm.com', () => {
      const { ProfilePage } = Cypress.require('../pages/ProfilePage')
      const profilePage = new ProfilePage()
      profilePage.acceptCookies()
      profilePage.changeDisplayName('Morpheus')
      profilePage.verifyDisplayNameChanged('Morpheus')
      profilePage.changeDisplayName()
    })
  })
})