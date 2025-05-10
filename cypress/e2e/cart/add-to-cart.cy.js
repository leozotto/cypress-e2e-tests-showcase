describe('Add to Cart', () => {
  it('adds item to the cart', () => {
    cy.login()
    cy.addItemToCart('sauce-labs-backpack')
    cy.get('.shopping_cart_badge').should('contain', '1')
  })
})