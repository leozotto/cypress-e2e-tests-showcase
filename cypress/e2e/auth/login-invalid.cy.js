describe('Invalid Login', () => {
  it('shows error on wrong password', () => {
    cy.login('standard_user', 'wrong_password')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})
