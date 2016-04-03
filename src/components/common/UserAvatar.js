import React from 'react'
import defaultUser from '../../../assets/images/default_user.png'
import Button from './Button'
import * as viewsActions from '../../actions/views'
import Radium from 'radium'

@Radium
export default class UserBar extends React.Component {
  static propTypes = {
    user : React.PropTypes.object,
  }
  componentDidMount () {
  }

  render () {
    const styles = {
      avatar : {
        border : 'none',
        padding : '0px',
        ':hover' : {
          backgroundColor : 'transparent',
        }
      },
      image : {
        display : 'block',
        height : '30px',
        width : '30px',
        margin : '1px',
        borderRadius : '15px',
        outline : 'none'
      }
    }
    const { user } = this.props
    return (
      <Button style={ styles.avatar } >
        <img style={ styles.image } src = { user.avatar || defaultUser } />
      </Button>
    )
  }
}
