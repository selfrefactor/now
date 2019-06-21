import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  NOTIFY,
  SCROLL_FETCH_READY,
  SCROLL_INC,
  SCROLL_INIT,
  SCROLL_INIT_READY,
} from '../constants'

// ACTIONS
export const notify = createAction(NOTIFY)
export const init = createAction(SCROLL_INIT)
export const scrollInc = createAction(SCROLL_INC)
export const initReady = createAction(SCROLL_INIT_READY)
export const fetchReady = createAction(SCROLL_FETCH_READY)
