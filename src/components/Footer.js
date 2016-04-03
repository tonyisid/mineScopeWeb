import React from 'react'
import FooterButton from './footer/FooterButton'

export default class Footer extends React.Component {

  render () {
    const link = (<a href="http://purecss.io/" target="_blank">PureCSS</a>)
    const styles = {
      container : {
        position : 'fixed',
        bottom : 0,
        left : 0,
        width : '100%'
      }
    }
    return (
      <div style={ styles.container } >
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 2015
          </div>
        </div>
        <FooterButton />
      </div>
    )
  }
}
