import Login from './Login'

describe('Login', () => {
  it('should notify form errors, fill fields and login', () => {
    cy.mount(<Login login={cy.stub().as('login')} />)
    const email = 'email@example.com'
    const password = '#1Password'

    cy.nValidFormFields(2)
    cy.getByCy('login').click()
    cy.nInValidFormFields(2)

    cy.getByCy('email').type(email)
    cy.getByCy('password').type(password)
    cy.getByCy('login').click()
    cy.get('@login').should('have.been.calledWith', {
      email,
      password,
    })

    cy.get('[aria-invalid="false"]').should('have.length', 2)
    cy.nValidFormFields(2)
  })
})
