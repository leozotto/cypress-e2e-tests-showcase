describe('Locked Out User', () => {
  it('denies access for locked user', () => {
    cy.login('locked_out_user')
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })
})
