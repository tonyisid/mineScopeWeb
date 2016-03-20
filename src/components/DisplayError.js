import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

class DisplayError extends React.Component {

  static propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.string,
    worksError : PropTypes.object
  }
  constructor (props) {
    super(props)
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
    if ( nextProps.error || nextProps.worksError )
      setTimeout( () => {
        this.props.hideError()
      }.bind(this),3000)
  }
  render () {
    //console.log('render error');
    const { props: { hideError, error, worksError } } = this
    const styles = {
      container : {
        position : 'fixed',
        top : error || worksError ? '0px' : '-100px',
        left : '50%',
        marginLeft : '-100px',
        width : '240px',
        minHeight : '40px',
        padding : '10px',
        transition : '0.5s',
        backgroundColor : '#FF6F46',
        border : '1px solid #FF6F46',
        borderRadius : '6px',
        opacity : '0.7',
        color : '#FFF',
        fontWeight: 700,
        zIndex : 9999
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
    console.log(error)
    return (
      <div style={ styles.container }>
        <div>
          <button
            onClick={ hideError }
            type="button"
            style={ styles.closeButton }>
            <span aria-hidden="true">&times;</span>
          </button>
          <div style={ styles.info }>
          { error && typeof error === 'object' ? error.message : error }
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
    error: application.error,
  }),
  applicationActions
)(DisplayError)
