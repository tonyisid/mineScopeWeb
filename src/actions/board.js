import * as constants from '../constants'
import { post, get, put,del, API } from '../utils/httpRequest'
import handleActionError from '../utils/handle-action-error'
import displayInfo from '../utils/displayInfo'

export function getBoards ( option ) {
  return dispatch => {
    get(API.BOARDS,option)
    .then(resp => {
      dispatch({
        type : constants.GET_BOARDS,
        payload : resp.data
      })
    }, error => {
      handleActionError(dispatch,error,constants.GET_BOARDS)
    })
  }
}

export function getBoardByID (id) {
  return dispatch => {
    get(API.BOARDS + '/' + id )
      .then( resp => {
        dispatch({
          type: constants.GET_BOARD,
          payload: resp
        })
      }, error=> {
        handleActionError(dispatch,error,constants.GET_BOARD)
      })
  }
}
export function setCurrentBoard (board) {
  return {
    type: constants.SET_CURRENT_BOARD,
    payload: board
  }
}
export function grapLink (url) {
  return dispatch => {
    post(API.PRODUCT.GRAP, { url : url })
      .then( resp => {
        dispatch({
          type: constants.GRAP_FROM_URL,
          payload: resp.data
        })
      }, error=>{
        handleActionError(dispatch,error,constants.GRAP_FROM_URL)
      })
  }
}
export function addProductToBoard (url,board) {
  return dispatch => {
    put(API.BOARDS + '/' + board._id+'/add', { type: 'p', url: url })
      .then( resp => {
        dispatch({
          type: constants.ADD_PRODUCT_TO_BOARD,
          board: board,
          product: resp
        })
      }, error => {
        handleActionError(dispatch,error,constants.GRAP_FROM_URL)
      })
  }
}
export function removeProductFromBoad (product, board) {
  return dispatch => {
    put(API.BOARDS + '/' + board._id + '/remove',
      { type : 'p', oid : product._id })
      .then(resp => {
        dispatch({
          type: constants.REMOVE_PRODUCT_FROM_BOARD,
          product : product,
          board: board
        })
        displayInfo(dispatch, '移除商品成功')
      })
      .catch(error => {

      })
  }
}
export function addBoard ( board ) {
  return dispatch => {
    post(API.BOARDS, board)
    .then(resp => {
      dispatch({
        type : constants.ADD_BOARDS,
        payload : resp.data
      })
      dispatch({
        type : constants.HIDE_EDIT_PANE
      })
      displayInfo(dispatch,'成功创建光棒：'+board.title)
    },error => {
      handleActionError(dispatch, error, constants.ADD_BOARDS)
    })
  }
}

export function updateBoard ( board ) {
  return dispatch => {
    put(API.BOARDS, board)
    .then(resp => {
      dispatch({
        type : constants.UPDATE_BOARDS,
        payload : board
      })

    }, error => {
      handleActionError(dispatch, error, constants.UPDATE_BOARD)
    })
  }
}

export function deleteBoard ( board ) {
  return dispatch => {
    del(API.WORKS,board)
    .then(resp=>{
      dispatch({
        type : constants.DEL_BOARD,
        payload : board
      })
    },error=>{
      handleActionError(dispatch, error, constants.DELETE_BOARD)
    })
  }
}
