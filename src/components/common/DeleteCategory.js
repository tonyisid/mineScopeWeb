import React from 'react'
import { Input, Button } from '../common'
import { reduxForm } from 'redux-form'
import { Modal } from 'react-bootstrap'

export default class DeleteCategory extends React.Component {
  static propTypes = {
    workActions : React.PropTypes.any,
    myWorks : React.PropTypes.object,
  }
  cancelDeleteCategory () {
    this.props.workActions.cancelDeletingCategory()
  }
  deleteCategory () {
    const category = this.props.myWorks.deletingCategory
    this.props.workActions.deleteCategory(category)
  }

  render () {
    const styles = {
      title : {
        fontSize : '16px',
        fontWeight : 500,
        padding: '10px',
      },
      span : {
        fontSize : '11px'
      }
    }
    return (
      <Modal show={ true }>
        <Modal.Header>
          <Modal.Title>确认删除</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>确定要删除作品集 { this.props.myWorks.deletingCategory.name } ?</p>
          <span style={ styles.span }>注意：删除作品集不会删除作品集下的作品</span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ ::this.cancelDeleteCategory } >取消</Button>
          <Button onClick={ ::this.deleteCategory }>确认删除</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
