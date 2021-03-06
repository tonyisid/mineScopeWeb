import React from 'react'
import Link from './Link'
import defaultUser from '../../../assets/images/default_user.png'
import UserPane from '../header/UserPane'
import { Button } from '../common'
import { connect } from 'react-redux'
import * as viewsActions from '../../actions/views'
import * as applicationActions from '../../actions/application'
import { bindActionCreators } from 'redux'

@connect(state => ({
  application: state.application,
  views : state.views
}), dispatch => ({
  viewsActions : bindActionCreators(viewsActions, dispatch),
  applicationActions : bindActionCreators(applicationActions, dispatch)
}))
export default class UserBar extends React.Component {
  static propTypes = {
    application : React.PropTypes.object,
    applicationActions : React.PropTypes.object,
    viewsActions : React.PropTypes.object
  }
  componentDidMount () {
    const application = this.props.application
    const applicationActions = this.props.applicationActions
    if (application.token) {
      applicationActions.getCurrentUser(application.token)
    }
  }
  handleLogout (e) {
    e.preventDefault()
    this.props.applicationActions.logout()
  }
  handleCreate (e) {
    e.preventDefault()
    this.props.viewsActions.showEditPane()
  }
  handleUserPane (e) {
    e.preventDefault()
    this.props.viewsActions.showUserPane()
  }
  handleSiginPane (e) {
    e.preventDefault()
    this.props.viewsActions.showSigninPane()
  }
  render () {
    const styles = {
      container : {
        position: 'relative',
        padding : '7px',
        width : '200px',
        height : '34px'
      },
      image : {
        float : 'left',
        display : 'block',
        height : '30px',
        width : '30px',
        margin : '1px',
        borderRadius : '15px',
        outline : 'none'
      },
      leftAvatar : {
        float : 'left',
        width : '158px',
        margin: 1,
        border: 'none',
        borderRadius : '6px 0 0 6px',
        padding: 0,
        lineHeight: '30px'
      },
      user : {
        height : '32px',
        marginLeft : '0px',
        marginRight : '38px',
        //lineHeight : '36px',
        border : '1px solid #d4d4d4',
        borderRadius : '6px 0 0 6px',
        fontSize : '11px',
        color : '#343434'
      },
      rightButton : {
        margin : 0,
        float : 'right',
        width : '40px',
        height : '34px',
        color : '#777',
        fontSize : '12px',
        paddingTop : '0px',
        lineHeight : '34px',
        textAlign : 'center',
        borderRadius : '0 6px 6px 0',
      },
      border : {
        marginTop : '5px',
        marginBottom : '10px',
        marginRight : '10px',
        borderLeft : '1px solid #DDD'
      }
    }
    const { user } = this.props.application
    const userButton = user ? (
      <Link style={ styles.leftAvatar } to='/profile' >
        <span>{ user.name }</span>
        <img style={ styles.image } src = { user.avatar || defaultUser } />
      </Link>
    ) : (
      <Button style={ styles.leftAvatar } onClick={ ::this.handleSiginPane } >
        <span>点击登录</span>
        <img style={ styles.image } src = { defaultUser } />
      </Button>
    )
    return (
      <div style={ styles.container }>
        { userButton }
        <Button style={ styles.rightButton } onClick={ ::this.handleUserPane }>
          添加
        </Button>
        <div style={ styles.user }>
        </div>
        <UserPane />
      </div>
    )
  }
}
