import * as constants from '../constants'
import { post, get, put,del, API } from '../utils/httpRequest'
import handleActionError from '../utils/handle-action-error'

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

export function addBoard ( board ) {
  return dispatch => {
    post(API.BOARDS, board)
    .then(resp => {
      dispatch({
        type : constants.ADD_BOARDS,
        payload : resp.data
      })
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
