Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('addItemToCart', (itemId) => {
  cy.get(`[data-test="add-to-cart-${itemId}"]`).click()
})

Cypress.Commands.add('removeItemFromCart', (itemId) => {
  cy.get(`[data-test="remove-${itemId}"]`).click()
})

Cypress.Commands.add('goToCart', () => {
  cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('checkout', (firstName, lastName, zip) => {
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(zip)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
})
