import { combineEpics } from 'redux-observable'
import { codeChangeEpic } from './codeChangeEpic'
// IMPORT_EPICS
import { execCodeEpic } from './execCodeEpic'
import { initEpic } from './initEpic'

export const mainEpic = combineEpics(
  // CONNECT_EPICS
  execCodeEpic,
  codeChangeEpic,
  initEpic,
)
