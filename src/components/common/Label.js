import React from 'react'
import Radium from 'radium'

@Radium
export default class PinLabel extends React.Component {
  static propTypes = {
    children : React.PropTypes.any
  }
  render () {
    const styles = {
      base : {
        fontWeight : '400',
        fontSize : '14px',
        color : '#666',
        margin: '5px',
        padding : '5px',
        border : '1px solid transparent'
      }
    }
    return (
      <div className={ this.props.className } style={ [styles.base, this.props.style] }>
        { this.props.children }
      </div>
    )
  }
}
