import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Container from '@material-ui/core/Container'
import {useFormState} from '../shared/useFormState'

export default function Login({login}) {
  const [state, setInputValue, validate] = useFormState({
    email: {
      value: '',
      required: true,
    },
    password: {
      value: '',
      required: true,
    },
  })

  function submitForm() {
    if (validate()) {
      const user = {
        email: state.email.value,
        password: state.password.value,
      }
      login(user)
    }
  }
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [errors, setErrors] = useState({})

  // const handleEmailChange = e => setEmail(e.target.value)
  // const handlePasswordChange = e => setPassword(e.target.value)

  // function validate() {
  //   let emailErrors = false
  //   let passwordErrors = false
  //   let isValid = true

  //   if (email === '') {
  //     emailErrors = true
  //     isValid = false
  //   }

  //   if (password === '') {
  //     passwordErrors = true
  //     isValid = false
  //   }

  //   return {
  //     isValid,
  //     errors: {
  //       email: emailErrors,
  //       password: passwordErrors,
  //     },
  //   }
  // }

  // function submitForm() {
  //   const {isValid, errors} = validate()

  //   if (isValid) {
  //     const credentials = {email, password}
  //     login(credentials)
  //   } else {
  //     setErrors(errors)
  //   }
  // }

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h4" variant="h4">
          Login
        </Typography>
        <form>
          <FormGroup>
            <FormControl margin="normal">
              <TextField
                data-cy="email"
                variant="outlined"
                label="Email"
                name="email"
                value={state.email.value}
                onChange={setInputValue}
                error={!!state.email.error}
                helperText={state.email.error}
                required
              />
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl margin="normal">
              <TextField
                data-cy="password"
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={state.password.value}
                onChange={setInputValue}
                error={!!state.password.error}
                helperText={state.password.error}
              />
            </FormControl>
          </FormGroup>

          <Button
            data-cy="login"
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Login
          </Button>

          <Box>
            <Link to="/register">Don't have an account?</Link>
          </Box>
        </form>
      </div>
    </Container>
  )
}
