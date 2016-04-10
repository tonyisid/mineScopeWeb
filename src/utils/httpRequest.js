import * as storage from '../persistence/storage'
const SERVER = 'http://localhost:8888'

const NETWORK_ERR = 'Maybe problem of network, please try again.'
const token = storage.get('token')

export const API ={
  USER : {
    LOGIN : SERVER + '/login',
    LOGOUT : SERVER + '/logout',
    REGISTER : SERVER + '/register',
    CURRENT : SERVER + '/currentuser',
    UPDATE : SERVER + '/update',
    APPLY_SMSCODE : SERVER + '/smscode',
    UPDATE_AVATAR : SERVER + '/account/avatar',
    CHAGNE_PASSWORD : SERVER + '/account/setPassword',
    CREATE_CHARGE : SERVER + '/account/createCharge',
    GET_CHARGE_RESULT : SERVER + '/account/queryCharge',
    THIRD_PART_LOGIN : SERVER + '/account/qrcode'
  },
  BOARDS : SERVER + '/boards',
  PRODUCT : {
    PRODUCTS : SERVER + '/products',
    GRAP : SERVER + '/grapproduct'
  },
  TAG : {
    CREATE_TAG : SERVER + '/tags/create',
    SEARCH_TAGS : SERVER + '/tags/search',
    QUERY_TAGS : SERVER + '/tags/query'
  }
}

export function fetch (url, type, data) {
  return new Promise(function (resolve,reject) {
    $.ajax({
      url : url,
      type : type,
      dataType : 'json',
      data : data,
      timeout : 5000,
      crossDomain : true,
      xhrFields:{
        withCredentials : true
      },
      beforeSend: function (request) {
        request.setRequestHeader('token', token)
      },
      success : (resp, statusText, request) => {
        console.log(resp)
        resolve(resp)
      } ,
      error : (resp, statusText, error) => {
        console.log(resp)
        reject({
          status : resp.status,
          errorMessage : resp.responseJSON.message
        })
      }
    })
  })
}
export function post (url, data) {
  return fetch(url,'POST', data)
}
export function del (url, data) {
  return fetch(url, 'DETLETE', data)
}
export function put (url, data) {
  return fetch(url, 'PUT', data)
}
export function get (url, data) {
  return fetch (url, 'GET', data)
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
