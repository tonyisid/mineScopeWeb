import React from 'react'
import { UserBar, Button } from './'
import { connect } from 'react-redux'
import * as applicationActions from '../../actions/application'
import { bindActionCreators } from 'redux'
import { Glyphicon } from 'react-bootstrap'
import EditPane from '../editor/EditPane'
import SigninPane from '../signin/Signin'

@connect(state => ({
  application: state.application,
}), dispatch => ({
  applicationActions : bindActionCreators(applicationActions, dispatch)
}))
export default class Header extends React.Component {
  static propTypes = {
    accountActions : React.PropTypes.object,
    workActions : React.PropTypes.object,
    application : React.PropTypes.object,
    myWorks : React.PropTypes.object,
    applicationActions : React.PropTypes.object
  }
  componentDidMount () {
  }
  render () {
    const styles = {
      container : {
        position : 'fixed',
        top: '0px',
        left: '0px',
        width : '100%',
        height : '54px',
        transition: 'opacity 1s ease',
        backgroundColor: '#fff',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.22)',
        zIndex : 100
      },
      headerWrap : {
        display: 'block',
        overflow: 'visible',
        paddingTop: '3px',
        margin: '0 auto',
        width: '1250px'
      },
      right : {
        float : 'right',
        width : '180px',
        height : '34px',
        display: 'block',
        backgroundColor: '#FFF',
      },
      controlBar : {
        marginTop : '10px'
      },
      setting : {
        display : 'flex',
        justifyContent : 'flex-end'
      },
      hidden : {
        display : 'none'
      },
      navHeader : {
        float : 'none',
        width : 'auto',
        marginRight : '200px',
        // background : '#445F80',
        width : 'auto',
        padding : '7px'
      },
      langSwitcher : {
        textAlign : 'right',
        marginTop : '15px',
        marginBottom : '15px',
        borderRight : '1px solid #DDD'
      },
      langSelect : {
        width : '80px',
        marginTop : '10px',
        marginRight : '5px',
        border: 'none',
        outline : 'none',
        fontSize : '12px',
        background : 'transparent',
      },
      logoStyle : {
        flex : 0,
        borderRadius : '50%',
        width : '40px',
        height : '40px'
      },
      slogon : {
        letterSpacing : '3px',
        color : '#F0F0F0'
      },
      search : {
        float: 'none',
        display : 'block',
        marginTop : '0px',
        marginLeft : '40px',
        marginRight : '40px',
        width : 'auto',
        height : '32px',
        border: '1px solid #d4d4d4',
        fontSize : '13px',
        backgroundSize : '15px 15px',
        backgroundPosition : '8px 5px',
        backgroundColor : '#e9e9e9',
        color : '#EEE'
      },
      searchLeft : {
        width: '42px',
        height: '34px',
        float: 'left',
        padding: '4px 9px',
        margin : '0 0',
        // background: 'linear-gradient(#fff, #f5f5f5)',
        backgroundColor: '#FFF',
        borderRadius: '6px 0 0 6px',
        border : '1px solid #CCC'
      },
      searchRight : {
        width: '48px',
        height: '34px',
        float: 'right',
        padding: '10px',
        margin : '0 ',
        // background: 'linear-gradient(#fff, #f5f5f5)',
        backgroundColor: '#FFF',
        borderRadius: '0 6px 6px 0',
        border : '1px solid #CCC'
      },
      searchInput : {
        background: 'transparent',
        border : 0,
        boxShadow : 'none',
        height: '32px',
        width: '90%',
        padding: '0px 10px 0px 10px',
        outline : 'none',
        color: '#a7a7a7'
      }
    }
    return (
      <div style={ styles.container }>
        <div style={ styles.headerWrap }>
          <div style={ styles.right }>
            <UserBar { ...this.props } />
          </div>
          <div style={ styles.navHeader }>
            <Button style={ styles.searchLeft }>
              <em/>
            </Button>
            <Button style={ styles.searchRight }>
              <em/>
            </Button>
            <div style= { styles.search }>
              <input style={ styles.searchInput } placeholder="搜索" />
            </div>
          </div>
        </div>
        <EditPane />
        <SigninPane />
      </div>
      )
  }
}
