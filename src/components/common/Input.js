import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'

@Radium
export default class PinInput extends React.Component {
  static propTypes = {
    value : React.PropTypes.string,
    onChange : React.PropTypes.func,
    style : React.PropTypes.any,
    kind : React.PropTypes.string
  }
  getValue () {
    return this.refs.input.value
  }
  render () {
    const styles = {
      default : {
        display : 'block',
        width : '90%',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#BBB',
        borderRadius : '3px',
        padding : '5px',
        margin :'5px',
        fontSize : '14px',
        color : '#333',
        outline : 'none'
      },
      error : {
        borderColor : 'red',
        boxShadow : '-1px 1px 1px 1px #DDD'
      }
    }
    let allProps = { ...this.props }
    delete allProps.style
    return (
      <input ref='input'
        style={ [styles.default,this.props.style, this.props.kind? styles[this.props.kind] : null ] }
        className='form-control'
        { ...allProps }
        />
    )
  }
}
