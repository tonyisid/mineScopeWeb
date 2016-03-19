/*eslint-disable max-len*/
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import Thumbnail from '../common/Thumbnail'

@connect(state => ({
  products: state.products
}), dispatch => ({
  actions: bindActionCreators(productActions, dispatch)
}))
export default class Home extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
    products : React.PropTypes.array,
  }
  componentDidMount () {
    this.props.actions.getProducts()
  }
  render () {
    const styles ={
      container : {
        padding : '20px'
      },
    }
    const { products } = this.props
    const renderProducts = products && products.map(product => {
      return (<Thumbnail product={ product } />)
    })
    return (
      <div>
        <div className="header">
          <h1>mine scope</h1>
        </div>
        <div>
          { renderProducts }
        </div>
      </div>
    )
  }
}
