import { combineEpics } from 'redux-observable'

// EPICS
import { mainEpic } from '../../main/epics'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  mainEpic,
)
