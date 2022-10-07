import PeopleSearch from './PeopleSearch'

describe('PeopleSearch', () => {
  it('should search by search term', () => {
    cy.mount(<PeopleSearch onSearch={cy.stub().as('onSearch')} />)

    const searchTerm = 'John Doe'
    cy.findByPlaceholderText('Search People').type(searchTerm)
    cy.getByCy('search').click()
    cy.get('@onSearch').should('have.been.calledWith', searchTerm)
  })
})
