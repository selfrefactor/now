import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

// IMPORT_STORES
import { scrollStore } from '../scroll/reducers'
import { store } from './reducers'

const allReducers = {
  // CONNECT_STORES
  scrollStore,
  store,
}

export const combinedReducers = combineReducers({
  ...allReducers,
  router: routerReducer,
})
