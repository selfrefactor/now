import { combineEpics } from 'redux-observable'

// IMPORT_EPICS
import { notifyEpic } from 'notify/epic'
import { scrollEpic } from '../../scroll/epics/'
import { clickEpic } from './click'
import { handleRangeEpic } from './handleRange'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  handleRangeEpic,
  clickEpic,
  scrollEpic,
  notifyEpic,
)
