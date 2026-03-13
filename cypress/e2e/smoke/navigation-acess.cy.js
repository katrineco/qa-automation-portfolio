describe('TC-008 - Navigation Access Smoke Test', () => {

  it('User should be able to navigate between Inventory and Cart', () => {

    // login using custom command
    cy.login()

    // validate inventory page loaded
    cy.url().should('include', 'inventory')
    cy.get('.inventory_item').should('be.visible')

    // navigate to cart
    cy.get('.shopping_cart_link').click()

    // validate cart page
    cy.url().should('include', 'cart')
    cy.get('.cart_list').should('be.visible')

    // go back to shopping
    cy.get('[data-test="continue-shopping"]').click()

    // validate user returned to inventory
    cy.url().should('include', 'inventory')
    cy.get('.inventory_item').should('be.visible')

  })

})