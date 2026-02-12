/// <reference types="cypress" />

import { LoginPage } from '../pages/LoginPage'

describe('IBM Account Login', () => {

  const loginPage = new LoginPage()

  it('1. Login to IBMid account works', () => {
    loginPage.openLoginPage()
    loginPage.provideCredentials(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    loginPage.selectAuthenticator2FAMethod()
    loginPage.provideAuthenticatorCode(Cypress.env('SECRET'))
    loginPage.verifySuccessfulLogin()
  })

  it('2. Login to IBMid account with wrong credentials fails', () => {
    loginPage.openLoginPage()
    loginPage.provideCredentials(Cypress.env('USERNAME'), 'wrong_password')
    loginPage.verifyLoginError()
    loginPage.clickNotYou()
    loginPage.provideCredentials('wrong@username.com', Cypress.env('PASSWORD'))
    loginPage.verifyLoginError()
    loginPage.clickNotYou()
    loginPage.provideCredentials('wrong@username.com', 'wrong_password')
    loginPage.verifyLoginError()
  })

})
