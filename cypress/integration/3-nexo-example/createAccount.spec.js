import HomePage from '../../support/PageObjects/HomePage'
import RegisterPage from '../../support/PageObjects/RegisterPage'

const home = new HomePage();
const register = new RegisterPage();


describe('create account', () => {
    
    // const uuid = () => Cypress._.random(0, 1e6)
    //     const id = uuid()
        

    let id = home.getRandomNumber();
    const testname = `testname_nexo${id}@mailinator.com`

    beforeEach(() => {
cy.visit('https://automationteststore.com//',)
    })
    
    it('register',() => {
        // cy.get('#customer_menu_top > li > a').click()
        home.goToRegister();

        cy.get('#accountFrm > fieldset > .btn').click()
        // cy.get('#AccountFrm_firstname').type('Jeki')
        register.populateUserName('Jeki')

        cy.get('#AccountFrm_lastname').type('Jeki')
        cy.get('#AccountFrm_email').type(testname)
        cy.get('#AccountFrm_telephone').type('0885564565')
        cy.get('#AccountFrm_fax').type('223475698')
        cy.get('#AccountFrm_company').should('be.visible').type('Kolega OOD')
        cy.get('#AccountFrm_address_1').should('be.visible').type('Address 1')
        cy.get('#AccountFrm_address_2').should('be.visible').type('Address 2')
        cy.get('#AccountFrm_city').should('be.visible').type('Moscow')
        cy.get('#AccountFrm_postcode').should('be.visible').type('121')
        cy.get('#AccountFrm_country_id').should('be.visible').select('Russia')
        cy.get('#AccountFrm_zone_id').should('be.visible').select('Moscow')
        cy.get('#AccountFrm_loginname').should('be.visible').type(`Jekata${id}`)
        cy.get('#AccountFrm_password').should('be.visible').type('pass123')
        cy.get('#AccountFrm_confirm').should('be.visible').type('pass123')
        cy.get('#AccountFrm_newsletter0').check()
        cy.get('#AccountFrm_agree').check()
        cy.get('.col-md-2 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Congratulations! Your new account has been successfully created!')

    })
})