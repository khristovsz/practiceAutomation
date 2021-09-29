class RegisterPage {

populateUserName(user){
    cy.get('#AccountFrm_firstname').type(user)
}


}


export default RegisterPage;