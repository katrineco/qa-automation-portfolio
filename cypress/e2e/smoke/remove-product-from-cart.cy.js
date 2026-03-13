describe('TC-010 - Smoke - Remove Product From Cart', () => {

  it('User should be able to remove a product from the cart', () => {

    cy.login()

    // add product first
    cy.get('[data-test^="add-to-cart"]').first().click()

    // open cart
    cy.get('.shopping_cart_link').click()

    // validate item present
    cy.get('.cart_item').should('have.length', 1)

    // remove item
    cy.get('[data-test^="remove"]').click()

    // validate cart empty
    cy.get('.cart_item').should('not.exist')
    cy.get('.shopping_cart_badge').should('not.exist')

  })

})