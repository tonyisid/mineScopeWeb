import React from 'react'
import { Input, Button } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'


export default class ObjectEditor extends React.Component {
  static propTypes = {
    boardActions : React.PropTypes.object,
    productActions : React.PropTypes.object,
    board : React.PropTypes.object,
  }
  constructor (props) {
    super(props)
    this.state = {
      link : ''
    }
  }
  componentDidMount () {
  }
  handleQuery (e) {
    e.preventDefault()
    this.props.boardActions.grapLink(this.state.link)
  }
  handleLinkInput (e) {
    this.setState({
      link: e.target.value
    })
  }
  handleAdd (e) {
    e.preventDefault()
    const { board,boardActions } = this.props
    if (board.grapedProduct)
      boardActions.addProductToBoard(this.state.link, board.currentBoard)
  }
  render () {
    const styles = {
      container : {
        position: 'fixed',
        top: '80px',
        width: '500px',
        left: '50%',
        marginLeft: '-250px',
        padding: '20px',
        backgroundColor : '#FFF',
        borderRadius : '6px',
        borderColor : '#d9d9d9',
        boxShadow: ' 0 1px 5px 0 rgba(0,0,0,0.25)',
      }
    }
    const grapedProduct = this.props.board.grapedProduct
    const renderGrapedObject = grapedProduct ? (
      <div>
        <img src = { grapedProduct.image } />
      </div>
    ) : null
    return (
      <div style={ styles.container } >
        <div>
          <h3>链接</h3>
          <Input value={ this.state.link }
            onChange={ ::this.handleLinkInput } />
          <Button onClick={ ::this.handleQuery }>
            查询
          </Button>
          <Button onClick={ ::this.handleAdd }>
            保存
          </Button>
        </div>
        { renderGrapedObject }
      </div>
    )
  }
}
