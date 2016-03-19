import React from 'react'

export default class Footer extends React.Component {

  render () {
    const link = (<a href="http://purecss.io/" target="_blank">PureCSS</a>)
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 2015
          </div>
        </div>
      </div>
    )
  }
}
