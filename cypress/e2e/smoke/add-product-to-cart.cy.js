describe('TC-009 - Smoke - Add Product to Cart', () => {

  it('User should be able to add a product to the cart successfully', () => {

    // login
    cy.login()

    // validate inventory page
    cy.url().should('include', 'inventory')

    // add first product to cart
    cy.get('[data-test^="add-to-cart"]').first().click()

    // validate cart badge updated
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

    // open cart
    cy.get('.shopping_cart_link').click()

    // validate item present in cart
    cy.get('.cart_item').should('have.length', 1)

  })

})