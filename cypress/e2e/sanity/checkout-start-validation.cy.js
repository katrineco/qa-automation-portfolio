describe('TC-011 - Sanity - Checkout Entry Validation', () => {

  it('User should be able to start checkout from the cart', () => {

    cy.login()

    // add product to cart
    cy.get('[data-test^="add-to-cart"]').first().click()

    // open cart
    cy.get('.shopping_cart_link').click()

    // start checkout
    cy.get('[data-test="checkout"]').click()

    // validate navigation to checkout step one
    cy.url().should('include', 'checkout-step-one')
    cy.get('[data-test="firstName"]').should('be.visible')

  })

})