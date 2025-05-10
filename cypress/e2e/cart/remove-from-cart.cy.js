describe('Remove from Cart', () => {
  it('removes item from the cart', () => {
    cy.login()
    cy.addItemToCart('sauce-labs-backpack')
    cy.removeItemFromCart('sauce-labs-backpack')
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})