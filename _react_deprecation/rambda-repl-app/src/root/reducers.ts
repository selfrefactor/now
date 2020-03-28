import { combineReducers } from 'redux'

// STORES
import { store } from '../main/reducers'

const allReducers = {
  // CONNECT_STORES
  store,
}

export const rootReducer = combineReducers(allReducers)
