import {createAction} from '@reduxjs/toolkit'

// generic flow with redux:
// action: the work being done (reducer)
// reducer: how state should change (store)
// mapStateToProps: get state from store and use it as a prop (component)
// connect(mapStateToProps, {action}): link up with state (component)
// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW

const SetToken = createAction('SetToken')
const SetUser = createAction('SetUser')
const Logout = createAction('Logout')

// TODO: get rid of export default nonsense
export default {
  SetToken,
  SetUser,
  Logout,
}
