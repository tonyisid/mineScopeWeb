/*eslint-disable max-len*/
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import Thumbnail from '../common/Thumbnail'
import FooterButton from '../footer/FooterButton'
import EditPane from '../editor/EditPane'

@connect(state => ({
  product: state.product
}), dispatch => ({
  actions: bindActionCreators(productActions, dispatch)
}))
export default class Home extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object,
    product : React.PropTypes.object,
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
    const { product } = this.props
    const renderProducts = product.products && product.products.map(product => {
      return (<Thumbnail key={ product._id } product={ product } />)
    })
    return (
      <div>
        <div>
          { renderProducts }
        </div>
        <FooterButton />
        <EditPane />
      </div>
    )
  }
}
