/*eslint-disable max-len*/
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'
import * as productActions from '../../actions/product'
import Thumbnail from '../common/Thumbnail'
import Player from '../player'

@connect(state => ({
  board: state.board
}), dispatch => ({
  boardActions: bindActionCreators(boardActions, dispatch),
  productActions : bindActionCreators(productActions, dispatch),
}))
export default class Home extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
    board : React.PropTypes.object,
    params : React.PropTypes.object,
  }
  componentDidMount () {
    const boardID = this.props.params.boardID
    const board = this.props.board
    const currentBoard = board.boards.find( board => board._id === boardID)
    // if ( !boardID || !currentBoard )
    //   this.context.history.pushState({},'/')
    // this.props.actions.getBoardDetail(boardID)
    //TOTO:需要判断是否能从当前的boards数组里找到currentBoard
  }
  render () {
    const styles ={
      container : {
        padding : '20px',
        minWidth: '950px',
      },
      boardWrapper : {
        margin : '0px auto',
        border : '1px solid #ccc',
        borderRadius : '6px 6px 0 0',
        height : '100px'
      },
      playView: {
        marginRight: '320px',
        // height: '100%',
        background: '#FFF',
      },
      collectionView: {
        float: 'right',
        height: '100%',
        background: '#CCC',
        width: '320px'
      }
    }
    const { board } = this.props
    const boardID = this.props.params.boardID
    const currentBoard = board.boards.find( board => board._id === boardID)
    return (
      <div style={ styles.container }>
        <div style={ styles.boardWrapper } >
          <div style={ styles.collectionView }>
          </div>
          <div style={ styles.playView }>
            <Player />
          </div>
        </div>
        <div style={ styles.detail } >
          <div style={ styles.comments }>
          </div>
          <div style={ styles.relate }>
          </div>
        </div>
      </div>
    )
  }
}
