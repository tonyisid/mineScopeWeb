import React from 'react'
import { Input, Button } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as boardActions from '../../actions/board'

export default class ObjectEditor extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
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
    this.props.actions.grapLink(this.state.link)
  }
  handleLinkInput (e) {
    this.setState({
      link: e.target.value
    })
  }
  render () {
    const styles = {
      container : {
        position: 'fixed',
        top: '80px',
        width: '400px',
        left: '50%',
        marginLeft: '-200px',
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
        </div>
        { renderGrapedObject }
      </div>
    )
  }
}
