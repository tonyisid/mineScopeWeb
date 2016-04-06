import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  token: null,
  locale: 'en',
  user: null,
  error: null,
  message: null,
}

const actionHandlers = {
  [constants.LOGGED_IN]: (_, action) => ({
    token: action.token,
    user: action.user
  }),
  [constants.LOG_OUT]: () => ({ token: null }),
  [constants.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload }),

  [constants.CURRENT_USER] :  (state, action) => ({
    user : action.payload
  }),
  [constants.NO_CURRENT_USER] :  (state, action) => ({
    user : null
  }),
  [constants.SHOW_ERROR]: (state, action) => {
    const { payload, source } = action
    return Object.assign({}, state, {
      // TODO: ideally we want to map API error response codes
      // with some user-friendly messages.
      error: {
        source,
        message: payload.errorMessage,
        statusCode: payload.statusCode || payload.code,
        body: payload.body || (payload instanceof Error ?
          (payload.toString() + '\n' + payload.stack) : payload)
      }
    })
  },
  [constants.HIDE_ERROR]: state => ({ ...state, ...{ error: null } }),
  [constants.SHOW_INFO]: (state, action) => {
    const { payload, source } = action
    return Object.assign({}, state, {
      message: payload
    })
  },
  [constants.HIDE_INFO]: state => ({ ...state, ...{ message: null } }),
}

export default createReducer(initialState, actionHandlers)
