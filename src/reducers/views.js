import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  editPane : false,
  userPane : false,
}

const actionHandlers = {
  [constants.SHOW_EDIT_PANE]: (state, action) => ({
    editPane: true,
    userPane: false
  }),
  [constants.SHOW_USER_PANE]: (state, action) => ({
    userPane: true,
    editPane: false
  }),
}

export default createReducer(initialState, actionHandlers)
