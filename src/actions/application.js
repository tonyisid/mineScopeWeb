import * as constants from '../constants'
import { post,get, API } from '../utils/httpRequest'
import * as storage from '../persistence/storage'
import handleActionError from '../utils/handle-action-error'
import handleActionInfo from '../utils/displayInfo'

export function signup (form,redirect) {
  return dispatch => {
    dispatch({
      type: constants.REGISTER
    })
    post(API.USER.REGISTER,form)
      .then(resp => {
        dispatch({
          type: constants.REGISTER_SUCCESS,
          user: resp.data,
        })
        handleActionInfo(dispatch,
          '注册成功，您可以用手机号码/邮箱地址：' + form.mobile + '登录')
        if (redirect) redirect
      }, error => {
        handleActionError(dispatch,error)
      })
  }
}

export function signin (form, redirect) {
  return dispatch => {
    post(API.USER.LOGIN,form)
      .then(resp => {
        dispatch({
          type : constants.LOGGED_IN,
          token : resp.token,
          user : resp.user
        })
        dispatch({
          type : constants.HIDE_SIGNIN_PANE
        })
        handleActionInfo(dispatch,
          '登录成功！欢迎回来'+ (resp.user.name ? ':'+resp.user.name : ''))
        if (redirect) redirect
      }, error => {
        handleActionError(dispatch, error)
      })
  }
}
export function getCurrentUser (token) {
  return dispatch => {
    get(API.USER.CURRENT,token)
      .then(resp=>{
        dispatch({
          type: constants.CURRENT_USER,
          payload: resp.data
        })
      }, error=>{
        dispatch({
          type: constants.NO_CURRENT_USER,
          payload: error
        })
      })
  }
}
export function checkEmail (email) {
  return dispatch => {
    post(API.USER.CHECK_MOBILE,email)
      .then(resp => {
        if (resp.result)
          dispatch({
            type: constants.CHECK_MOBILE_EXIST
          })
        else
          dispatch({
            type: constants.CHECK_MOBILE_NO_EXIST,
            error: resp.error
          })
      }), error => {
        dispatch({
          type: constants.CHECK_MOBILE_FAILED,
          error: error
        })
      }
  }
}

export function applyForSMSCode (form) {
  return dispatch => {
    dispatch({
      type : constants.APPLY_FOR_SMSCODE
    })
    post(API.USER.APPLY_SMSCODE,form)
      .then(resp => {
        if (resp.result) {
          dispatch({
            type: constants.APPLY_FOR_SMSCODE_SUCCESS
          })
          dispatch({
            type: constants.DISPLAY_INFO,
            info: '验证码已经发送到手机/邮箱：' + form.mobile
          })
        }
        else
          dispatch({
            type: constants.APPLY_FOR_SMSCODE_FAILED,
            error: resp.error
          })
      }), error => {
        dispatch({
          type: constants.APPLY_FOR_SMSCODE_FAILED,
          error: error
        })
      }
  }
}
export function getCurrentUser () {
  return dispatch => {
    dispatch({
      type: constants.CURRENT_USER
    })
    post(API.USER.CURRENT_USER)
      .then(resp => {
        if (resp.result)
          dispatch({
            type: constants.CURRENT_USER_SUCCESS,
            user: resp.data
          })
        else
          dispatch({
            type: constants.CURRENT_USER_FAILED,
            error: resp.data
          })
      }, error => {
        if (error.status === 406) {
          dispatch({
            type: constants.CURRENT_USER_EXPIRED
          })
        } else
          dispatch({
            type: constants.CURRENT_USER_FAILED,
            error: error
          })
      })
  }
}
export function logout () {
  return dispatch => {
    post(API.USER.LOGOUT)
      .then(resp=>{
        dispatch({
          type: constants.LOGOUT
        })
      },error=>{
        dispatch({
          type : constants.displayError,
          error : '登出失败'
        })
      })
  }
}
export function switchLocale (locale) {
  return { type: constants.LOCALE_SWITCHED, locale: locale }
}

export function displayInfo (info) {
  return {
    type: constants.DISPLAY_INFO,
    info: info
  }
}
export function displayError (error) {
  return {
    type: constants.DISPLAY_ERROR,
    error: error
  }
}

export function hideError () {
  return { type: constants.HIDE_ERROR }
}

export function hideInfo () {
  return { type: constants.HIDE_INFO }
}
