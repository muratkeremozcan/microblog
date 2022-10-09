import Login from './user/Login'
import Menu from './Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NewPost from './posts/NewPost'
import Timeline from './posts/Timeline'
import People from './people/People'
import Profile from './people/Profile'
import Register from './user/Register'

const posts = [
  {
    title: 'How to make complex problems easier',
    content:
      'Our natural way of dealing with complexity is to break it into smaller pieces and then put everything back together.',
    userId: 1,
    userName: 'Christian',
    id: 1,
  },
  {
    title: 'Engage all Your Senses When Learning',
    content:
      'Different people like to learn in different ways. Some prefer reading, others watching training videos, others learn by doing or by hearing information.',
    userId: 2,
    userName: 'Adam',
    id: 2,
  },
  {
    title: 'Things on null and undefined that you should know',
    content:
      "Null and undefined are the so-called nullish values. You may know the falsy values which are false, 0, NaN, empty string '', undefined, and null. So null and undefined are also falsy values, but they are the only nullish values.",
    userId: 1,
    userName: 'Christian',
    id: 3,
  },
]

const people = [
  {
    email: 'christian@email.com',
    password: '$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS',
    name: 'Christian',
    id: 1,
  },
  {
    email: 'adam@email.com',
    password: '$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS',
    name: 'Adam',
    id: 2,
  },
  {
    email: 'mark@email.com',
    password: '$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS',
    name: 'Mark',
    id: 3,
  },
]

const user = people[0]
const followingList = [people[1]]
const followerList = [people[2]]

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12} lg={2}>
            <Menu />
          </Grid>

          <Grid item md={6} xs={12} lg={4}>
            <Routes>
              <Route path="/" exact element={<Timeline posts={posts} />} />
              <Route path="/people" element={<People people={people} />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    user={user}
                    followingList={followingList}
                    followerList={followerList}
                  />
                }
              />
              <Route path="/newpost" element={<NewPost />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
