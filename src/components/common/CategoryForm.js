import React from 'react'
import { Input, Button } from '../common'
import { reduxForm } from 'redux-form'
import { Modal } from 'react-bootstrap'

export const fields = [
  'id',
  'name'
]
class CategoryForm extends React.Component {
  static propTypes = {
    fields : React.PropTypes.object,
    workActions : React.PropTypes.any,
    handleSubmit : React.PropTypes.func
  }
  cancelEditCategory () {
    this.props.workActions.cancelEditCategory()
  }
  saveCategory (form) {
    if (form.id) {
      form.categoryID = form.id
      this.props.workActions.updateCategory(form)
    }
    else
      this.props.workActions.createCategory(form)
  }
  render () {
    const {
      fields: {
        id,
        name,
      },
      handleSubmit
      } = this.props
    const styles = {
      container : {
        position : 'fixed',
        width : '350px',
        left : '50%',
        marginLeft : '-175px',
        backgroundColor : '#FFF',
        border : '1px solid #DDD',
        borderRadius : '5px',
        padding : '20px',
        zIndex : '999' ,
        boxShadow : '-10px 10px 10px #DDD'
      },
      title : {
        fontSize : '16px',
        fontWeight : 500,
        padding: '10px',

      }
    }
    return (
      <Modal show={ true }>
        <Modal.Body>
          <div style={ styles.title }>编辑作品集</div>
          <Input { ...name }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ ::this.cancelEditCategory } >取消</Button>
          <Button onClick={ handleSubmit(::this.saveCategory) }>保存</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default reduxForm({
  form: 'categoryForm',
  fields
},
state => ({
  initialValues: state.myWorks.editingCategory
}))( CategoryForm )
