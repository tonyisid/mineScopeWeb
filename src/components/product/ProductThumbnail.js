import React from 'react'
import Radium from 'radium'
import { UserAvatar, Button } from '../common'

@Radium
export default class ProductThumbnail extends React.Component {
  static propTypes = {
    board : React.PropTypes.object,
    product : React.PropTypes.object,
    productActions : React.PropTypes.any,
    boardActions : React.PropTypes.any,
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
  handleRemove (e) {
    e.preventDefault()
    this.props.boardActions
      .removeProductFromBoad(this.props.product,this.props.board)
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
      },
      actionBar: {
        position : 'absolute'
      }
    }
    const containerStyles = this.props.selected ?
      [ styles.main,styles.selected ] : [ styles.main ]
    const { product } = this.props
    return (
        <div style={ containerStyles }
          onClick={ this.handleClick } >
          <div style={ styles.actionBar }>
            <Button onClick={ ::this.handleRemove }>
              删除
            </Button>
          </div>
          <div style={ styles.imageWrap }>
            <img style={ styles.imageStyles }
              src={ this.props.product ? this.props.product.cover : ''} />
          </div>
          <div style={ styles.title }>
            <p>{ this.props.product.title }</p>
            { this.props.product.subtitle?
              this.props.product.subtitle : null }
          </div>
          <div>
            价格：{ this.props.product.price }
            <a href={ this.props.product.originLink } target='_blank'>查看商品</a>
          </div>
          <div style={ styles.likePane }>
            { product.likeCount }
          </div>
          <div style={ styles.owner }>
            <span>{ product.owner.name }</span>
            <UserAvatar user={ product.owner } />
          </div>
        </div>
    )
  }
}
