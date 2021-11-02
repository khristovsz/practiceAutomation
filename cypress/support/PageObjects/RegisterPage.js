class RegisterPage {

    populateUserName(userF, userL) {
        cy.get('#AccountFrm_firstname').type(userF)
        cy.get('#AccountFrm_lastname').type(userL)
    }

    populateEmail(email) {
        cy.get('#AccountFrm_email').type(email)
    }

    fillInTelephone(telNum) {
        cy.get('#AccountFrm_telephone').type(telNum)
    }

    fillInFax(faxNum) {
        cy.get('#AccountFrm_fax').type(faxNum)
    }

    fillInCompanyName(companyName) {
        cy.get('#AccountFrm_company').should('be.visible').type(companyName)
    }

    fillInCompanyAddress(companyAddress1, companyAddress2) {
        cy.get('#AccountFrm_address_1').should('be.visible').type(companyAddress1)
        cy.get('#AccountFrm_address_2').should('be.visible').type(companyAddress2)
    }

    fillInCity(cityName) {
        cy.get('#AccountFrm_city').should('be.visible').type(cityName)
    }

    fillInPostCode(pCode) {
        cy.get('#AccountFrm_postcode').should('be.visible').type(pCode)
    }

    fillInCountry(countryName) {
        cy.get('#AccountFrm_country_id').should('be.visible').select(countryName)
    }

    selectCity(city) {
        cy.get('#AccountFrm_zone_id').should('be.visible').select(city)
    }

    fillInUserId(id) {
        cy.get('#AccountFrm_loginname').should('be.visible').type(id)
    }

    fillInPass(pass) {
        cy.get('#AccountFrm_password').should('be.visible').type(pass)
    }

    confirmPass(pass) {
        cy.get('#AccountFrm_confirm').should('be.visible').type(pass)
    }

    checkNewsCheckbox() {
        cy.get('#AccountFrm_newsletter0').check()
    }

    checkAgreeCheckbox() {
        cy.get('#AccountFrm_agree').check()
    }

    submitRegistration() {
        cy.get('.col-md-2 > .btn').click()
    }

    assertRegistrationText(regText) {
        cy.get('.mb40 > :nth-child(3)').should('have.text', regText)
    }


}


export default RegisterPage;