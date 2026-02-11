# IBMJob

A suite of automated tests that verify the IBM user account management functionality.

## Project Overview

The project contains several functional tests written in TypeScript using the Cypress framework, which perform the following actions step by step:

### 1. Login from IBM homepage is available
- Open the IBM homepage
- Click on the profile icon
- Find and click the Log in option in the menu

### 2. Login to IBMid account works
- open the IBMid account login page
- enter your username and password one by one
- verify that the two-factor authentication request is displayed
- select verification via email
- verify that the code entry field is displayed

## Running tests

Requirements:
- Node.JS 20+

Install Cypress and run tests locally without a user interface:

```bash
npm install cypress
USERNAME=user@example.com PASSWORD=password123 npx cypress run
```

To run tests in interactive mode in a browser:

```bash
USERNAME=user@example.com PASSWORD=password123 npm run cypress:open
```
- after opening the Cypress GUI, click on E2E Testing > Start E2E Testing in Electron > login.cy.ts

## CI/CD

### Jenkins
This project includes a pipeline script (see `ci-cd/jenkins-pipeline.groovy`) that allows you to run tests within Jenkins jobs. To use it, you only need to set the BASE_DIR variable correctly. It must contain the path to the directory where this project was cloned.

### GitHub
This project also contains a workflow configuration for GitHub Actions (see `.github/workflows/cypress.yml`) that runs tests on every Push operation or Pull Request creation.