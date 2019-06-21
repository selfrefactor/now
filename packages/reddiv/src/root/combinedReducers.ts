import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

// IMPORT_STORES
import { notifyStore } from 'notify/reducers'
import { scrollStore } from '../scroll/reducers'
import { store } from './reducers'

const allReducers = {
  // CONNECT_STORES
  notifyStore,
  scrollStore,
  store,
}

export const combinedReducers = combineReducers({
  ...allReducers,
  router: routerReducer,
})
