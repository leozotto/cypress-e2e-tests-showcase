describe('Product Sorting', () => {
  it('sorts items by price low to high', () => {
    cy.login()
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').then($prices => {
      const prices = [...$prices].map(p => parseFloat(p.innerText.replace('$', '')))
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sorted)
    })
  })
})
