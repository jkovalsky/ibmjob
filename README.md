# IBMJob

A suite of automated tests that verify the IBM user account management functionality.

## Project Overview

The project contains several functional tests written in TypeScript using the Cypress framework, which perform the following actions step by step:

### 1. Login to IBMid account works
- open the IBMid login page
- enter valid username and password
- verify that the two-factor authentication request is displayed
- select verification via TOTP authentication method
- verify that the code entry field is displayed

### 2. Login to IBMid account with invalid credentials fails
- open the IBMid login page
- enter a valid username and an incorrect password
- verify that a login error message is displayed
- repeat the same attempt with an incorrect username, and then with both credentials incorrect

### 3. Display name in IBMid account can be changed and reset
- open the IBM profile page
- login using valid credentials and TOTP authentication method
- accept the cookies
- change the display name to "Morpheus" and verify that the change is saved
- clear the display name

## Running tests

Requirements:
- Node.JS 20+

Install Cypress and run tests locally without a user interface:

```bash
npm install cypress otplib @otplib/preset-browser
USERNAME=user@example.com PASSWORD=password123 SECRET=1234567890 npx cypress run
```

To run tests in interactive mode in a browser:

```bash
USERNAME=user@example.com PASSWORD=password123 SECRET=1234567890 npm run cypress:open
```
- after opening the Cypress GUI, click on **E2E Testing** > **Start E2E Testing in Electron** > **ibm-account-test.cy.ts**

## CI/CD

### Jenkins
This project includes a pipeline script (see [ci-cd/jenkins-pipeline.groovy](ci-cd/jenkins-pipeline.groovy)) that allows you to run tests within Jenkins jobs. To use it, you need to set the BASE_DIR variable correctly. It must contain the path to the directory where this project was cloned. Also, be sure to provide login credentials and TOTP secret in `ibm-login` and `ibm-login-secret` Jenkins secrets.

### GitHub
This project also contains a workflow configuration for GitHub Actions (see [.github/workflows/cypress.yml](.github/workflows/cypress.yml)) that runs tests on every Push operation or Pull Request creation. Also, be sure to provide login credentials and TOTP secret in GitHub secrets.