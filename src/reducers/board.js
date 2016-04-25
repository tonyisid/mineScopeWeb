import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  boards : [],
  myBoards : [],
  currentBoard : null,
  grapedProduct : null,
  currentIndex : 0,
}

const actionHandlers = {
  [constants.GET_BOARDS]: (state, action) => ({
    boards : action.payload
  }),
  [constants.GET_BOARD]: (state, action) => ({
    currentBoard : action.payload
  }),
  [constants.SET_CURRENT_BOARD]: (state, action) => ({
    currentBoard : action.payload
  }),
  [constants.GRAP_FROM_URL]: (state, action) => ({
    grapedProduct : action.payload
  }),
  [constants.VIEW_BOARD]: (state, action) => ({
    currentIndex : action.payload,
  }),
  [constants.NEXT_BOARD]: (state, action) => ({
    currentIndex : state.currentIndex < state.boards.length-1 ?
      state.currentIndex + 1 : state.currentIndex,
  }),
  [constants.PREVIOUS_BOARD] : (state, action) =>({
    currentIndex : state.currentIndex > 0 ? state.currentIndex -1 : 0
  }),
  [constants.ADD_BOARD] : (state, action) => ({
    myBoards : [action.payload, ...state.myBoards]
  }),
  [constants.UPDATE_BOARD] : (state, action) =>({
    boards : state.boards.map( board =>
      board.id === action.board.id ? action.payload : board)
  }),
  [constants.DELETE_BOARD] : (state, action) => ({
    boards : state.boards.filter(board =>
      board.id !== action.payload.id)
  }),
  [constants.ADD_PRODUCT_TO_BOARD] : (state, action) => ({
    currentBoard : { ...state.currentBoard,
      products : [ ...state.currentBoard.products, action.product ] }
  }),
  [constants.REMOVE_PRODUCT_FROM_BOARD] : (state, action) => ({
    currentBoard : { ...state.currentBoard,
      products : state.currentBoard.products.filter( product =>
        product._id !== action.product._id) }
  })
}

export default createReducer(initialState, actionHandlers)
