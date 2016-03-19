import * as constants from '../constants'
import { post, get, put,del, API } from '../utils/httpRequest'
import handleActionError from '../utils/handle-action-error'

export function getProducts ( option ) {
  return dispatch => {
    get(API.PRODUCT.GET_WORK,option)
    .then(resp => {
      dispatch({
        type : constants.GET_WORKS,
        payload : resp
      })
    }, error => {
      dispatch({
        type : constants.GET_WROKS_ERROR,
        payload : error
      })
      handleActionError(dispatch,error,constants.GET_WORKS)
    })
  }
}

export function addProducts ( product ) {
  return dispatch => {
    post(API.WORKS, product)
    .then(resp => {
      dispatch({
        type : constants.ADD_PRODUCT,
        payload : resp
      })
    },error => {
      handleActionError(dispatch, error, constants.ADD_WORK)
    })
  }
}

export function updateProduct ( product ) {
  return dispatch => {
    put(API.WORKS, product)
    .then(resp => {
      dispatch({
        type : constants.UPDATE_WORK,
        payload : product
      })
    }, error => {
      handleActionError(dispatch, error, constants.UPDATE_WORK)
    })
  }
}

export function deleteProduct (product ) {
  return dispatch => {
    del(API.WORKS,product)
    .then(resp=>{
      dispatch({
        type : constants.DEL_WORK,
        payload : product
      })
    },error=>{
      handleActionError(dispatch, error, constants.DELETE_WORK)
    })
  }
}
