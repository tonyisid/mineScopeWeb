import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  products : [],
  currentIndex : 0,
  grapProduct : null
}

const actionHandlers = {
  [constants.GET_PRODUCTS]: (state, action) => ({
    products : action.payload
  }),
  [constants.VIEW_PRODUCT]: (state, action) => ({
    currentIndex : action.payload,
  }),
  [constants.NEXT_PRODUCT]: (state, action) => ({
    currentIndex : state.currentIndex < state.products.length-1 ?
      state.currentIndex + 1 : state.currentIndex,
  }),
  [constants.PREVIOUS_PRODUCT] : (state, action) =>({
    currentIndex : state.currentIndex > 0 ? state.currentIndex -1 : 0
  }),
  [constants.ADD_PRODUCT] : (state, action) => ({
    products : [action.payload, ...state.products]
  }),
  [constants.UPDATE_PRODUCT] : (state, action) =>({
    products : state.products.map( product =>
      product.id === action.payload.id ? action.payload : product)
  }),
  [constants.DELETE_PRODUCT] : (state, action) => ({
    products : state.products.filter(product =>
      product.id !== action.payload.id)
  }),
  [constants.GRAP_PRODUCT] : (state, action) => ({
    grapProduct : action.payload
  }),
}

export default createReducer(initialState, actionHandlers)
