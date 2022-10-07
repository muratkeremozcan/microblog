import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import PeopleList from './PeopleList'

export default function Profile({user, followingList, followerList}) {
  return (
    <React.Fragment data-cy="profile">
      <Avatar alt={user.name}>{user.name.charAt(0)}</Avatar>

      <Typography variant="h5" gutterBottom>
        {user.name}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {user.email}
      </Typography>

      <Typography variant="h6">{followingList.length} Following</Typography>
      <PeopleList people={followingList} />

      <Typography variant="h6">{followerList.length} Followers</Typography>
      <PeopleList people={followerList} />
    </React.Fragment>
  )
}
