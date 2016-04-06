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
