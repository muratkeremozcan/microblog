import Register from './Register'

describe('Register', () => {
  it('should', () => {
    cy.mount(<Register registerUser={cy.stub().as('registerUser')} />)

    const name = 'John Doe'
    const email = 'email@example.com'
    const password = '#1Password'

    cy.nValidFormFields(3)
    cy.getByCy('register').click()
    cy.nInValidFormFields(3)

    cy.getByCy('name').type(name)
    cy.getByCy('email').type(email)
    cy.getByCy('password').type(password)
    cy.getByCy('register').click()

    cy.get('@registerUser').should('have.been.calledWith', {
      name,
      email,
      password,
    })
    cy.nValidFormFields(3)
  })
})
