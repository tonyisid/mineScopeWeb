import React from 'react'
import Radium from 'radium'

@Radium
export default class ImageInput extends React.Component {
  static propTypes = {
    value : React.PropTypes.string,
    onChange : React.PropTypes.func
  }
  handleClick (e) {
    e.preventDefault()
    this.refs.fileInput.click()
  }
  handleFileChange (e) {
    e.preventDefault()
    this.props.onChange(e.target.value)
  }
  render () {
    const styles = {
      image : {
        display : 'block',
        height : '70px',
        width : '70px',
        borderRadius : '35px',
        margin :'5px',
        outline : 'none'
      },
      hidden : {
        display : 'none'
      }
    }
    return (
      <div>
      <img style={ styles.image } src={ this.props.value } onClick={ ::this.handleClick } />
        <input
          ref='fileInput'
          style={ [styles.hidden] }
          type="file"
          onChange ={ ::this.handleFileChange } />
      </div>
    )
  }
}
