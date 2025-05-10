describe('Valid Login', () => {
  it('logs in successfully', () => {
    cy.login()
    cy.url().should('include', '/inventory.html')
  })
})
