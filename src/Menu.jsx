import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import {Link} from 'react-router-dom'

export default function BlogMenuList({logout}) {
  return (
    <MenuList>
      <MenuItem component={Link} to="/">
        Timeline
      </MenuItem>
      <MenuItem component={Link} to="/people">
        People
      </MenuItem>
      <MenuItem component={Link} to="/profile">
        Profile
      </MenuItem>
      <MenuItem component={Link} to="/newpost">
        NewPost
      </MenuItem>
      <MenuItem data-cy="logout" onClick={logout}>
        Logout
      </MenuItem>
    </MenuList>
  )
}
