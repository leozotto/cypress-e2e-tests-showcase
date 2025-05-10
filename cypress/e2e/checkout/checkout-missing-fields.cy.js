describe('Checkout Validation', () => {
  it('shows error when required fields are empty', () => {
    cy.login()
    cy.goToCart()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  })
})
