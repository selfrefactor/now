interface FSA<T>{
  type: string
  payload: T
}

export function createAction<T>(type:string){
  return (payload?: T): FSA<T> => ({
    type,
    payload
  })
}

import {
  // IMPORT_CONSTANTS
  SCROLL_FETCH_READY,
  SCROLL_INC,
  SCROLL_INIT,
  SCROLL_INIT_READY,
} from '../constants'

// ACTIONS
export const init = createAction(SCROLL_INIT)
export const scrollInc = createAction(SCROLL_INC)
export const initReady = createAction(SCROLL_INIT_READY)
export const fetchReady = createAction(SCROLL_FETCH_READY)
