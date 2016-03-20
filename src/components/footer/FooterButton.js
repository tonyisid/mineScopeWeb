import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import { Button } from '../common'
import { Glyphicon } from 'react-bootstrap'
@Radium
export default class FooterButton extends React.Component {
  static propTypes = {
    value : React.PropTypes.string,
    onChange : React.PropTypes.func,
    style : React.PropTypes.any,
    kind : React.PropTypes.string
  }
  render () {
    const styles = {
      mainContent : {
        position : 'fixed',
        bottom: '14px',
        right: '14px',
      },
      addButtonWrap : {
        textAlign: 'center'
      },
      addButton : {
        fontSize: '14px',
        width: '36px',
        height: '36px',
        color: '#d9d9d9',
        background: '#FFF',
        border: '1px solid #d9d9d9',
        borderRadius: '18px',
      }
    }
    return (
      <div style={ styles.mainContent }>
        <div style={ styles.addButtonWrap }>
          <Button style={ styles.addButton} >
            <Glyphicon glyph='plus' />
          </Button>
        </div>
        <div style={ styles.addButtonWrap }>
          <Button style={ styles.addButton} >
            <Glyphicon glyph='plus' />
          </Button>
        </div>
      </div>
    )
  }
}
