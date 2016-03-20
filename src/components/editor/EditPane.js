import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import { Button,Label,Input } from '../common'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import * as viewsActions from '../../actions/views'

@connect(state => ({
  products: state.products,
  views: state.views
}), dispatch => ({
  productActions: bindActionCreators(productActions, dispatch),
  viewsActions: bindActionCreators(viewsActions, dispatch)
}))
@Radium
export default class EditPane extends React.Component {
  static propTypes = {
    productActions : React.PropTypes.object,
    viewsActions : React.PropTypes.object,
    views : React.PropTypes.object
  }
  constructor () {
    super()
    this.state = {
      title : '',
      url : '',
      description: ''
    }
  }
  handleFormChange (e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleFormSubmit (e) {
    e.preventDefault()
    this.props.productActions.addProduct(this.state)
  }
  handleCancel (e) {
    e.preventDefault()
    this.props.viewsActions.hideEditPane()
  }
  render () {
    const styles = {
      mainWraper : {
        display : 'block',
      },
      maskPane : {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#EEE',
        opacity: 0.7,
        zIndex: 666,
      },
      mainContent: {
        position: 'absolute',
        left: '50%',
        top: '50px',
        width: '600px',
        // height: '451px',
        background: '#FFF',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#d9d9d9',
        borderRadius : '6px',
        padding : 0,
        marginLeft :'-300px',
        fontSize : '14px',
        color : '#333',
        outline : 'none',
        boxShadow: ' 0 1px 5px 0 rgba(0,0,0,0.25)',
        zIndex: 667,
      },
      actionBar: {
        background: '#EEE',
        borderRadius: '0 0 6px 6px',
        pading: '10px',
      },
      navHeader: {
        width: '100%',
        height: '42px',
        borderBottom: '1px solid #d9d9d9',
        paddingLeft: '20px'
      },
      buttonsWrap: {
        background: 'transparent',
        textAlign: 'right',
        padding: '10px'
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
      },
      listPane: {
        margin: 0,
        padding: 0,
      },
      listItem: {
        display: 'block',
        minHeight: '60px',
        paddingLeft: '20px',
        borderBottom: '1px solid #d9d9d9'
      },
      label: {
        float: 'left',
        margin: 0
      },
      inputWrap : {
        marginTop: '20px',
        marginLeft: '80px'
      },
      actionButton : {
        padding: '5px 20px 5px 20px',
        borderRadius: '6px'
      }
    }
    if (!this.props.views.editPane)
      return null
    return (
      <div style={ styles.mainContainer }>
        <div style={ styles.maskPane } onClick={ ::this.handleCancel }>
        </div>
        <div style={ styles.mainContent }>
          <form onChange={ ::this.handleFormChange }
            onSubmit={ ::this.handleFormSubmit } >
            <div style={ styles.navHeader }>
              <h2>新建</h2>
            </div>
            <ul style={ styles.listPane }>
              <li style={ styles.listItem }>
                <Label style={ styles.label }>标题</Label>
                <div style={ styles.inputWrap }>
                  <Input name='title' value={ this.state.title } />
                </div>
              </li>
              <li style={ styles.listItem }>
                <Label style={ styles.label }>描述</Label>
                <div style={ styles.inputWrap }>
                  <Input name='description' value={ this.state.description } />
                </div>
              </li>
              <li style={ styles.listItem }>
                <Label style={ styles.label }>目录</Label>
                <div style={ styles.inputWrap }>
                  <Input name='category' value={ this.state.category }/>
                </div>
              </li>
              <li style={ styles.listItem }>
                <Label style={ styles.label }>Web 地址</Label>
                <div style={ styles.inputWrap }>
                  <Input name='url' value={ this.state.url }/>
                </div>
              </li>
            </ul>
            <div style={ styles.actionBar }>
              <div style={ styles.buttonsWrap } >
                <Button style={ styles.actionButton }
                  onClick={ ::this.handleCancel }>
                  取消
                </Button>
                <Button style={ styles.actionButton }>
                  创建
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
