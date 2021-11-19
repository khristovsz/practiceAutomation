import LoginPage from '../PageObjects/LoginPage'
import MyAccountPage from '../PageObjects/MyAccountPage';

const {
    Before,
    Given,
    Then,
    When
} = require("cypress-cucumber-preprocessor/steps");

const login = new LoginPage(),
    myAcc = new MyAccountPage();

Given('Open Login page successfully', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
})

When('Populate username: {string} and password: {string}', (username, pass) => {
    login.userName().type(username)
    login.password().type(pass)
    login.submitBtn().click()
})

Then('verify Login screen', () => {
    login.verifyLogin()
})

Then('The login page is displayed', () => {
    myAcc.header()
        .should('be.visible')
        .should('have.text', ' My Account')
    myAcc.userFN().should('have.text', 'Jeki')
})