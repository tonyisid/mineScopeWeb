import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import MenuListItem from './MenuListItem'

const GITHUB_REPO =
  'https://github.com/emmenko/redux-react-router-async-example'
const menuItems = [
  { text: 'Stargazers', link: '/stargazers/emmenko', icon: 'fa fa-star' },
  { text: 'Account', link: '/account', icon: 'fa fa-user' },
  { text: 'About', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: 'Fork Me', link: GITHUB_REPO, icon: 'fa fa-github', isExternal: true }
]

@connect(({ application }) => ({ application }), applicationActions)
export default class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
    switchLocale: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)
  }

  handleLanguageSwitch (evt) {
    this.props.switchLocale(evt.target.value)
  }

  render () {

    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">Redux</Link>

          <ul className="pure-menu-list">
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
        </div>
      </div>
    )
  }
}
