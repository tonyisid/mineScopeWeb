import React from 'react'
import Radium from 'radium'
import UploadThumbnail from './UploadThumbnail'
@Radium
export default class Thumbnail extends React.Component {
  static propTypes = {
    product : React.PropTypes.object,
    actions : React.PropTypes.any,
    selected : React.PropTypes.bool,
    editMode : React.PropTypes.bool
  }
  constructor (props) {
    super(props)
  }
  handleClick (e) {
    e.preventDefault()
  }
  handleChecked (e) {
  }
  render () {
    const styles = {
      main : {
        position : 'relative',
        width : '140px',
        height : '140px',
        border : '1px solid #445F80',
        borderRadius : '4px',
        margin : '20px',
        backgroundColor : '#FFF',
        ':hover' : {
          boxShadow: '-10px 0px 20px #DDD',
        }
      },
      selected : {
        border : '3px solid #445F80',
        boxShadow: '-10px 0px 20px #DDD',
      },
      checkbox : {
        position : 'absolute',
        margin : '5px',
      },
      imageStyles : {
        width : '100px',
        height : '100px',
        margin : '20px'
      },
      uploadMask : {
        position : 'absolute',
        top : 0,
      },
      title : {
        position : 'absolute',
        textAlign : 'left',
        fontSize : '11px',
        color : '#333'
      },
      timeFormat : {
        fontSize : '10px',
        color : '#BBB'
      }
    }
    const containerStyles = this.props.selected ?
      [ styles.main,styles.selected ] : [ styles.main ]
    const product = this.props
    return (
        <div style={ containerStyles }
          onClick={ this.handleClick } >
          <img style={ styles.imageStyles }
            src={ this.props.product ? this.props.product.cover : ''} />
          <div style={ styles.title }>
            { this.props.product.name }<br/>
            <span style={ styles.timeFormat }>
              { this.props.product.createdTime &&
                this.props.product.createdTime.substr(0,10) }
            </span>
          </div>
        </div>
    )
  }
}
