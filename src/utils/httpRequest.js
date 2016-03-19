import * as storage from '../persistence/storage'
// const SERVER = 'http://test.pin3d.cn/p3d/v2'
const SERVER = 'http://localhost:8888'

const NETWORK_ERR = 'Maybe problem of network, please try again.'
export const API ={
  USER : {
    LOGIN : SERVER + '/login',
    LOGOUT : SERVER + '/logout',
    REGISTER : SERVER + '/register',
    UPDATE : SERVER + '/update',
    APPLY_SMSCODE : SERVER + '/smscode',
    UPDATE_AVATAR : SERVER + '/account/avatar',
    CHAGNE_PASSWORD : SERVER + '/account/setPassword',
    CREATE_CHARGE : SERVER + '/account/createCharge',
    GET_CHARGE_RESULT : SERVER + '/account/queryCharge',
    THIRD_PART_LOGIN : SERVER + '/account/qrcode'
  },
  PRODUCT : {
    GET_WORK : SERVER + '/products',
  },
  TAG : {
    CREATE_TAG : SERVER + '/tags/create',
    SEARCH_TAGS : SERVER + '/tags/search',
    QUERY_TAGS : SERVER + '/tags/query'
  }
}
export function post (url, data) {
  return new Promise(function (resolve,reject) {
    $.ajax({
      url : url,
      type : 'POST',
      dataType : 'json',
      data : data,
      timeout : 5000,
      crossDomain : true,
      xhrFields:{
        withCredentials : true
      },
      success : (resp, statusText, request) => {
        console.log(resp)
        resolve(resp)
      } ,
      error : (request, statusText, error) => {
        console.log(error)
        reject({
          status : request.status,
          errorMessage : NETWORK_ERR
        })
      }
    })
  })
}

export function postFile (url, data) {
  return new Promise(function (resolve,reject) {
    $.ajax({
      url : url,
      type : 'POST',
      dataType : 'json',
      cache : false,
      data : data,
      processData : false,
      contentType : false,
      timeout : 5000,
      crossDomain : true,
      xhrFields:{
        withCredentials : true
      },
      success : (resp, statusText, request) => {
        console.log(resp)
        resolve(resp)
      } ,
      error : (request, statusText, error) => {
        console.log(error)
        reject({
          status : request.status,
          errorMessage : NETWORK_ERR
        })
      }
    })
  })
}
export function get (url, data) {
  return new Promise(function (resolve,reject) {
    $.ajax({
      url : url,
      type : 'GET',
      dataType : 'json',
      data : data,
      timeout : 5000,
      crossDomain : true,
      xhrFields:{
        withCredentials : true
      },
      success : resp => resolve(resp) ,
      error : error => reject(error)
    })
  })
}

export function getStatic (url, data) {
  return new Promise(function (resolve,reject) {
    $.ajax({
      url : url,
      type : 'GET',
      dataType : 'text',
      data : data,
      timeout : 5000,
      crossDomain : true,
      success : resp => resolve(resp) ,
      error : error => reject(error)
    })
  })
}
