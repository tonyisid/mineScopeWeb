import React from 'react'
import Link from './Link'
import { Glyphicon } from 'react-bootstrap'
import defaultUser from '../../../assets/images/default_user.png'

export default class UserAvatar extends React.Component {
  static propTypes = {
    application : React.PropTypes.object,
    applicationActions : React.PropTypes.object
  }
  componentDidMount () {
    window.onbeforeunload = () => {
      this.props.applicationActions.logout()
    }
  }
  handleLogout (e) {
    e.preventDefault()
    this.props.applicationActions.logout()
  }
  render () {
    const styles = {
      container : {
        padding : '7px',
        width : '200px',
        height : '34px'
      },
      image : {
        display : 'block',
        height : '34px',
        width : '34px',
        // marginTop : '5px',
        borderRadius : '17px',
        outline : 'none'
      },
      leftAvatar : {
        float : 'left'
      },
      user : {
        height : '32px',
        marginLeft : '17px',
        marginRight : '40px',
        //lineHeight : '36px',
        border : '1px solid #d4d4d4',
        fontSize : '11px',
        color : '#343434'
      },
      logout : {
        float : 'right',
        width : '40px',
        height : '34px',
        color : '#777',
        fontSize : '12px',
        paddingTop : '0px',
        lineHeight : '34px',
        textAlign : 'center',
        borderRadius : '0 6px 6px 0',
        backgroundColor : '#d4d4d4',
      },
      border : {
        marginTop : '5px',
        marginBottom : '10px',
        marginRight : '10px',
        borderLeft : '1px solid #DDD'
      }
    }
    const { user } = this.props.application
    return (
      <div style={ styles.container }>
        <Link style={ styles.leftAvatar } to="/account">
          <img style={ styles.image } src = { user.avatar || defaultUser } />
        </Link>
        <span style={ styles.logout }>
          <a  href="#" onClick={ ::this.handleLogout }>
            登出
          </a>
        </span>
        <div style={ styles.user }>
          <Link to="/account">
            { user.name || user.email || user.mobile }
          </Link><br/>
        </div>
      </div>
    )
  }
}
