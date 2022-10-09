import React from 'react'
import PeopleSearch from './PeopleSearch'
import PeopleList from './PeopleList'

export default function People({people}) {
  const handleSearch = () => console.log('handleSearch')
  const handleFollow = () => console.log('handleFollow')
  const handleUnfollow = () => console.log('handleUnfollow')

  return (
    <>
      <PeopleSearch onSearch={handleSearch} />

      <PeopleList
        people={people}
        follow={handleFollow}
        unfollow={handleUnfollow}
      />
    </>
  )
}
