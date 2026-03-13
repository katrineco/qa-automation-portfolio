describe('TC-013 - Multiple Products Cart Integrity', () => {

  it('Cart should correctly reflect multiple added products', () => {

    cy.login()

    // add first product
    cy.get('[data-test^="add-to-cart"]').eq(0).click()

    // add second product
    cy.get('[data-test^="add-to-cart"]').eq(1).click()

    // validate cart badge
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '2')

    // open cart
    cy.get('.shopping_cart_link').click()

    // validate both items present
    cy.get('.cart_item')
      .should('have.length', 2)

  })

})