import api from './api'
import actions from './actions'

// Asynchronous Actions
//  event -> ACTION -(async-communication-with-back-end)-(dispatch)-(middleware)-> REDUCER
// asynchronous action creators return a function that accepts a dispatch argument
// they do some async work with the back-end, and then call dispatch with a sync action creator
// For each action that requires a network request (meaning you’re dealing with an async action),
// you’ll need at least one synchronous action creator to indicate where you are in the request/response lifecycle.
// async actions need return a function instead of an object.
// Within that function, you can make your API call
// and dispatch a sync action when a response is available.

function registerUser(user) {
  return function (dispatch) {
    return api
      .registerUser(user)
      .then(actions.SetToken)
      .then(dispatch)
      .then(() => fetchUser(user.email))
      .then(dispatch)
      .then(redirectToTimeline)
  }
}

function login(credentials) {
  return function (dispatch) {
    return api
      .login(credentials)
      .then(actions.SetToken)
      .then(dispatch)
      .then(() => fetchUser(credentials.email))
      .then(dispatch)
      .then(redirectToTimeline)
  }
}

function logout() {
  return function (dispatch) {
    Promise.resolve().then(actions.Logout).then(dispatch).then(redirectToLogin)
  }
}

// The store has just a few methods:
// * getState() returns the current state tree of the application.
// * dispatch(action) can change state by dispatching actions.
// * subscribe(listener) allows listening for changes.

function fetchUser(email) {
  return function (dispatch, getState) {
    const state = getState()
    const {token} = state.user

    return api.fetchUser(email, token).then(actions.SetUser).then(dispatch)
  }
}

function redirectToTimeline() {
  window.location.replace('/')
}

function redirectToLogin() {
  window.location.replace('/login')
}

// TODO: get rid of export default nonsense
export default {
  registerUser,
  login,
  logout,
}
