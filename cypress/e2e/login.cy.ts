/// <reference types="cypress" />

import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

describe('IBM Account Login', () => {

  const homePage = new HomePage()
  const loginPage = new LoginPage()

  it('1. Login from IBM homepage is available', () => {
    homePage.navigateToLogin()
  })

  it('2. Login to IBMid account works', () => {
    loginPage.visit()

    loginPage.login(
      Cypress.env('USERNAME'),
      Cypress.env('PASSWORD')
    )

    loginPage.verifyTwoFactorPage()
    loginPage.selectEmailVerification()
    loginPage.verifyEmailCodeField()
  })

})
