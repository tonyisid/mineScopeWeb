import React from 'react'
import { Input, Button } from '../common'
import { reduxForm } from 'redux-form'
import { Modal } from 'react-bootstrap'

export default class DeleteWorks extends React.Component {
  static propTypes = {
    workActions : React.PropTypes.any,
    myWorks : React.PropTypes.object,
  }
  cancelDeleteCategory () {
    this.props.workActions.cancelDeletingWorks()
  }
  deleteCategory () {
    const works = this.props.myWorks.deletingWorks
    this.props.workActions.deleteWorks(works)
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
          <p>确定要删除选中的{ this.props.myWorks.deletingWorks.length }个作品?</p>
          <span style={ styles.span }>注意：删除作品无法恢复！</span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ ::this.cancelDeleteCategory } >取消</Button>
          <Button onClick={ ::this.deleteCategory }>确认删除</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
