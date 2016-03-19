import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
export default class PinLink extends React.Component {
  static propTypes = {
    children : React.PropTypes.any,
    to : React.PropTypes.string
  }
  render () {
    const styles = {
      default : {
        fontWeight : 400,
        padding : '5px',
        color : '#555',
        textDecoration : 'none'
      }
    }
    return (
      <Link style ={ this.props.style || styles.default } to={ this.props.to }>
        { this.props.children }
      </Link>
    )
  }
}
