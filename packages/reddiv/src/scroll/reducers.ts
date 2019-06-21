import {
  PREINIT,
  RANGE_CHANGE,
  SCROLL_FETCH_READY,
  SCROLL_INC,
  UPLIMIT_CHANGE,
} from '../constants'

import { getInitialState } from '../_helpers/getInitialState'

const initialState = getInitialState()

const START_INDEX = 5
const INC_INDEX = 8

export function scrollStore(
  state: ScrollStore = initialState,
  action: Action,
): ScrollStore {

  switch (action.type) {
    case SCROLL_FETCH_READY:
      return {
        ...state,
        currentIndex: state.currentIndex === 0 ? START_INDEX : state.currentIndex,
        ready: true,
        ...action.payload,
      }
    case SCROLL_INC:
      return {
        ...state,
        currentIndex: state.currentIndex + INC_INDEX < state.db.length ?
          state.currentIndex + INC_INDEX :
          state.currentIndex,
      }
    case UPLIMIT_CHANGE:
      return {
        ...state,
        db: state.db.filter(
          (dbInstance: DBInstance) => dbInstance.ups >= state.upLimit,
        ),
      }
    case RANGE_CHANGE:
      return {
        ...state,
        upLimit: action.payload,
      }
    case PREINIT:
      return {
        ...state,
        subreddit: action.payload,
      }
    default:
      return state
  }
}
