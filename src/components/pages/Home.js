/*eslint-disable max-len*/
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'
import Thumbnail from '../common/Thumbnail'
import FooterButton from '../footer/FooterButton'
import EditPane from '../editor/EditPane'
import Masonry from 'react-masonry-component'

@connect(state => ({
  board: state.board
}), dispatch => ({
  actions: bindActionCreators(boardActions, dispatch)
}))
export default class Home extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
    board : React.PropTypes.object,
  }
  componentDidMount () {
    this.props.actions.getBoards()
  }
  render () {
    const styles ={
      container : {
        padding : '20px'
      },
    }
    const { board } = this.props
    const renderBoards = board.boards && board.boards.map(board => {
      return (<Thumbnail key={ board._id } board={ board } />)
    })
    return (
      <div>
        <Masonry style={ styles.container }
        className={'my-gallery-class'} // default ''
              elementType={'ul'}>
          { renderBoards }
        </Masonry>
        <FooterButton />
      </div>
    )
  }
}
