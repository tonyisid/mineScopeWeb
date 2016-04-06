/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css'

import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import configureStore from './utils/configure-store'
import * as storage from './persistence/storage'
import * as components from './components'
import * as constants from './constants'


const {
  Application,
  Home,
  Board,
  Login,
} = components

const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: null
  }
}

export const store = configureStore(initialState)

function getRootChildren (props) {
  const rootChildren = [
    renderRoutes()
  ]

  if (__DEVTOOLS__) {
    const DevTools = require('./components/DevTools')
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}

function renderRoutes () {
  return (
    <ReduxRouter key='router'>
      <Route component={Application}>
        <Route path="/" component={ Home } />
        <Route path="/board/:boardID" component={ Board } />
        <Route path="login" component={Login} />
        <Route path="logout" onEnter={logout} />
      </Route>
    </ReduxRouter>
  )
}

function requireAuth (nextState, replaceState) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
}

function logout (nextState, replaceState) {
  store.dispatch({ type: constants.LOG_OUT })
  replaceState({}, '/login')
}

@connect(({ application }) => ({ application }))
export default class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}
