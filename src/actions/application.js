import * as constants from '../constants'
import { post, API } from '../utils/httpRequest'
import * as storage from '../persistence/storage'

export function login (form, redirect) {
  return dispatch => {
    dispatch({
      type: constants.LOGIN,
    })
    post(API.USER.LOGIN,form)
      .then(resp => {
        if (resp.result) {
          dispatch({
            type : constants.LOGIN_SUCCESS,
            user : resp.data
          })
          dispatch({
            type : constants.DISPLAY_INFO,
            info : '登录成功！欢迎回来：'+ resp.data.name
          })
          if (redirect) redirect
        } else {
          dispatch({
            type : constants.LOGIN_FAILED,
            error : resp.error
          })
        }
      }, error => {
        dispatch({
          type : constants.LOGIN_FAILED,
          error : error
        })
      })
  }
}

export function checkMobile (mobile) {
  return dispatch => {
    dispatch({
      type : constants.CHECK_MOBILE
    })
    post(API.USER.CHECK_MOBILE,mobile)
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
export function register (form,redirect) {
  return dispatch => {
    dispatch({
      type: constants.REGISTER
    })
    post(API.USER.REGISTER,form)
      .then(resp => {
        if (resp.result) {
          dispatch({
            type: constants.REGISTER_SUCCESS,
            user: resp.data,
          })
          dispatch({
            type: constants.DISPLAY_INFO,
            info: '注册成功，您可以用手机号码/邮箱地址：' + form.mobile + '登录'
          })
          if (redirect) redirect
        }
        else
          dispatch({
            type: constants.REGISTER_FAILED,
            error: resp.error
          })
      }, error => {
        dispatch({
          type: constants.REGISTER_FAILED,
          error: error
        })
      })
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


