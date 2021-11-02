class HomePage {


    goToRegister() {
        cy.get('#customer_menu_top > li > a').click()

    }

    getRandomNumber() {
        const uuid = () => Cypress._.random(0, 1e6)
        return uuid()

    }

}

export default HomePage;