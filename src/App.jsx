import Container from '@material-ui/core/Container'
import Login from './user/Login'

function App() {
  return (
    <Container>
      <Login login={console.log} />
    </Container>
  )
}

export default App
