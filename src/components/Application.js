import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Menu from './Menu'
import Footer from './Footer'
import { Header } from './common'
import DisplayError from './DisplayError'
import DisplayInfo from './DisplayInfo'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)

    this.state = {
      isMenuActive: false
    }
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {
    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''
    const styles = {
      mainContent : {
        marginTop: '54px',
        marginLeft: '100px',
        marginRight: '100px',
      }
    }
    return (
      <div id="layout" className={activeClass}>
        <Header { ...this.props }/>
        <div id="main" style={ styles.mainContent } >
          <DisplayError />
          <DisplayInfo />
          {/* this will render the child routes */}
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
