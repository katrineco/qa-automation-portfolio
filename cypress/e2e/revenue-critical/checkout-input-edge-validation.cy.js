describe('TC-014 - Checkout Input Edge Case Validation', () => {

  it('System should handle long and special-character input without breaking checkout flow', () => {

    cy.login()

    // add product
    cy.get('[data-test^="add-to-cart"]').first().click()

    // open cart
    cy.get('.shopping_cart_link').click()

    // start checkout
    cy.get('[data-test="checkout"]').click()

    // enter edge-case data
    cy.get('[data-test="firstName"]').type('VeryLongName_With-Special$$$Characters1234567890')
    cy.get('[data-test="lastName"]').type('TestUser')
    cy.get('[data-test="postalCode"]').type('999999999')

    // continue checkout
    cy.get('[data-test="continue"]').click()

    // validate progression to next step
    cy.url().should('include', 'checkout-step-two')
    cy.get('.summary_info').should('be.visible')

  })

})