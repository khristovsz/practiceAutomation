class CartPage{

    navigateToProductsSection() {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click()
    }

    chooseProduct() {
        cy.get(':nth-child(2) > .mt10 > a').click()
    }

    addItemToCart() {
        cy.get(':nth-child(2) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('.cart').click()
    }

    removeItemFromCart() {
        //cy.get('.cart').click()
        cy.get(':nth-child(7) > .btn > .fa').click()
    }

    getCartLabelText() {
        return cy.get('.maintext')
    }

    veryfyItemInCart() {
        return cy.get('tbody > :nth-child(2) > :nth-child(3)')
    }

    veryfyTextInEmptyCart() {
        return cy.get('.contentpanel')
    }

    navigateToCart() {
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
    }

    chooseEuroCurrencyFromDropDown (){
        cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle').click()
        // .select('EUR')
        // .should('have.href', 'https://automationteststore.com/index.php?rt=account/login&currency=EUR')
        cy.contains('€ Euro').click()
    }
    verifyEuroPrice (){
        return cy.get(':nth-child(3) > .thumbnail > .pricetag > .price > .oneprice')
        .contains('€')
    }
}

export default CartPage;