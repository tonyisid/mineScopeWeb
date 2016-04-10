import React from 'react'
import MyBoard from './MyBoard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'

@connect(state => ({
  board: state.board
}), dispatch => ({
  actions: bindActionCreators(boardActions, dispatch)
}))
export default class Profile extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
    board : React.PropTypes.object,
  }
  componentDidMount () {
  }
  render () {
    return (
      <MyBoard { ...this.props } />
    )
  }
}
