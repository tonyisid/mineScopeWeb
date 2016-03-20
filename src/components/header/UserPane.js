import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import { Button } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'

@connect(state => ({
  products: state.products,
  views: state.views
}), dispatch => ({
  productActions: bindActionCreators(productActions, dispatch)
}))

@Radium
export default class UserPane extends React.Component {
  static propTypes = {
    views : React.PropTypes.object
  }
  render () {
    const styles = {
      mainWraper : {
        display : 'block',
      },
      mainContent: {
        position: 'absolute',
        right: '0px',
        top: '50px',
        width: '331px',
        height: '451px',
        background: '#FFF',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#d9d9d9',
        borderRadius : '6px',
        padding : 0,
        margin :'5px',
        fontSize : '14px',
        color : '#333',
        outline : 'none',
        boxShadow: ' 0 1px 5px 0 rgba(0,0,0,0.25)'
      },
      caret: {
        position: 'absolute',
        width: '28px',
        height: '28px',
      },
      navHeader: {
        width: '100%',
        height: '42px',
        borderBottom: '1px solid #d9d9d9'
      },
      buttonsWrap: {
        margin: '12px auto',
        textAlign: 'center'
      },
      navButton : {
        margin:0,
        width: '86px',
        height: '29px',
      },
      navButtonLeft: {
        borderRadius: '6px 0 0 6px',
        borderRight: 'none'
      },
      navButtonCenter: {
        borderRadius: '0',
      },
      navButtonRight: {
        borderRadius: '0 6px 6px 0',
        borderLeft: 'none'
      },
      error : {
        borderColor : 'red',
        boxShadow : '-1px 1px 1px 1px #DDD'
      }
    }
    if (!this.props.views.userPane) return null
    return (
      <div style={ styles.mainContainer }>
        <div style={ styles.caret }></div>
        <div style={ styles.mainContent }>
          <div style={ styles.navHeader }>
            <div style={ styles.buttonsWrap }>
              <Button style={ [styles.navButton,styles.navButtonLeft] } >
                推荐
              </Button>
              <Button style={ [styles.navButton,styles.navButtonCenter] } >
                @我
              </Button>
              <Button style={ [styles.navButton,styles.navButtonRight] } >
                消息
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
