import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function Timeline({posts}) {
  return (
    <List data-cy="timeline">
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <ListItem data-cy={`post-${post.id}`} alignItems="flex-start">
            <ListItemAvatar data-cy="avatar">
              <Avatar alt={post.userName}>{post.userName.charAt(0)}</Avatar>
            </ListItemAvatar>

            <ListItemText primary={post.title} secondary={post.content} />

            <ListItemSecondaryAction data-cy="delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  )
}
