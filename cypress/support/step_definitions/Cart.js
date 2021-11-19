import CartPage from '../PageObjects/CartPage'
import LoginPage from '../PageObjects/LoginPage'
import MyAccountPage from '../PageObjects/MyAccountPage';

const {
    Before,
    Given,
    Then,
    When,
    And
} = require("cypress-cucumber-preprocessor/steps");

const login = new LoginPage(),
    myAcc = new MyAccountPage(),
    cart = new CartPage;

    And('navigate to MEN section',() => {
        cart.navigateToProductsSection()
    })

    And('click on Fragrance sets and choose item',() => {
        cart.chooseProduct()
    })

    When('click on cart button',() => {
        cart.addItemToCart()
            
    })

    Then('added item in shopping cart is displayed',() => {
        cart.getCartLabelText()
            .should('be.visible')
            .should('have.text',' Shopping Cart')
        cart.veryfyItemInCart()
            .should('be.visible')
            .should('have.text','CK0013')    
    })

    And ('add product in shopping cart', () =>{
        cart.navigateToProductsSection()
        cart.chooseProduct()
        cart.addItemToCart()
    })


    And ('navigate to shopping cart',() => {
        cart.navigateToCart()
    })


	And ('item is added in shopping cart',() => {
        cart.veryfyItemInCart()
            .should('be.visible')
            .should('have.text','CK0013')
    })


	When ('click on Remove button',() => {
        cart.removeItemFromCart()
    })

	Then ('shopping cart is empty',() => {
        cart.getCartLabelText()
            .should('be.visible')
            .should('have.text',' Shopping Cart')
        cart.veryfyTextInEmptyCart()
            .should('include.text','Your shopping cart is empty!')
    })

    When('click on currency drop-down and choose Euro',() => {
        cart.chooseEuroCurrencyFromDropDown()
    })

    Then('all prices are in Euro',() => {
        cart.verifyEuroPrice()
    })