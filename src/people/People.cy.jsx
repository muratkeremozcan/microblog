import People from './People'
import people from '../../cypress/fixtures/people.json'

describe('People', () => {
  it('should render correctly', () => {
    cy.mount(<People people={people} />)

    cy.getByCy('people-search').should('be.visible')
    cy.getByCy('people-list').should('be.visible')
  })
})
