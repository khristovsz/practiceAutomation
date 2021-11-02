class LoginPage {

    verifyLogin() {
        this.userName().should('be.visible')
        this.password().should('be.visible')
        this.submitBtn().should('be.visible')
    }

    userName() {
        return cy.get('#loginFrm_loginname')
    }

    password() {
        return cy.get('#loginFrm_password')
    }

    submitBtn() {
        return cy.get('#loginFrm > fieldset > .btn')
    }
}

export default LoginPage;
