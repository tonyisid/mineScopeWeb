import React from 'react'
import ProductThumbnail from '../product/ProductThumbnail'
import { Button } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'
import * as productActions from '../../actions/product'
import ObjectEditor from './ObjectEditor'

@connect(state => ({
  board: state.board
}), dispatch => ({
  boardActions: bindActionCreators(boardActions, dispatch),
  productActions: bindActionCreators(productActions, dispatch)
}))
export default class BoardEditor extends React.Component {
  static propTypes = {
    board : React.PropTypes.object,
    boardActions : React.PropTypes.any,
    productActions : React.PropTypes.any,
    selected : React.PropTypes.bool,
    editMode : React.PropTypes.bool,
    params : React.PropTypes.object
  }
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    this.setCurrentBoard()
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.params.boardID !== nextProps.params.boardID ) {
      this.setCurrentBoard()
    }
  }
  setCurrentBoard () {
    const { board } = this.props
    const currentBoard = board.boards.find(
      board => board._id === this.props.params.boardID)
    if (currentBoard)
      this.props.boardActions.setCurrentBoard(currentBoard)
    else
      this.props.boardActions.getBoardByID(this.props.params.boardID)
  }
  render () {
    const { board, boardActions } = this.props
    if ( !board.currentBoard ) return null
    const { products, videos, musics, articles } = board.currentBoard
    const styles = {
      container : {
        // display : 'flex'
      },
      products : {

      }
    }
    const renderProducts = products && products.map(product => {
      return (
        <ProductThumbnail
          key = { product._id }
          product= { product }
          board = { board.currentBoard }
          boardActions = { boardActions }
          productActions = { productActions } />
      )
    })
    return (
      <div style = { styles.container} >
        <ObjectEditor { ...this.props } />
        <div>
          <h3>{ board.currentBoard.title }</h3>
          <img width='200' src= { board.currentBoard.cover } />
          <Button>增加</Button>
        </div>
        <div styles = { styles.products }>
          { renderProducts }
        </div>
        <div styles = { styles.musics }>
        </div>
        <div styles = { styles.videos }>
        </div>
        <div styles = { styles.articles }>
        </div>
      </div>
    )
  }
}
