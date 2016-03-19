import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Radium from 'radium'

@Radium
export default class PinMultiSelect extends React.Component {
  static propTypes = {
    options : React.PropTypes.array,
    value : React.PropTypes.any,
    onChange : React.PropTypes.func,
  }
  constructor (props) {
    super(props)
    this.state = { showOptionsPane : false }
    this.dropDown = this.dropDown.bind(this)
    this.hideMultiPane = this.hideMultiPane.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    document.body.addEventListener('click', this.hideMultiPane)
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.hideMultiPane)
  }

  nearest (element, className) {
    if (!element) return false
    return element.className.indexOf(className) > -1 ||
      this.nearest(element.parentElement, className)
  }

  dropDown () {
    this.setState({ showOptionsPane : !this.state.showOptionsPane })
  }

  hideMultiPane (e) {
    if (!this.nearest(e.target, 'multi-selector'))
      this.setState({
        showOptionsPane: false
      })
  }
  handleChange (e) {
    let itemId = e.target.getAttribute('data-item-id')
    if (!itemId) return
    itemId = parseInt(itemId)
    let newValue = this.props.value
    if (e.target.checked)
      newValue = this.props.value ? [...this.props.value,itemId] : [itemId]
    else
      newValue = this.props.value && this.props.value.filter( v => v != itemId )
    this.props.onChange(newValue)
  }
  handleItemClick (item) {
    return event => {
      const itemID = item.id
      let newValue = this.props.value
      if (newValue && newValue.find(v => v===itemID))
        newValue = newValue.filter( v => v !== itemID)
      else
        newValue = this.props.value ? [...this.props.value,itemID] : [itemID]
      this.props.onChange(newValue)
    }
  }
  render () {
    const styles = {
      container: {
        width: '100%',
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      button : {
        display : 'block',
        minHeight : '30px',
        //width : '90%',
        backgroundColor : '#FFF',
        textAlign : 'left',
        borderStyle : 'solid',
        borderWidth : '1px',
        borderColor : '#AAA',
        borderRadius : '3px',
        padding : '5px',
        marginTop: '5px',
        marginLeft: '5px',
        marginRight: '5px',
        marginBottom :'0px',
        fontSize : '14px',
        color : '#333',
        cursor : 'pointer',
      },
      multiPane: {
        //display : 'flex',
        flexWrap : 'wrap',
        position: 'absolute',
        width : '90%',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#AAA',
        borderRadius : '3px',
        marginTop: '1px',
        marginLeft: '10px',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor : '#FFF',
        boxShadow: '-2px 2px 3px #AAA',
        zIndex : 99,
      },
      listItem : {
        fontSize : '12px',
        outline : 'none'
      },
      checkbox: {
        width : '100%',
        lineHeight : '25px',
      }
    }
    const multiOptions = this.props.options.map( function (item) {
      return (
        <ListGroupItem
          style={ styles.listItem }
          key={ item.id }
          onClick={ ::this.handleItemClick(item) }>
          <input
            ref={'categoryItem'+item.id}
            type="checkbox"
            data-item-id={ item.id }
            style= {{ marginLeft : '15px' }}
            onChange ={ this.handleChange }
            checked={ this.props.value && this.props.value.find(i => i == item.id) } />
          { item.name }
        </ListGroupItem>
      )
    }.bind(this))
    const multiPane = (
      <ListGroup style={ styles.multiPane } >
        { multiOptions }
      </ListGroup>
    )
    let textOfValue = ''
    this.props.value &&
      this.props.options.map (category => {
        if (this.props.value.find( v => v == category.id ))
          textOfValue = textOfValue ?
          textOfValue + ',' + category.name : category.name
      })
    const renderPane = this.state.showOptionsPane ? multiPane : null
    return (
      <div className='multi-selector'
        style={ [ styles.container,this.props.style ] }
        onBlur={ this.hideMultiPane }>
        <div onClick={ this.dropDown }
          style={ styles.button} >
          { textOfValue }
        </div>
        { renderPane }
      </div>
    )
  }
}
