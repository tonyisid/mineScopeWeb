import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  editPane : false,
  userPane : false,
  signinPane : false,
}

const actionHandlers = {
  [constants.SHOW_EDIT_PANE]: (state, action) => ({
    editPane: true,
    userPane: false
  }),
  [constants.HIDE_EDIT_PANE]: (state, action) => ({
    editPane: false
  }),
  [constants.SHOW_USER_PANE]: (state, action) => ({
    userPane: true,
    editPane: false
  }),
  [constants.HIDE_USER_PANE]: (state, action) => ({
    userPane: false
  }),
  [constants.SHOW_SIGNIN_PANE]: (state, action) => ({
    signinPane: true
  }),
  [constants.HIDE_SIGNIN_PANE]: (state, action) => ({
    signinPane: false
  }),
}

export default createReducer(initialState, actionHandlers)
