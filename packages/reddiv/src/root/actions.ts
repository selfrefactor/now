import { createAction } from 'create-action'

import {
  CHANGE_UPS,
  INIT,
  PREINIT,
  RANGE_CHANGE,
  TOGGLE_NAVIGATION,
  UPLIMIT_CHANGE,
} from '../constants'

export const changeUps = createAction(CHANGE_UPS)
export const init = createAction(INIT)
export const preinit = createAction(PREINIT)
export const rangeChange = createAction(RANGE_CHANGE)
export const toggleNavigation = createAction(TOGGLE_NAVIGATION)
export const uplimitChange = createAction(UPLIMIT_CHANGE)
