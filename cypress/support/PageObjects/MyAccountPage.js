class MyAccountPage {

    userFN() {
        return cy.get('.subtext')
    }

    header() {
        return cy.get('.maintext')
    }

}

export default MyAccountPage;