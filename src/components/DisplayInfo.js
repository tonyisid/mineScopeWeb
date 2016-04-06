import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

class DisplayInfo extends React.Component {

  static propTypes = {
    hideInfo: PropTypes.func.isRequired,
    message: PropTypes.string,
  }
  constructor (props) {
    super(props)
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
    if ( nextProps.message )
      setTimeout( () => {
        this.props.hideInfo()
      }.bind(this),3000)
  }
  render () {
    //console.log('render error');
    const { props: { hideInfo, message } } = this
    const styles = {
      container : {
        position : 'fixed',
        top : message ? '0px' : '-100px',
        left : '50%',
        marginLeft : '-100px',
        width : '240px',
        minHeight : '40px',
        padding : '10px',
        transition : '0.5s',
        backgroundColor : '#445F80',
        border : '1px solid #305070',
        borderRadius : '6px',
        opacity : '0.7',
        color : '#FFF',
        fontWeight: 700,
        zIndex : 9999,
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.22)'
      },
      info : {
        textAlign : 'center'
      },
      closeButton : {
        float : 'right',
        background : 'transparent',
        color : '#FFF',
        border : 'none'
      }
    }
    return (
      <div style={ styles.container }>
        <div>
          <button
            onClick={ hideInfo }
            type="button"
            style={ styles.closeButton }>
            <span aria-hidden="true">&times;</span>
          </button>
          <div style={ styles.info }>
          { message }
          </div>
        </div>
      </div>
    )
  }
}

//console.log('before connect DisplayError');
//console.log('Class:'+JSON.stringify(DisplayError));

export default connect(
  ({ application, myWorks }) => ({
    message: application.message,
  }),
  applicationActions
)(DisplayInfo)
