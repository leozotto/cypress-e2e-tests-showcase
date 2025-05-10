describe('Logout', () => {
  it('logs out and returns to login page', () => {
    cy.login()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test="login-button"]').should('be.visible')
  })
})
