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
        display: 'inline-block',
        position : 'relative',
        width : '236px',
        // border : '1px solid #ddd',
        borderRadius : '6px',
        margin : '14px 7px 0px 7px',
        backgroundColor : '#FFF',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.22)',
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
        width : '100%',
        borderRadius: '6px 6px 0 0',
        margin : 0
      },
      uploadMask : {
        position : 'absolute',
        top : 0,
      },
      title : {
        padding: '5px',
        borderTop: '1px solid #ddd',
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
            <p>{ this.props.product.title }</p>
            <span style={ styles.timeFormat }>
              { this.props.product.createdTime &&
                this.props.product.createdTime.substr(0,10) }
            </span>
          </div>
        </div>
    )
  }
}
