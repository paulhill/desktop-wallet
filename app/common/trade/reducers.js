import { createReducer } from '../utils'
import * as Types from './types'

export const INITIAL_STATE = {
  orderbook: undefined,
  openOrders: undefined,
  history: undefined,
  bestOffer: undefined
}

export function fetchStellarOrderBookRequest (state) {
  return {
    ...state
  }
}

export function fetchStellarOrderBookSuccess (state, payload) {
  const { orderbook, marketPrice, marketAmount } = payload
  return {
    ...state,
    orderbook,
    bestOffer: { marketPrice, marketAmount }
  }
}

export function fetchStellarOrderBookFailure (state, error) {
  return {
    ...state,
    error: true,
    error
  }
}

export function fetchStellarOpenOrdersRequest (state) {
  return {
    ...state
  }
}

export function fetchStellarOpenOrdersSuccess (state, payload) {
  const { openOrders } = payload
  return {
    ...state,
    openOrders: openOrders
  }
}

export function fetchStellarOpenOrdersFailure (state, error) {
  return {
    ...state,
    error: true,
    error
  }
}

export function fetchStellarTradeHistoryRequest (state) {
  return {
    ...state
  }
}

export function fetchStellarTradeHistorySuccess (state, payload) {
  const { history } = payload
  return {
    ...state,
    history
  }
}

export function fetchStellarTradeHistoryFailure (state, error) {
  return {
    ...state,
    error: true,
    error
  }
}

const stellarOrderBookReducers = {
  [Types.TRADE_STELLAR_ORDER_BOOK_REQUEST]: fetchStellarOrderBookRequest,
  [Types.TRADE_STELLAR_ORDER_BOOK_SUCCESS]: fetchStellarOrderBookSuccess,
  [Types.TRADE_STELLAR_ORDER_BOOK_FAILURE]: fetchStellarOrderBookFailure
}

const stellarOpenOrdersReducers = {
  [Types.TRADE_STELLAR_OPEN_ORDERS_REQUEST]: fetchStellarOpenOrdersRequest,
  [Types.TRADE_STELLAR_OPEN_ORDERS_SUCCESS]: fetchStellarOpenOrdersSuccess,
  [Types.TRADE_STELLAR_OPEN_ORDERS_FAILURE]: fetchStellarOpenOrdersFailure
}

const stellarTradeHistoryReducers = {
  [Types.TRADE_STELLAR_HISTORY_REQUEST]: fetchStellarTradeHistoryRequest,
  [Types.TRADE_STELLAR_HISTORY_SUCCESS]: fetchStellarTradeHistorySuccess,
  [Types.TRADE_STELLAR_HISTORY_FAILURE]: fetchStellarTradeHistoryFailure
}

export default createReducer (
  INITIAL_STATE, {
    ...stellarOrderBookReducers,
    ...stellarOpenOrdersReducers,
    ...stellarTradeHistoryReducers
  }
)