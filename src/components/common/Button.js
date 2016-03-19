import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'

@Radium
export default class PinButton extends React.Component {
  static propTypes = {
    children : React.PropTypes.any,
    className : React.PropTypes.any,
    style : React.PropTypes.any,
    onClick : React.PropTypes.func
  }

  render () {
    const styles = {
      default : {
        backgroundColor : '#FF6F46',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#C5321F',
        outline : 'none',
        margin : '5px',
        color : '#FFF',
        fontSize : '13px',
        fontWeight : 700
        /*
        fontSize : '14px',
        height : '32px',
        backgroundColor : '#FF6F46',
        borderRadius : '3px',
        color : '#FFF',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#C5321F',

        paddingTop : '2px',
        paddingBottom : '2px',
        paddingLeft : '10px',
        paddingRight : '10px',
        textAlign : 'center',
        margin : '5px',
        cursor : 'pointer',
        outline : 'none',
        letterSpacing : '1px',
        boxShadow : 0,
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        /*
        ':hover': {
          backgroundColor: '#FF5F2F'
        },
        ':focus': {
          backgroundColor: '#E9592B'
        },
        ':active': {
          backgroundColor: '#E9592B',
          transform: 'translateY(1px)',
        }
        */
      },
      red: {
        backgroundColor: '#d90000',

        ':hover': {
          backgroundColor: '#FF0000'
        },
        ':focus': {
          backgroundColor: '#FF0000'
        },
        ':active': {
          backgroundColor: '#990000'
        }
      }
    }
    return (
      <button
        className={ classnames('btn', this.props.className || 'btn-default') }
        style={ [styles.default, this.props.style] }
        bsStyle="info" onClick={ this.props.onClick }>
        { this.props.children }
      </button>
    )
  }
}
