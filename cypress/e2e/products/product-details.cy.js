describe('Product Details', () => {
  it('displays correct details of a product', () => {
    cy.login()
    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('.inventory_details_price').should('contain', '$9.99')
  })
})
