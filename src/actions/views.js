import * as constants from '../constants'
import { post, get, put,del, API } from '../utils/httpRequest'
import handleActionError from '../utils/handle-action-error'

export function showEditPane () {
  return {
    type: constants.SHOW_EDIT_PANE
  }
}
export function hideEditPane () {
  return {
    type: constants.HIDE_EDIT_PANE
  }
}
export function showUserPane () {
  return {
    type: constants.SHOW_USER_PANE
  }
}
export function hideUserPane () {
  return {
    type: constants.HIDE_USER_PANE
  }
}
