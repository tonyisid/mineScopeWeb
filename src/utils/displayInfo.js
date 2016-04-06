import { SHOW_INFO } from '../constants'

export default function displayInfo (dispatch,message) {
  return dispatch({
    type: SHOW_INFO,
    payload: message
  })
}
