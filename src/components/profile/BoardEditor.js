import React from 'react'
import ProductThumbnail from '../product/ProductThumbnail'
import { Button } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'
import ObjectEditor from './ObjectEditor'

@connect(state => ({
  board: state.board
}), dispatch => ({
  actions: bindActionCreators(boardActions, dispatch)
}))
export default class BoardEditor extends React.Component {
  static propTypes = {
    board : React.PropTypes.object,
    actions : React.PropTypes.any,
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
      this.props.actions.setCurrentBoard(currentBoard)
    else
      this.props.actions.getBoardByID(this.props.params.boardID)
  }
  render () {
    const { board, actions } = this.props
    if ( !board.currentBoard ) return null
    const { products, videos, musics, articles } = board.currentBoard
    const styles = {
      container : {
        display : 'flex'
      },
      products : {

      }
    }
    const renderProducts = products && products.map(product => {
      return (
        <ProductThumbnail product={product} actions = { actions } />
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
