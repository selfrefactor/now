import {
  SET_DB,
  TOGGLE_PAUSED,
  INC_INDEX,
} from './constants'
// import { createAction } from 'create-action'

function createAction(type){
  return payload => ({
    type,
    payload,
  })
}

export const incIndex = createAction(INC_INDEX)
export const setDb = createAction(SET_DB)
export const togglePaused = createAction(TOGGLE_PAUSED)
