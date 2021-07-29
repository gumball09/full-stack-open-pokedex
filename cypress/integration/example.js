/* eslint-disable no-undef */
describe('Pokedex app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })

  it('Front app can be opened', function () {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('Navigate from main page to particular pokemon', function () {
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})
