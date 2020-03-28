import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { fetchEpic } from './fetch'
import { initEpic } from './init'
import { onscrollEpic } from './onscroll'
import { preinitEpic } from './preinit'

export const scrollEpic = combineEpics(
  // CONNECT_EPICS
  initEpic,
  preinitEpic,
  fetchEpic,
  onscrollEpic,
)
