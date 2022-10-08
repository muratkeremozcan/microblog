import Profile from './Profile'
import people from '../../cypress/fixtures/people.json'

describe('Profile', () => {
  it("should render the user's following and follower lists", () => {
    const user = people[0]
    const followingList = [people[1]]
    const followerList = [people[2]]

    cy.mount(
      <Profile
        user={people[0]}
        followingList={followingList}
        followerList={followerList}
      />,
    )
    cy.contains(user.name)
    cy.contains(user.email)

    cy.contains(`${followingList.length} Following`)
    cy.getByCy('people-list')
      .should('be.visible')
      .contains(followingList[0].name)

    cy.contains(`${followerList.length} Followers`)
    cy.getByCy('people-list')
      .should('be.visible')
      .contains(followerList[0].name)
  })
})
