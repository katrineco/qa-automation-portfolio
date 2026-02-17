describe ('Bolovo Test', () => {

// Newsletter subscription

  it("test1", () => {

    cy.viewport(1920,1080)

    cy.visit("https://www.bolovo.com.br/")

    cy.get('body').should('be.visible')

  })
})