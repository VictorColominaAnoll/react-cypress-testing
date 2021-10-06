describe('Home page should', () => {
  it('Show hello message', () => {
    cy.visit("/")
    cy.findByText(/Hola que tal/i)
  })
})

describe('Do you want potatoes?', () => {
  it('Should be potatoes', () => {
    cy.visit("/")

    cy.findByText("PATATA").click();

    cy.url().should('include', '/potatoes')
  })
})

describe("Let's write some inputs", () => {
  it('write some text', () => {
    cy.visit("/")

    cy.get('#name').type('ORUUUUU');
    cy.get('#surname').type('MAITO');

  })
})