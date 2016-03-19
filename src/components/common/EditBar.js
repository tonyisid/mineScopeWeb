import React from 'react'
import {  Button } from '../common'
import { ListGroupItem, ListGroup } from 'react-bootstrap'

export default class EditBar extends React.Component {
  static propTypes = {
    workActions : React.PropTypes.object,
    account : React.PropTypes.object,
    myWorks : React.PropTypes.object,
  }
  constructor (props) {
    super(props)
    this.state = {
      showCategoryPane : false
    }
  }
  handleCancel () {
    this.props.workActions.setEditMode( false )
  }
  selectAll () {
    this.props.workActions.addAllToEditingWork()
  }
  toggleCategoryPane () {
    this.setState({
      showCategoryPane : !this.state.showCategoryPane
    })
  }
  handleCategoryItemClick  (category) {
    return event => {
      const { editingWorks } = this.props.myWorks
      if (editingWorks.length !== 0 && category)
        this.props.workActions.moveEditingWorks(editingWorks, category)
      this.toggleCategoryPane()
    }
  }
  handleDelete () {
    const { editingWorks } = this.props.myWorks
    if (!editingWorks || editingWorks.length ===0)
      return
    this.props.workActions.deletingWorks( editingWorks)
  }
  handleDeleteCategory () {
    const { category } = this.props.myWorks
    if (!category) return
    this.props.workActions.deletingCategory(category)
  }
  render () {
    const styles = {
      base : {
        width : '100%',
        height : '64px',
      },
      right : {
        float : 'right'
      },
      categoryPane : {
        position : 'absolute',
        top : '40px',
        left : '80px',
        width : '200px',
      },
      listItem : {
        fontSize : '11px',
        outline : 'none'
      }
    }
    const { myCategories } = this.props.myWorks
    const categoryList = this.state.showCategoryPane ?
      myCategories.map(category => {
        return (
          <ListGroupItem style={ styles.listItem }
            key={ category.id }
            onClick={ ::this.handleCategoryItemClick(category) }>
            { category.name }
          </ListGroupItem>
        )
      }) : null
    const categoryPane = categoryList ? (
      <ListGroup style={ styles.categoryPane }>
        { categoryList }
      </ListGroup>
      ) : null
    return (
      <div style={ styles.base }>
        <Button onClick={ ::this.selectAll } >全选</Button>
        <Button ref="copyButton" onClick={ ::this.toggleCategoryPane }>复制到</Button>
        { categoryPane }
        <Button onClick={ ::this.handleDelete }>删除</Button>
        { this.props.myWorks.category ? (
          <Button onClick={ ::this.handleDeleteCategory }>
            删除此作品集
          </Button>
          ) : null }
        <Button onClick={ ::this.handleCancel }>取消</Button>
      </div>
    )
  }
}
