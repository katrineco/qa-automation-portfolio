describe('TC-012 - Session Persistence After Refresh', () => {

  it('User session and cart state should persist after page refresh', () => {

    cy.login()

    // add product
    cy.get('[data-test^="add-to-cart"]').first().click()

    // validate cart badge
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

    // refresh page
    cy.reload()

    // validate still logged in
    cy.url().should('include', 'inventory')

    // validate cart state persisted
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

  })

})