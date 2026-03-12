describe('TC-004 - Application Availability Validation', () => {

  it('should return status 200 when requesting the application root endpoint', () => {

    cy.request({
      method: 'GET',
      url: 'https://www.saucedemo.com'
    }).then((response) => {

      // Validate server response
      expect(response.status).to.eq(200)

      // Validate response time (basic performance check)
      expect(response.duration).to.be.lessThan(2000)

    })

  })

})