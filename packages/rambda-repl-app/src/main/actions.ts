import { createAction } from 'create-action';
import { CODE_CHANGE, SET_RESULTS } from '../constants'

export const codeChange = createAction(CODE_CHANGE)
export const setResults = createAction(SET_RESULTS)