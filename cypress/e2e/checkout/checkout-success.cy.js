describe('Successful Checkout', () => {
  it('completes the checkout process', () => {
    cy.login()
    cy.addItemToCart('sauce-labs-backpack')
    cy.goToCart()
    cy.checkout('John', 'Doe', '12345')
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })
})
