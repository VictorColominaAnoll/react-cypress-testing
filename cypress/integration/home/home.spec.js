describe('Home page should', () => {
  it('Show hello message', () => {
    cy.visit("/")
    cy.findByText(/hola/i)
  })
})