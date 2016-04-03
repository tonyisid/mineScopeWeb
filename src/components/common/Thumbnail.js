import React from 'react'
import Radium from 'radium'
import UploadThumbnail from './UploadThumbnail'
import UserAvatar from './UserAvatar'

@Radium
export default class Thumbnail extends React.Component {
  static propTypes = {
    board : React.PropTypes.object,
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
        minHeight: '150px',
        borderRadius: '6px 6px 0 0',
        margin : 0,
        border: 'none'
      },
      uploadMask : {
        position : 'absolute',
        top : 0,
      },
      title : {
        padding: '5px 10px',
        // borderTop: '1px solid #ddd',
        textAlign : 'left',
        fontSize : '11px',
        color : '#333'
      },
      timeFormat : {
        fontSize : '10px',
        color : '#BBB'
      },
      likePane : {
        // borderTop: '1px solid #ddd',
        color: '#DDD',
        fontSize: '11px',
        padding: '5px 10px',
      },
      owner: {
        borderTop: '1px solid #ddd',
      },
      likeMembers: {
        borderTop: '1px solid #ddd',
      }
    }
    const containerStyles = this.props.selected ?
      [ styles.main,styles.selected ] : [ styles.main ]
    const { board } = this.props
    const renderMembers = board.likeMembers.map(member =>{
      return (<UserAvatar key={ member._id } user={ member } />)
    })
    return (
        <div style={ containerStyles }
          onClick={ this.handleClick } >
          <div style={ styles.imageWrap }>
            <img style={ styles.imageStyles }
              src={ this.props.board ? this.props.board.cover : ''} />
          </div>
          <div style={ styles.title }>
            <p>{ this.props.board.title }</p>
            <span style={ styles.timeFormat }>
              { board.createdTime &&
                board.createdTime.substr(0,10) }
            </span>
          </div>
          <div style={ styles.likePane }>
            { board.likeCount }
          </div>
          <div style={ styles.owner }>
            <span>{ board.owner.name }</span>
            <UserAvatar user={ board.owner } />
          </div>
          <div style={ styles.likeMembers }>
            { renderMembers }
          </div>
        </div>
    )
  }
}
