import { combineEpics } from 'redux-observable'

// EPICS
import { mainEpic } from '../../main/epics/'
import { clickEpic } from './clickEpic'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  mainEpic,
  clickEpic,
)
