import PeopleList from './PeopleList'
import people from '../../cypress/fixtures/people.json'

describe('PeopleList', () => {
  it('should follow and unfollow people', () => {
    cy.mount(
      <PeopleList
        people={people}
        follow={cy.stub().as('follow')}
        unfollow={cy.stub().as('unfollow')}
      />,
    )

    cy.getByCyLike('user-').should('have.length', people.length)

    cy.wrap(people).each(user => {
      cy.getByCy('avatar').contains(user.name.charAt(0))
      cy.contains(user.name)

      cy.getByCy(`follow-${user.name}`).click()
      cy.get('@follow').should('have.been.calledOnce').invoke('resetHistory')

      cy.getByCy(`unfollow-${user.name}`).click()
      cy.get('@unfollow').should('have.been.calledOnce').invoke('resetHistory')
    })
  })
})
