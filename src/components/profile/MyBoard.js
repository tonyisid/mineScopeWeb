/*eslint-disable max-len*/
import React from 'react'
import Board from './Board'
import Masonry from 'react-masonry-component'


export default class MyBoard extends React.Component {
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
      return (<Board key={ board._id } board={ board } />)
    })
    return (
      <div>
        <Masonry style={ styles.container }
        className={'my-gallery-class'} // default ''
              elementType={'ul'}>
          { renderBoards }
        </Masonry>
      </div>
    )
  }
}
