import React from 'react'
import { default as Input }from './Input'
import Radium from 'radium'

@Radium
export default class PinTagInput extends React.Component {
  static propTypes = {
    tags : React.PropTypes.array,
    value : React.PropTypes.array,
    onChange : React.PropTypes.func
  }
  handleKeyDown (e) {
    const keyCode = e.keyCode
    if (keyCode === 9 || keyCode === 13) {
      e.preventDefault()
      if (!this.refs.input.value ||
        (this.props.value && this.props.value.length >5) ) return
      let newValue
      if (this.props.value)
        newValue = [...this.props.value, { name : this.refs.input.value }]
      else
        newValue = [{ name : this.refs.input.value }]
      this.refs.input.value = ''
      this.props.onChange(newValue)
      return
    }
    if (keyCode === 8) {
      if (this.props.value &&
          this.props.value.length > 0 &&
          !this.refs.input.value) {
        e.preventDefault()
        let newValue = this.props.value.splice(0,this.props.value.length-1)
        this.props.onChange(newValue)
      }
      return
    }
  }
  render () {
    const styles = {
      container : {
        width : '90%',
        margin : '5px',
        backgroundColor: '#fff',
        border: '1px solid #AAA',
        borderRadius: '3px',
        overflow: 'hidden',
        paddingLeft : '5px',
        paddingRight : '5px',
        paddingTop : '5px',
        paddingBottom : '0px'
      },
      input : {
        background: 'transparent',
        border: 0,
        color: '#777',
        fontFamily: 'sans-serif',
        fontSize: '11px',
        fontWeight: 400,
        marginBottom: '5px',
        marginTop: '1px',
        outline: 'none',
        padding: '2px',
        width: '100px'
      },
      tag : {
        backgroundColor: '#445F80',
        borderRadius: '2px',
        border: '1px solid #445F80',
        color: '#EEE',
        display: 'inline-block',
        fontFamily: 'sans-serif',
        fontSize: '13px',
        fontWeight: 400,
        marginBottom: '4px',
        marginRight: '5px',
        padding: '2px'
      }
    }
    const renderTags = this.props.value ? this.props.value.map( (v,i) =>
      <span style = { styles.tag }
        key={ 'tagkey' + i }
        data-tagid={ v.id } >{v.name}
      </span>
    ) : null
    return (
      <div style={ [styles.container,this.props.style] } className={ this.props.className }>
        { renderTags }
        <input
          ref='input'
          placeholder = '回车创建标签'
          style={ styles.input }
          onKeyDown={ ::this.handleKeyDown }/>
      </div>
    )
  }
}
