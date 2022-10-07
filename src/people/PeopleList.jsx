import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled'

export default function PeopleList({people, follow, unfollow}) {
  const handleUnfollow = user => unfollow(user.id)
  const handleFollow = user => follow(user.id)

  return (
    <List data-cy="people-list">
      {people.map(user => (
        <ListItem key={user.id} data-cy={`user-${user.id}`}>
          <ListItemAvatar data-cy="avatar">
            <Avatar alt={user.name}>{user.name.charAt(0)}</Avatar>
          </ListItemAvatar>

          <ListItemText primary={user.name} />

          <ListItemSecondaryAction>
            <IconButton
              data-cy={`unfollow-${user.name}`}
              aria-label="unfollow"
              onClick={handleUnfollow}
            >
              <PersonAddDisabledIcon />
            </IconButton>

            <IconButton
              data-cy={`follow-${user.name}`}
              aria-label="follow"
              onClick={handleFollow}
            >
              <PersonAddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
