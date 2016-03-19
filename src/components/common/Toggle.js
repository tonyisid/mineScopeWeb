import React, { PropTypes } from 'react'
import Radium from 'radium'

@Radium
export default class PinToggle extends React.Component {
  static propTypes ={
    value : PropTypes.number,
    onChange : PropTypes.func
  }
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.refs.checkbox.click()
  }
  handleChange (e) {
    if (e.target.checked)
      this.props.onChange(1)
    else
      this.props.onChange(0)
  }
  render () {
    const styles = {
      container : {
        width : '90px',
        height : '30px',
        display : 'flex',
        cursor : 'pointer',
        margin : '5px',
      },
      trueBase : {
        top : 0,
        left : 0,
        width : '40px',
        height : '30px',
        backgroundColor : '#FFF',
        borderTopLeftRadius : '1px',
        borderTopRightRadius : '0px',
        borderBottomLeftRadius : '1px',
        borderBottomRightRadius : '0px',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#DDD',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      },
      falseBase : {
        top : 0,
        right : 0,
        width : '40px',
        height : '30px',
        backgroundColor : '#EEE',
        borderTopLeftRadius : '0px',
        borderTopRightRadius : '1px',
        borderBottomLeftRadius : '0px',
        borderBottomRightRadius : '1px',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderLeftWidth : '0px',
        borderColor : '#DDD',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      },
      trueSelected : {
        backgroundColor : '#E9592B',
        borderColor : '#C5321F'
      },
      trueUnSelected : {
        backgroundColor : '#FFF'
      },
      falseSelected : {
        backgroundColor : '#EEE',
      },
      falseUnSelected :{
        backgroundColor : '#FFF'
      }

    }
    const { value } = this.props
    let yesStyle = [styles.trueBase]
    let noStyle = [styles.falseBase]
    if (value) {
      yesStyle.push(styles.trueSelected)
      noStyle.push(styles.falseUnSelected)
    } else {
      yesStyle.push(styles.trueUnSelected)
      noStyle.push(styles.falseSelected)
    }
    return (
      <div style={ [styles.container] } onClick = { this.handleClick }>
        <div ref="yesToggle" style={ yesStyle }></div>
        <div ref = "noToggle" style={ noStyle }></div>
        <input ref="checkbox"
          type="checkbox"
          style={{ display : 'none' }}
          checked={ this.props.value ? true : false }
          onChange={ ::this.handleChange } />
      </div>
    )
  }
}
