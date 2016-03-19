import React from 'react'

export default class PinButton extends React.Component {
  static propTypes = {
    onClick : React.PropTypes.func,
    children : React.PropTypes.element
  }
  render () {
    return (
      <div onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}
