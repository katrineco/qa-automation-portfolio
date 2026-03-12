describe('TC-003 - Cart Price Integrity', () => {

  it('Cart price should match product listing price', () => {

     // Visit application and login
    cy.login()

    const productSelector = '[data-test="add-to-cart-sauce-labs-backpack"]'

    // Capture price from product card
    cy.get(productSelector)
      .closest('.inventory_item')
      .find('.inventory_item_price')
      .invoke('text')
      .then((priceText) => {

        const unitPrice = parseFloat(priceText.replace('$', ''))

        // Add product to cart
        cy.get(productSelector).click()

        // Open cart
        cy.get('.shopping_cart_link').click()

        // Capture price inside cart
        cy.get('.inventory_item_price')
          .invoke('text')
          .then((cartPriceText) => {

            const cartPrice = parseFloat(cartPriceText.replace('$', ''))

            expect(cartPrice).to.eq(unitPrice)

          })

      })

  })

})